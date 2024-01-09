import { create } from "zustand";

interface SideBarProps{
    isShow:boolean,
    onOpen:()=>void,
    onClose:()=>void,
}
const useSideBarSM=create<SideBarProps>((set)=>({
    isShow:false,
    onOpen:()=>set({isShow:true}),
    onClose:()=>set({isShow:false})
}))
export default useSideBarSM