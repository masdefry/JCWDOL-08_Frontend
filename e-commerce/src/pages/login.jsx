import axios from "axios"

import { useRef, useState } from "react"

export default function Login(){

    const [message, setMessage] = useState('')

    let username = useRef()
    let password = useRef()

    let onLogin = async() => {
        try {
            // Step1. Validasi inputan jangan ada yg kosong

            // Step2. Check apakah username dan password nya ada?
            let response = await axios.get(`http://localhost:5000/users?username=${username.current.value}&password=${password.current.value}`)
            
            if(response.data.length === 0) throw { message: 'Account Not Found' }
            alert('Login Success')
            setMessage('')
        } catch (error) {
            setMessage(error.message)
        }
    }

    return(
        <div  className="flex flex-col items-center py-20">
        <h1 className="my-fs-15 my-grey mt-5 font-bold">
            PURWADHIKA® REWARDS
        </h1>
        <p className="my-grey mt-3" style={{maxWidth: '600px', textAlign: 'center'}}>
            Join Purwadhika Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and moremore.
        </p>
        <div className="cards mt-20 px-20 py-10 w-2/5 rounded-md">
            <h1 className='mt-5 mb-3 font-bold'>
                Login Account
            </h1>
            <div>
                <input ref={username} type='text' placeholder='Input you username' className='py-2 px-2 w-100 rounded-md' style={{border: '1px solid grey', width: '100%'}} />
            </div>
            <div>
                <input ref={password} type='text' placeholder='Input you password' className='py-2 px-2 w-100 rounded-md mt-3' style={{border: '1px solid grey', width: '100%'}} />
            </div>
            <div>
                {message}
            </div>
            <button onClick={onLogin} className='bg-white text-black border border-black px-3 py-3 mt-3 rounded-full self-end'>
                Login
            </button>
        </div>
    </div>
    )
}