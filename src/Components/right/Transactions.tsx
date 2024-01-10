/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { allOrders } from "../../assets/allTransactions";

export default function Transactions() {
  
  const formatDate = (dateString: string): string => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="px-7">
      <p className="font-extrabold">Transactions | This Month</p>

      <div className="mt-2 text-sm flex flex-col bg-white">
        <div className="grid grid-cols-4 text-black text-xs text-slate-400 bg-slate-200 p-2">
          <p>Order ID</p>
          <p>Order Date</p>
          <p>Order amount</p>
          <p>Transaction Fees</p>
        </div>
        <div className="flex flex-col gap-2 p-2">
          {allOrders.map((order) => (
            <div key={order.orderId} className="grid grid-cols-4 py-1 hover:bg-slate-100 cursor-pointer">
              <p className="text-blue-500">#{order.orderId}</p>
              <p>{formatDate(order.orderDate)}</p>
              <p>&#8377; {order.orderAmount}</p>
              <p>&#8377; {order.transactionFees}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
