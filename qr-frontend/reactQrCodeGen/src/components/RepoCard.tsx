
interface prop {
    imageUrl: string,
    repoUrl: string
}
function RepoCard({ imageUrl, repoUrl }: prop) {
    return (
        <div className="bg-gray-800 hover:bg-slate-700 cursor-pointer h-[15rem] w-full">
            <center className="h-full">
                <div>{imageUrl}</div>
                <div className="bg-slate-500 flex flex-col gap-2 py-2 px-40">
                    <button onClick={() => { window.open(repoUrl) }} className="bg-purple-800 rounded-md p-2">download</button>
                    <a href={repoUrl} className="bg-pink-800 rounded-md p-2">download ring ahrf</a>
                </div>
            </center>
        </div>
    )
}

export default RepoCard