import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Tag } from 'primereact/tag';
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';

type CouponProps = {
  id: number;
  code: string;
  redeemed: boolean
  client: string
}

export const ResearcherApp = () => {
  const coupons: CouponProps[] = [
    {
      id: 1,
      code: 'CDE123',
      redeemed: true,
      client: 'Kwasi'
    },
    {
      id: 2,
      code: 'CDE153',
      redeemed: false,
      client: ''
    },
    {
      id: 3,
      code: 'CDE173',
      redeemed: true,
      client: 'Alaska'
    },
    {
      id: 4,
      code: 'CDE413',
      redeemed: false,
      client: ''
    },
  ]

  const statusBodyTemplate = (coupon: CouponProps) => {
    return <Tag value={coupon.redeemed ? 'Redeemed' : 'Active'} severity={getSeverity(coupon)}></Tag>;
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
      <Button icon="pi pi-plus" rounded raised />
    </div>
  );

  return (
    <section>
      <div className='flex items-center gap-x-3 mb-10'>
        <Link to='/'>
          <Button icon="pi pi-angle-double-left" rounded text />
        </Link>
        <h2 className='text-3xl'>Admin Panel</h2>
      </div>

      <div className="card">
        {/* <DataTable value={coupons}
          responsiveLayout="scroll" showGridlines
          header="All Coupons"
          tableStyle={{ minWidth: '50rem' }} scrollable scrollHeight="800px" className="data-table">
          {columns.map((col) => (
            <Column key={col.field} field={col.field} header={col.header} />
          ))}
        </DataTable> */}
        <DataTable value={coupons} showGridlines header={header} scrollable scrollHeight="400px" style={{ minWidth: '50rem' }} className="data-table">
          <Column header="#" headerStyle={{ width: '3rem' }} body={(_, options) => options.rowIndex + 1}></Column>
          <Column field="code" header="Code"></Column>
          <Column header="Status" body={statusBodyTemplate}></Column>
          <Column header="Redeemed By" field='client'></Column>
        </DataTable>
      </div>
    </section>
  )
}