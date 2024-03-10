import { Link } from "react-router-dom"

interface prop{
    name:string,
    description:string
    destination:string,
}
function AboutCard({name,description,destination}:prop) {
  return (
    <Link to={`/${destination}`}>
    <div className="bg-gray-800 hover:bg-slate-700 cursor-pointer h-[15rem] w-full">
        <center>
        <div>{name}</div>
        <div>{description}</div>
        </center>
    </div>
    </Link>
  )
}

export default AboutCard