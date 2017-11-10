class PrototypesController < ApplicationController
  before_action :set_prototype, only: :show

  def index
    @prototypes = Prototype.all
  end

  def new
    @prototype = Prototype.new
    @prototype.captured_images.build
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
  end

  def destroy
    @prototype = Prototype.find(params[:id])
    if @prototype.user_id == current_user.id
        @prototype.destroy
    end
  end

  def edit
    @prototype = Prototype.find(params[:id])
  end

  def update
    @prototype = Prototype.find(params[:id])
    @prototype.captured_images.clear
    if @prototype.update_attribute(update_prototype_params)
      redirect_to root_path, notice: 'Your prototype was successfully updated'
    else
      flash.now[:alert] = 'Your prototype was unsuccessfully updated'
      render :edit
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
      captured_images_attributes: [:content, :status]
    )
  end

  def update_prototype_params
    params.require(:prototype).permit(:title, :catch_copy, :concept, :user_id, captured_images_attributes: [:content, :status, :_destroy, :id])
  end

end
