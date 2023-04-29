import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { NewCoupon, UpdateCoupon } from '../../helpers/types';
import {
  fetchCoupons,
  fetchRandomCoupon,
  newCoupon,
  redeemCoupon,
} from '../api/enpoints';

const initialState = {
  coupons: [],
  status: '',
};

export const getAllCoupons = createAsyncThunk(
  'coupons/all',
  async (_, thunkAPI) => {
    try {
      const response = await fetchCoupons();
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const createNewCoupon = createAsyncThunk(
  'coupons/new',
  async (payload: NewCoupon, thunkAPI) => {
    try {
      const response = await newCoupon(payload);
      return response.data;
    } catch (err: any) {
      thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const getRandomCoupon = createAsyncThunk(
  'coupons/random',
  async (_, thunkAPI) => {
    try {
      const response = await fetchRandomCoupon();
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const redeemACoupon = createAsyncThunk(
  'coupons/redeem',
  async (payload: UpdateCoupon, thunkAPI) => {
    try {
      const response = await redeemCoupon(payload);
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const couponApi = createSlice({
  name: 'coupons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCoupons.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(getAllCoupons.fulfilled, (state, action) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
        IsFulfilled.coupons = action.payload;
      })
      .addCase(getAllCoupons.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
        IsRejected.coupons = [];
      })
      .addCase(createNewCoupon.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(createNewCoupon.fulfilled, (state) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
      })
      .addCase(createNewCoupon.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
        IsRejected.coupons = [];
      })
      .addCase(getRandomCoupon.fulfilled, (state) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
      })
      .addCase(redeemACoupon.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(redeemACoupon.fulfilled, (state) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
      })
      .addCase(redeemACoupon.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
        IsRejected.coupons = [];
      });
  },
});

export default couponApi.reducer;
