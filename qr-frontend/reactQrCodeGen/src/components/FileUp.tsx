// import axios from "axios";
import { useState } from "react"

function FileUp() {
    const [file,setFile]=useState<File | null>(null);
    const fileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length) {
            // Assuming the first file is the directory
            const directory = files[0];
            setFile(directory);
        }
    };
    const fileSubmit=async()=>{
        if (file===null) {
            return;
        }
        try {
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="bg-gray-800 w-full h-full flex justify-center">
            <div className="">
                <img className='h-[80%]' src="https://colorlib.com/wp/wp-content/uploads/sites/2/jquery-file-upload-scripts.png" alt="" />
                <div className="grid grid-cols-2 h-[20%] gap-1">
                <label className="cursor-pointer h-full flex justify-center items-center bg-blue-700 hover:bg-blue-700 p-5">
                    Upload
                    <input type="file" directory="" webkitdirectory=""  multiple className="hidden" onChange={fileUpload} />
                </label>
                <button onClick={fileSubmit} className="cursor-pointer h-full flex justify-center items-center bg-blue-700 hover:bg-blue-700 p-5">
                    send
                </button>
                </div>
            </div>
        </div>
    )
}
declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      directory?: string;
      webkitdirectory?: string;
    }
  }
export default FileUp