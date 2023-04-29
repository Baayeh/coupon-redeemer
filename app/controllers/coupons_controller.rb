class CouponsController < ApplicationController
  before_action :set_coupon, only: %i[ show update destroy ]

  def index
    coupons = Coupon.all.order(created_at: :desc)
    render json: coupons
  end

  def random
    random_coupon = Coupon.where(redeemed: false).order("RANDOM()").first

    if random_coupon.present?
      render json: random_coupon
    else
      render json: {
        error: "No available coupons",
      }, status: :not_found
    end
  end

  def create
    coupon = Coupon.new(coupon_params)

    if coupon.save
      render json: {
        message: "Coupon created🎊",
      }, status: :created
    else
      render json: {
               error: "Coupon could not be create🥺",
               errors: coupon.errors.full_messages,
             }, status: :unprocessable_entity
    end
  end

  def update
    if @coupon.update(coupon_params)
      render json: {
        message: "You have redeemed your coupon",
      }, status: :ok
    else
      render json: {
               error: "Something went wrong. Try again",
               errors: @coupon.errors.full_messages,
             }, status: :unprocessable_entity
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_coupon
    @coupon = Coupon.find(params[:id])
  end

  def coupon_params
    params.require(:coupon).permit(:code, :redeemed, :client)
  end
end
