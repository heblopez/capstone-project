class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: :ok
    else
      respond_unauthorized("could not be created, username already exists")
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :phone, :role)
  end
end
