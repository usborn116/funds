class AccountsController < ApplicationController
  before_action :set_account, only: %i[ show edit update destroy ]
  protect_from_forgery with: :null_session
  before_action :authenticate_user!
  


  # GET /accounts or /accounts.json
  def index
    @accounts = Account.where(user_id: current_user.id).order('name DESC')
    render json: @accounts

  end

  # GET /accounts/1 or /accounts/1.json
  def show
  end

  # GET /accounts/new
  def new
    @account = Account.new
  end

  # GET /accounts/1/edit
  def edit
  end

  # POST /accounts or /accounts.json
  def create
    @account = Account.new(account_params)

    if @account.save
      render json: @account, status: :created, location: account_path(@account)
    else
      render json: @account.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /accounts/1 or /accounts/1.json
  def update
    if @account.update(account_params)
      render json: @account, location: account_path(@account)
    else
      render json: @account.errors, status: :unprocessable_entity
    end
  end

  # DELETE /accounts/1 or /accounts/1.json
  def destroy
    @account.destroy

    render json: { message: 'account was deleted'}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_account
      @account = Account.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def account_params
      params.require(:account).permit(:name, :amount, :user_id)
    end
end
