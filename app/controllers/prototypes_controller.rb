class PrototypesController < ApplicationController
  before_action :set_prototype, only: [:show, :destroy, :edit, :update]

  def index
    @prototypes = Prototype.page(params[:page]).per(4).order("likes_count DESC")
  end

  def newest
    @prototypes = Prototype.page(params[:page]).per(4).order("created_at DESC")
  end

  def new
    @prototype = Prototype.new
    @prototype.captured_images.build
    @prototype.tags.build
  end

  def create
    @prototype = Prototype.new(prototype_params)
    if @prototype.save
      redirect_to :root, notice: 'New prototype was successfully created'
    else
      flash.now[:alert] = 'New prototype was unsuccessfully created'
      render :new
     end
  end

  def show
    @comment = Comment.new
    @comments = @prototype.comments
    @likes = Like.where(prototype_id: params[:id])
  end

  def destroy
    if @prototype.user_id == current_user.id
        @prototype.destroy
    end
  end

  def edit
  end

  def update
    if @prototype.update(update_prototype_params)
      redirect_to root_path, notice: 'Your prototype was successfully updated'
    else
      flash.now[:alert] = 'Your prototype was unsuccessfully updated'
      render :show
    end
  end

  private

  def set_prototype
    @prototype = Prototype.find(params[:id])
  end

  def prototype_params
    params.require(:prototype).permit(
      :title,
      :catch_copy,
      :concept,
      :user_id,
      captured_images_attributes: [:content, :status],
      tags_attributes: [:name]
    )
  end

  def update_prototype_params
    params.require(:prototype).permit(
      :title,
      :catch_copy,
      :concept,
      :user_id,
      captured_images_attributes: [:id, :content, :status])
  end
end
