import Box from "../Box";


export default function Overview() {
  return (
    <div className='flex flex-col gap-4 px-7'>
        <div className='flex justify-between'>
         <p className='text-lg font-bold'>Overview</p>
         <button className='border-2 border-slate-200 bg-slate-50 px-4'>Last Month</button>
        </div>
        <div className="flex justify-between gap-10 ">
        <Box title="Online Orders" content="231"/>
        <Box title="Amount Received" content="23,92,312.19"type="price"/>
        </div>
    </div>
  )
}
