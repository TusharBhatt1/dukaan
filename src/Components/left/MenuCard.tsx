
export interface menuProps{
    name:string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon:any
}

export default function MenuCard({name, icon}:menuProps) {
  return (
    <div className="text-slate-50 flex items-center hover:text-white hover:bg-blue-800 p-1 cursor-pointer rounded-full text-start gap-5 text-sm">
        <div> 
            {icon}
            </div>
        <div>{name}</div>
    </div>
  )
}
