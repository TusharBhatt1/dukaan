import { CiWallet } from "react-icons/ci";


export default function CreditBox() {
  return (
<div className="backdrop-filter backdrop-blur-lg bg-gray-500 bg-opacity-50 flex gap-2 items-center justify-center">
        <div>
    <CiWallet size={14}/>
        </div>
        <div className="text-xs gap-2">
            <p>Available Credit</p>
            <p> &#8377; 200</p>
        </div>
    </div>
  )
}
