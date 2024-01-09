import { CiCircleQuestion } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import { MdArrowDropDownCircle } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="flex bg-white justify-between w-full items-center p-3 w-full  px-2 sm:px-7 text-sm shadow-md">
      <div className="flex gap-2 sm:gap-4">
        <p>Payment</p>
        <div className="flex gap-1 justify-center items-center text-xs">
          <CiCircleQuestion />
          <p>How it works </p>
        </div>
      </div>
      <div className="flex">
        <span className="absolute mt-2 ml-4 hidden sm:block">
          <AiOutlineSearch size={18} />
        </span>

        <input
          placeholder="Search anything"
          className=" p-1 px-2 sm:px-12 border-slate-200 rounded-xl border-2 "
        />
      </div>
      <div className="flex gap-2">
        <RiMessage2Fill size={20} />
        <MdArrowDropDownCircle size={20} />

        <div></div>
      </div>
    </div>
  );
}
