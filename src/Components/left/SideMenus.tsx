import MenuCard from "./MenuCard";
import { allMenus } from "../../assets/allMenus";

export default function SideMenus() {
  return (
    <div className="flex flex-col gap-1 mt-4">
      {allMenus.map((menu) => (
        <MenuCard name={menu.name} icon={menu.icon} />
      ))}
    </div>
  );
}