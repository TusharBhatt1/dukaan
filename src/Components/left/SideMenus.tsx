import MenuCard from "./MenuCard";
import { allMenus } from "../../assets/allMenus";

export default function SideMenus() {
  return (
    <div className="flex flex-col gap-2 mt-4">
      {allMenus.map((menu) => (
        <MenuCard key={menu.name} name={menu.name} icon={menu.icon} />
      ))}
    </div>
  );
}
