import { Button } from 'primereact/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import handleToastr from '../../helpers/handleToastr';
import { useAppDispatch } from '../../helpers/store_helper';
import { createNewCoupon } from '../../redux/coupons/couponSlice';

export const CreateCoupon = () => {
  const [code, setCode] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const generateCode = () => {
    const random_code = Math.random().toString(36).slice(2, 10).toUpperCase();
    setCode(random_code);
  };

  const createCoupon = () => {
    if (code) {
      const coupon = {
        code,
      };

      dispatch(createNewCoupon(coupon)).then((res) => {
        console.log(res.payload);
        handleToastr(res.payload.message, 'success');
        navigate('/setup');
      });
    } else {
      alert('Generate code');
    }
  };

  return (
    <section>
      <div className="relative">
        <Button
          icon="pi pi-angle-double-left"
          rounded
          text
          className="absolute -top-[0.5rem] left-0"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-2xl uppercase">Create a coupon</h1>
      </div>

      <div className="my-10">
        <input
          type="text"
          disabled
          value={code}
          className="p-3 border rounded-l-lg"
          aria-label="Code"
          placeholder="Coupon Code"
        />
        <Button className="" onClick={generateCode}>
          Generate Code
        </Button>
      </div>
      <button onClick={createCoupon}>Create Coupon</button>
    </section>
  );
};
