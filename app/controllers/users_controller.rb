class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    def index
      users = User.all
      render json: users
    end

    def show
        render json: @current_user, status: :ok
    end
    
    def update
      user = User.find_by(id: params[:id])
      user.update(user_params)
      render json: user, status: :ok
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :password)
    end
end
