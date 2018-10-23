class Api::TracklistsController < ApplicationController
before_action :set_tracklist, only: [:show,:edit,:destroy,:update]
# before_action :authenticate_user
# before_action :set_banana, only: [:show, :update, :destroy]
  def index
    render json: Tracklist.all
  end

  def popular
    render json: Tracklist.all
  end


  def create
    tracklist = Tracklist.new(tracklist_params)
    if tracklist.save
      render json: tracklist
    else
      render json: {message: tracklist.errors}, status: 400
  end
end

def update
  if @tracklist.update(tracklist_params)
    @tracklist.save
    render json: @tracklist
  else
    render json: {message: tracklist.errors}, status: 400
  end
end

def destroy
  if @tracklist.destroy
    render status: 204
  else
    render json: {message: @tracklist.errors}, status: 400
  end
end
  def show
    render json: Tracklist.find_by(id: params[:id])
  end

end

private

def set_tracklist
  @tracklist = Tracklist.find(params[:id])
end

def tracklist_params
params.require(:tracklist).permit(:title,:url,:genre,:tracklist,:likes)
end
