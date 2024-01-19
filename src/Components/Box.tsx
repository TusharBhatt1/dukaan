interface BoxProps{
title:string,
content:string,
type?: string | "price"
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Box({title,content,type}:BoxProps) {
  return (
    <div className="flex flex-col text-start gap-2 p-2 bg-white w-[30vw]">
    <p className="text-slate-400">{title}</p>
    <p className="font-bold">{type === "price" && "Rs. "}{content}</p>
    </div>
  )
}
