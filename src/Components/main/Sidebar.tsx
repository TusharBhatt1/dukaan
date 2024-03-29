import CreditBox from "../left/CreditBox";
import SideBarTop from "../left/SideBarTop";
import SideMenus from "../left/SideMenus";

export default function Sidebar() {
  return (
    <div className="bg-black h-[100vh] p-4 px-7 text-white hidden md:block ">
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
