class UniversitiesController < ApplicationController
    skip_before_action :authorize, only: :index
  def create
    university = University.create()
    render json: university, status: :created 
  end

  def index
    universities = University.all
    render json: universities
  end
  
  def show
    university = University.find(params[:id]) 
    render json: university, status: :ok
  end
  
  def update
    university = University.find_by(id: params[:id])
    university.update(university_params)
    render json: university, status: :ok
  end
  
  def destroy
    university = University.find(params[:id])
    university.destroy
    head :no_content
  end
  
    private

    def university_params
      params.permit(:name, :location, :website, :image_url)
    end
end
