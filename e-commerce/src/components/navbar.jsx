export default function Navbar(){
    return(
        <div className="flex justify-between px-10 items-center shadow shadow-slate-300" style={{ height: '70px' }}>
            <div>
                <span>
                    Logo 
                </span>
                <span className="ml-3 font-bold">
                    Order
                </span>
                <span className="ml-3 font-bold">
                    Cards
                </span>
                <span className="ml-3 font-bold">
                    Gift
                </span>
            </div>
            <div>
                <span className="mr-3">
                    Find a store
                </span>
                
                <span>
                    <button className="bg-white text-black px-3 py-1 rounded-full border border-slate-900 mr-3">
                        Sign in
                    </button>
                </span>
                <span>
                    <button className="bg-black text-white px-3 py-1 rounded-full">
                        Join now
                    </button>
                </span>
            </div>
        </div>
    )
}