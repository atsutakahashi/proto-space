class LikesController < ApplicationController

  def create
    @like = Like.create(user_id: current_user.id, prototype_id: params[:prototype_id])
    respond_to do |format|
     format.json { render json: @prototype}
    end
  end

  def destroy
    like = Like.find_by(user_id: current_user.id, prototype_id: params[:prototype_id])
    like.destroy
    respond_to do |format|
     format.json { render json: @prototype}
    end
  end

end
