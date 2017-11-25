class TagsController < ApplicationController

  def index
    @tags = Tag.all
  end

  def create
    @tag = Tag.create(tag_params)
  end

  def edit
  end

  def update
    @tag.update(tag_params)
  end

  def destroy
    tag = Tag.find_by(prototype_id: params[:prototype_id])
    tag.destroy
  end

  private
  def tag_params
    params.require(:taga).permit(:name, { prototype_ids: [] })
  end

end
