import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';

export const CreateCoupon = () => {
  const [code, setCode] = useState('');

  const generateCode = () => {
    const random_code = Math.random().toString(36).slice(2, 10).toUpperCase();
    setCode(random_code);
  };

  const createCoupon = () => {
    if (code) {
      const coupon = {
        code,
      };

      console.log(coupon);
    } else {
      alert('Generate code');
    }
  };

  return (
    <section>
      <h1 className="text-2xl uppercase">Create a coupon</h1>

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
