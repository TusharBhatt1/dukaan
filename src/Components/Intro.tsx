import { useState } from "react";

export default function Intro() {

    const [show , setShow]=useState(true)
    if(show){
  return (
    <div>
      <div className="h-[100vh] w-[100vw] absolute text-center  bg-neutral-800/90 flex justify-center items-center">
        <div className="text-white flex flex-col gap-4 ">
          <div>
            <p className="text-blue-500 font-bold">
              A Responsive React + Typescript + Zustand + Tailwind project by
            </p>
            <p>Tushar Bhatt</p>
          </div>
          <div className="flex flex-col gap-2">
          <p className="text-xs italic">tusharbhatt0135@gmail.com</p>
          <p className="text-xs italic">7617446649</p>
          <button onClick={()=>setShow(false)} className="animate-bounce rounded-xl text-black bg-white w-1/2 m-auto py-2">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
    }
}
