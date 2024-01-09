import logo from "../../../public/final-logo.png"
import { FaChevronDown } from "react-icons/fa6";

export default function SideBarTop() {
  return (
    <div className="flex justify-between items-center gap-7 ">
        <div className="flex gap-4">
      <img className="h-10 w-10 rounded-full" src={logo} />
      <div className="flex flex-col gap-1">
        <p className="font-bold">Nishyan</p>
        <p className="text-xs underline">Visit Store</p>
      </div>
      </div>

        <FaChevronDown/>
     
    </div>
  );
}
