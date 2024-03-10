import { dataSet as data } from "../RecoilStore/DataSetAtom.tsx"
import AboutCard from "../components/AboutCard"

function FrontPage() {
    return (
        <div className="h-screen bg-black text-white">
            <div className="h-[30%] grid grid-cols-2 gap-1 overflow-hidden overflow-y-scroll">
                {data.map((obj, i) => (<AboutCard key={i} destination={obj.destination} name={obj.name} description={obj.description}/>))}
            </div>
        </div>
    )
}

export default FrontPage