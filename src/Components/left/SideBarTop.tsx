import logo from "../../assets/final-logo.png"
import { FaChevronDown } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import useSideBarSM from "../../hook/useSideBarSM";

export default function SideBarTop() {
  const {onClose}=useSideBarSM()
  return (
    <div className="flex justify-between items-center gap-7 ">
      <div className="flex gap-4">
        <img className="h-10 w-10 rounded-full" src={logo} />
        <div className="flex flex-col gap-1">
          <p className="font-bold">Nishyan</p>
          <p className="text-xs underline">Visit Store</p>
        </div>
      </div>
      <FaChevronDown />
      <div className="block md:hidden">
      <AiOutlineClose  onClick={onClose} />
      </div>
    </div>
  );
}
