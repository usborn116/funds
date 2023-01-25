# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  protect_from_forgery with: :null_session
  respond_to :json
  def create
    build_resource(sign_up_params)
    resource.save
    sign_in(resource_name, resource)
    render json: resource
  end

  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end

  # If you have extra params to permit, append them to the sanitizer.
  def configure_account_update_params
    devise_parameter_sanitizer.permit(:account_update, keys: [:name])
  end

  private
  def sign_up_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
