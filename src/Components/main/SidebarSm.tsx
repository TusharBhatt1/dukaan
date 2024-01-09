import CreditBox from "../left/CreditBox";
import SideBarTop from "../left/SideBarTop";
import SideMenus from "../left/SideMenus";
import useSideBarSM from "../../hook/useSideBarSM";

export default function SidebarSm() {
  const {isShow}=useSideBarSM()
  if(isShow){
  return (
    <div className="absolute md:hidden bg-black h-[100vh] p-4 text-white  ">
      <div className="w-full flex flex-col justify-between h-full">
        <div>
        <SideBarTop />
        <SideMenus />
        </div>
        <CreditBox/>
      </div>
    </div>
  );
  }
}
