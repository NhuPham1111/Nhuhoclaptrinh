const num=3;
export default function Collections (){
    const TAGS : string[] =["Profile", "New Youk", "Relax", "Person", "Fashion"];
    return (<>
    <h1 className="text-4xl text-bold text-blue-500">UI_03: Collection List requirement</h1>
    {/* <img src="./collection.png" className="w-[600px] mb-4" alt="job-list image" /> */}
    <div className="flex flex-col">
        {/* <img src="/user-list.png" alt="user list" className="w-full" /> */}
        <img src={`/ui${num}.png`} alt="user list" className="w-full" />
      </div>
   
    <div className="mt-8 w-full rounded-lg bg-[#eff0f1] p-16 font-[#0e0e38] shadow-lg">
        <h1 className="text-3xl font-bold font-serif">Popular Collections</h1>
        <div className="flex mt-6 space-x-2 sm:grow">
           {TAGS.map((tag:string)=>(
            <a className="cursor-pointer rounded-lg bg-white px-4 py-3 hover:text-blue-600" key = {tag}>{tag}</a>
        ))}
        </div>
        <div className="mt-14 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-3xl bg-white">
                <img className="w-full aspect-video" src="https://t3.ftcdn.net/jpg/02/66/04/36/360_F_266043654_d8XqhGWOnhhmIfjmUfe0ufB060Wr5vDY.jpg" alt="img1" />
            
            <div className="grid grid-cols-3 mt-4 gap-4">
                <img className="w-full aspect-video rounded-2xl" src="https://t3.ftcdn.net/jpg/02/66/04/36/360_F_266043654_d8XqhGWOnhhmIfjmUfe0ufB060Wr5vDY.jpg" alt="img2" />
                <img className="w-full aspect-video rounded-2xl" src="https://t3.ftcdn.net/jpg/02/66/04/36/360_F_266043654_d8XqhGWOnhhmIfjmUfe0ufB060Wr5vDY.jpg" alt="img3" />
                <img className="w-full aspect-video rounded-2xl" src="https://t3.ftcdn.net/jpg/02/66/04/36/360_F_266043654_d8XqhGWOnhhmIfjmUfe0ufB060Wr5vDY.jpg" alt="img4" />
            </div>
            <div className="flex pt-6">
            <p className="font-mono text-2xl font-medium grow">People</p>
            <p className="font-mono flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>144</p>
            </div>

            </div>

                        <div className="p-6 rounded-3xl bg-white">
                <img className="w-full aspect-video" src="https://t3.ftcdn.net/jpg/02/66/04/36/360_F_266043654_d8XqhGWOnhhmIfjmUfe0ufB060Wr5vDY.jpg" alt="img1" />
            
            <div className="grid grid-cols-3 mt-4 gap-4">
                <img className="w-full aspect-video rounded-2xl" src="https://t3.ftcdn.net/jpg/02/66/04/36/360_F_266043654_d8XqhGWOnhhmIfjmUfe0ufB060Wr5vDY.jpg" alt="img2" />
                <img className="w-full aspect-video rounded-2xl" src="https://t3.ftcdn.net/jpg/02/66/04/36/360_F_266043654_d8XqhGWOnhhmIfjmUfe0ufB060Wr5vDY.jpg" alt="img3" />
                <img className="w-full aspect-video rounded-2xl" src="https://t3.ftcdn.net/jpg/02/66/04/36/360_F_266043654_d8XqhGWOnhhmIfjmUfe0ufB060Wr5vDY.jpg" alt="img4" />
            </div>
            <div className="flex pt-6">
            <p className="font-mono text-2xl font-medium grow">People</p>
            <p className="font-mono flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>144</p>
            </div>

            </div>

                        <div className="p-6 rounded-3xl bg-white">
                <img className="w-full aspect-video" src="https://t3.ftcdn.net/jpg/02/66/04/36/360_F_266043654_d8XqhGWOnhhmIfjmUfe0ufB060Wr5vDY.jpg" alt="img1" />
            
            <div className="grid grid-cols-3 mt-4 gap-4">
                <img className="w-full aspect-video rounded-2xl" src="https://t3.ftcdn.net/jpg/02/66/04/36/360_F_266043654_d8XqhGWOnhhmIfjmUfe0ufB060Wr5vDY.jpg" alt="img2" />
                <img className="w-full aspect-video rounded-2xl" src="https://t3.ftcdn.net/jpg/02/66/04/36/360_F_266043654_d8XqhGWOnhhmIfjmUfe0ufB060Wr5vDY.jpg" alt="img3" />
                <img className="w-full aspect-video rounded-2xl" src="https://t3.ftcdn.net/jpg/02/66/04/36/360_F_266043654_d8XqhGWOnhhmIfjmUfe0ufB060Wr5vDY.jpg" alt="img4" />
            </div>
            <div className="flex pt-6">
            <p className="font-mono text-2xl font-medium grow">People</p>
            <p className="font-mono flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>144</p>
            </div>

            </div>
            
        </div>

    </div>
     </>)
}