import {Link} from 'react-router-dom'

export default function Navbar(props){
    return(
        <div className="flex justify-between px-10 items-center shadow shadow-slate-300" style={{ height: '70px' }}>
            <div>
                <Link to='/'>
                    <span>
                        Logo 
                    </span>
                </Link>
                <Link to='/menu'>
                    <span className="ml-3 font-bold">
                        Order 
                    </span>
                </Link>
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
                
                {
                    props.myUsername.username?
                        <span className="font-bold">
                            {props.myUsername.username }
                        </span>
                    :
                        <>
                            <span>
                                <Link to='/login'>
                                    <button className="bg-white text-black px-3 py-1 rounded-full border border-slate-900 mr-3">
                                        Sign in
                                    </button>
                                </Link>
                            </span>
                            <span>
                                <Link to='/register'>
                                    <button className="bg-black text-white px-3 py-1 rounded-full">
                                        Join now
                                    </button>
                                </Link>
                            </span>
                        </>
                }
            </div>
        </div>
    )
}