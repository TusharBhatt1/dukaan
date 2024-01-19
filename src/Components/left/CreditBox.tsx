import { CiWallet } from "react-icons/ci";


export default function CreditBox() {
  return (
<div className="backdrop-filter backdrop-blur-lg px-2 bg-gray-500 bg-opacity-50 flex gap-2 items-center justify-center">
        <div>
    <CiWallet size={14}/>
        </div>
        <div className="text-xs flex flex-col gap-2">
            <p className="text-[10px] text-slate-100">Available Credit</p>
            <p> &#8377; 200</p>
        </div>
    </div>
  )
}
