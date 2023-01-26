class FundsController < ApplicationController
  before_action :set_fund, only: %i[ show edit update destroy ]
  protect_from_forgery with: :null_session
  before_action :authenticate_user!

  # GET /funds or /funds.json
  def index
    @funds = Fund.where(user_id: current_user.id)
    render json: @funds
  end

  # GET /funds/1 or /funds/1.json
  def show
  end

  # GET /funds/new
  def new
    @fund = Fund.new
  end

  # GET /funds/1/edit
  def edit
  end

  # POST /funds or /funds.json
  def create
    @fund = Fund.new(fund_params)

    if @fund.save
      render json: @fund, status: :created, location: fund_path(@fund)
    else
      render json: @fund.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /funds/1 or /funds/1.json
  def update
    if @fund.update(fund_params)
      render json: @fund, location: fund_path(@fund)
    else
      render json: @fund.errors, status: :unprocessable_entity
    end
  end

  # DELETE /funds/1 or /funds/1.json
  def destroy
    @fund.destroy

    render json: { message: 'fund was deleted'}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_fund
      @fund = Fund.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def fund_params
      params.require(:fund).permit(:name, :target, :allocated, :target_date, :user_id)
    end
end
