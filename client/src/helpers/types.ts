export type NewCoupon = {
  code: string;
};

export type UpdateCoupon = {
  id: number;
  coupon: {
    redeemed: boolean;
    client: string;
  };
};
