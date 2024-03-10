import { useState } from "react"
import Qrcode from "./components/Qrcode";
import QRCode from 'react-qr-code';

function App() {
  const [url,setUrl]=useState('');
  return (
    <>
    <div className="bg-black h-screen text-white flex justify-center items-center">
      <div className={`bg-gray-900 ${url?'h-auto':'h-[50%]'} w-[50%]`}>
        <div className="flex justify-center gap-2 h-10 my-2">
        <input type="url" value={url} onChange={(e)=>setUrl(e.target.value)} placeholder="url" className="bg-slate-800 rounded-md " />
        </div>
        <div className=" flex justify-center items-center">
          <div>
            url from frontend
            {url && (<QRCode value={url} bgColor="#FFFFFF" fgColor="#000000" size={256}/>)}
          </div>
        </div>
        <br />
        <div className=" flex justify-center items-center">
          <div>
          qrcode from backend
          {url && <Qrcode url={url}/>}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
