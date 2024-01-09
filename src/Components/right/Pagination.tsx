export default function Pagination() {
  const cn="border-2 border-slate-300 px-2 "
  return (
    <div className='flex flex-col justify-center items-center py-4 text-sm'>
     <div className='flex gap-4'>
      <button className='border-b-2 border-slate-300  px-4'>Previous</button>
      <div className='flex gap-2'>
        <p className={cn}>1</p>
        <p className={cn}>...</p>
        <p className={cn} style={{background:"black",color:"white"}}>8</p>
        <p className={cn}>9</p>
      </div>
      <button className='border-b-2 border-slate-300  px-4'>Next</button>
     </div>
    </div>
  )
}
