import axios from "axios";
import { useEffect, useState } from "react"
interface prop{
    url:string
}
function Qrcode({url}:prop) {
    const [img,setImg] = useState<string | null>(null);
    useEffect(()=>{
        (async()=>{
            const responce = axios.get<prop>(`http://localhost:3000/qr-code?url=${url}`)
            setImg((await responce).data.url);
            console.log(img)
        })();
    },[url]);
  return (
    <div>{img && <img src={img} alt="QR Code"></img>}</div>
  )
}

export default Qrcode