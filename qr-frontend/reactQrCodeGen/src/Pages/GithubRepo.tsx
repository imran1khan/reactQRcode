import { repoData } from "../RecoilStore/DataSetAtom"
import RepoCard from "../components/RepoCard"

function GithubRepo() {
    return (
        <div className="h-screen bg-black text-white">
            <div className="flex justify-center h-[75%] p-2">
            <div className="h-[30%] w-[75%] grid grid-cols-2 gap-1 overflow-hidden overflow-y-scroll">
                {repoData.map((obj, i) => (<RepoCard key={i} imageUrl={obj.imageUrl} repoUrl={obj.repoUrl} />))}
            </div>
            </div>
        </div>
    )
}

export default GithubRepo