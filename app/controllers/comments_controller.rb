class CommentsController < ApplicationController
  before_action :authenticate_user!

  def create
    @comment = Comment.create(text: comment_params[:text], prototype_id: comment_params[:prototype_id], user_id: current_user.id)
    respond_to do |format|
      format.html { redirect_to prototype_path(params[:prototype_id]) }
      format.json
    end
  end

  def edit
  end

  def update
    @comment.update(comment_params)
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
  end

  private
    def comment_params
     params.require(:comment).permit(:text).merge(prototype_id: params[:prototype_id], user_id: current_user.id)
    end
end
