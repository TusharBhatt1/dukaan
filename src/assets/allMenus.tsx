import { menuProps } from "../Components/left/MenuCard";
import {
    FaHome,
    FaShoppingCart,
    FaCube,
    FaTruck,
    FaBullhorn,
    FaChartLine,
    FaCreditCard,
    FaWrench,
    FaPercent,
    FaUsers,
    FaPaintBrush,
    FaPuzzlePiece,
  } from 'react-icons/fa';
export const allMenus:menuProps[] = [
    { name: 'home', icon: <FaHome/> },
    { name: 'orders', icon: <FaShoppingCart /> },
    { name: 'product', icon: <FaCube /> },
    { name: 'delivery', icon: <FaTruck /> },
    { name: 'marketing', icon: <FaBullhorn /> },
    { name: 'analytics', icon: <FaChartLine /> },
    { name: 'payments', icon: <FaCreditCard /> },
    { name: 'tools', icon: <FaWrench /> },
    { name: 'discount', icon: <FaPercent /> },
    { name: 'audience', icon: <FaUsers /> },
    { name: 'appearance', icon: <FaPaintBrush /> },
    { name: 'plugins', icon: <FaPuzzlePiece /> },
  ];