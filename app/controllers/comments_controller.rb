class CommentsController < ApplicationController

  def create
    @comment = Comment.create(text: comment_params[:text], prototype_id: comment_params[:prototype_id], user_id: current_user.id)
    respond_to do |format|
      format.html { redirect_to tweet_path(params[:prototype_id]) }
      format.json
    end
  end

  private
    def comment_params
     params.require(:comment).permit(:text).merge(prototype_id: params[:prototype_id], user_id: current_user.id)
    end
end