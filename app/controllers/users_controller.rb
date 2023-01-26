class UsersController < ApplicationController
  protect_from_forgery with: :null_session
	before_action :authenticate_user!
	before_action :set_user, only: %i[ show update ]
  
  def update
		if @user.update(user_params)
			@user.save
			render json: @user
		else
			render json: { message: 'could not update'}
		end
  end

  private

	def set_user
		@user = current_user
	end

	def user_params
		params.require(:user).permit(:name, :email, :password)
	end

end
