/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { allOrders } from "../../assets/allTransactions";
import { BiSortAlt2 } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { LuDownload } from "react-icons/lu";


export default function Transactions() {
  
  const formatDate = (dateString: string): string => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="px-7">
      <p className="font-extrabold">Transactions | This Month</p>

      <div className="mt-2 text-sm flex flex-col gap-3 bg-white p-2">
        <div className="flex justify-between items-center">
        <div className="flex">
        <span className="block md:absolute mt-2 ml-4">
          <AiOutlineSearch size={18} />
        </span>

        <input
          placeholder="Search anything"
          className="hidden md:block p-1 sm:px-12 border-slate-200 rounded-xl border-2 "
        />
      </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center border-2 border-slate-300 py-1 px-3">
            <span>Sort</span>
            <BiSortAlt2/>
          </div>
          <span className="py-1 px-3 border-2 border-slate-300"><LuDownload size={18}/></span>
        </div>
        </div>
        <div className="grid grid-cols-4  text-xs text-slate-400 bg-slate-200 p-2">
          <p>Order ID</p>
          <p>Order Date</p>
          <p>Order amount</p>
          <p>Transaction Fees</p>
        </div>
        <div className="flex flex-col gap-2 p-2 text-xs md:text-md">
          {allOrders.map((order) => (
            <div key={order.orderId} className="grid grid-cols-4 gap-2 md:gap-0 py-1 hover:bg-slate-100 cursor-pointer">
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
