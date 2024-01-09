import { useState } from "react";

export default function Intro() {

    const [show , setShow]=useState(true)
    if(show){
  return (
    <div>
      <div className="h-[100vh] w-[100vw] absolute text-center  bg-neutral-800/90 flex justify-center items-center">
        <div className="text-white flex flex-col gap-4 ">
          <div>
            <p className="text-blue-700 font-bold">
              A React + Typescript project by
            </p>
            <p>Tushar Bhatt</p>
          </div>
          <p className="text-xs italic">tusharbhatt0135@gmail.com</p>
          <button onClick={()=>setShow(false)} className="text-black w-1/2 m-auto py-2">Continue</button>
        </div>
      </div>
    </div>
  );
    }
}
