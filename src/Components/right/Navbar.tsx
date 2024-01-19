import { CiCircleQuestion } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import { MdArrowDropDownCircle } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import useSideBarSM from "../../hook/useSideBarSM";

export default function Navbar() {
  const { onOpen } = useSideBarSM();

  return (
    <div className="flex bg-white justify-between w-full items-center p-3 px-2 sm:px-7 text-sm shadow-md">
      <div className="flex gap-2 sm:gap-4">
        <span className="block md:hidden" onClick={onOpen}>
          <MdMenu size={18}/>
        </span>
        <p>Payment</p>
        <div className="flex gap-1 justify-center items-center text-xs">
          <CiCircleQuestion />
          <p>How it works </p>
        </div>
      </div>
      <div className="flex">
        <span className="block md:absolute mt-2 ml-4">
          <AiOutlineSearch size={18} />
        </span>

        <input
          placeholder="Search anything"
          className="hidden bg-slate-300 md:block p-1 sm:px-12 border-slate-200 rounded-xl border-2 "
        />
      </div>
      <div className="flex gap-2">
        <RiMessage2Fill size={20} />
        <MdArrowDropDownCircle size={20} />
      </div>
    </div>
  );
}
