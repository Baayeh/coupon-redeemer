import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Tag } from 'primereact/tag';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../helpers/store_helper';
import { getAllCoupons } from '../../redux/coupons/couponSlice';

type CouponProps = {
  id: number;
  code: string;
  redeemed: boolean;
  client: string;
};

export const ResearcherApp = () => {
  const [coupons, setCoupons] = useState([]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const statusBodyTemplate = (coupon: CouponProps) => {
    return (
      <Tag
        value={coupon.redeemed ? 'Redeemed' : 'Active'}
        severity={getSeverity(coupon)}
      ></Tag>
    );
  };

  const RedeemedBy = (coupon: CouponProps) => {
    let content = '';
    if (coupon.client) {
      content = coupon.client;
    } else {
      content = 'N/A';
    }
    return content;
  };

  const getSeverity = (coupon: CouponProps) => {
    switch (coupon.redeemed) {
      case true:
        return 'danger';
      case false:
        return 'success';
      default:
        return null;
    }
  };

  const header = (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <span className="text-xl text-900 font-bold">Coupons</span>
      <Button
        icon="pi pi-plus"
        rounded
        raised
        onClick={() => navigate('create')}
      />
    </div>
  );

  useEffect(() => {
    dispatch(getAllCoupons()).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') {
        setCoupons(res.payload);
      }
    });
  }, []);

  return (
    <section>
      <div className="flex items-center gap-x-3 mb-10">
        <Link to="/">
          <Button icon="pi pi-angle-double-left" rounded text />
        </Link>
        <h2 className="text-3xl">Admin Panel</h2>
      </div>

      <div className="card">
        <DataTable
          value={coupons}
          showGridlines
          header={header}
          scrollable
          scrollHeight="400px"
          style={{ minWidth: '50rem' }}
          className="data-table"
        >
          <Column
            header="#"
            headerStyle={{ width: '3rem' }}
            body={(_, options) => options.rowIndex + 1}
          ></Column>
          <Column field="code" header="Code"></Column>
          <Column header="Status" body={statusBodyTemplate}></Column>
          <Column header="Redeemed By" body={RedeemedBy}></Column>
        </DataTable>
      </div>
    </section>
  );
};
