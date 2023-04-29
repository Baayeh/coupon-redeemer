import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import handleToastr from '../../helpers/handleToastr';
import { useAppDispatch } from '../../helpers/store_helper';
import {
  getRandomCoupon,
  redeemACoupon,
} from '../../redux/coupons/couponSlice';

type RandomCoupon = {
  id: number;
  code: string;
  client: string;
  redeemed: boolean;
};

const CandidateApp = () => {
  const [random, setRandom] = useState<RandomCoupon>();
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const generateCode = () => {
    if (random && error === '') {
      setCode(random.code);
    } else {
      handleToastr(error, 'error', 'Try again later');
    }
  };

  const handleRedeem = () => {
    if (random && code && name) {
      const id = random.id;
      const coupon = {
        ...random,
        redeemed: true,
        client: name,
      };

      dispatch(
        redeemACoupon({
          id,
          coupon,
        })
      ).then((res) => {
        if (res.meta.requestStatus === 'fulfilled') {
          handleToastr(res.payload.message, 'success');
          navigate('/congrats');
        }
      });
    } else {
      handleToastr('Something is wrong', 'error', 'Try again later');
    }
  };

  useEffect(() => {
    if (random === undefined) {
      dispatch(getRandomCoupon()).then((res) => {
        if (res.meta.requestStatus === 'fulfilled') {
          setRandom(res.payload);
        }

        if (res.meta.requestStatus === 'rejected') {
          setError(res.payload.error);
        }
      });
    }
  }, [random]);

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
        <h1 className="text-2xl uppercase">Redeem Your Coupon</h1>
      </div>

      {!random && (
        <p className="bg-red-500 rounded-full px-10 py-2 my-4">
          Ooops🥺 All coupons have been redeemed. Try again later...
        </p>
      )}

      <div className="my-10">
        <div className="mb-10">
          <input
            type="text"
            disabled
            value={code}
            className="p-3 border rounded-l-lg"
            aria-label="Code"
            placeholder="Coupon Code"
          />
          <Button
            className="disabled:cursor-not-allowed"
            onClick={generateCode}
            disabled={random === undefined}
          >
            Generate Code
          </Button>
        </div>
        <div className="mb-10">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border rounded-lg w-full"
            aria-label="Code"
            placeholder="Your name"
            disabled={random === undefined}
          />
        </div>
        <button
          onClick={handleRedeem}
          disabled={random === undefined}
          className="disabled:bg-[#3d3a3a] disabled:hover:border-[#242424] disabled:cursor-not-allowed"
        >
          Redeem Coupon
        </button>
      </div>
    </section>
  );
};

export default CandidateApp;
