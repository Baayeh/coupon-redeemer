import { NewCoupon, UpdateCoupon } from '../../helpers/types';
import instance from './axios';

// Fetch all coupons
export const fetchCoupons = async () => {
  return await instance.get('/');
};

// create a coupon
export const newCoupon = async (code: NewCoupon) => {
  return await instance.post('/', { coupon: code });
};

// get random coupon
export const fetchRandomCoupon = async () => {
  return await instance.get('/random');
};

// redeem coupon
export const redeemCoupon = async (payload: UpdateCoupon) => {
  return await instance.patch(`/${payload.id}`, {
    coupon: payload.coupon,
  });
};
