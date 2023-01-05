import {useRef} from 'react';

export default function Child1(props){
    let name = useRef()
    return(
        <>
            <h1>
                Child-1
            </h1>
            <input type='text' ref={name} placeholder='Enter your name' />
            <button onClick={() => props.myFunct(name.current.value)}>
                Submit
            </button>
        </>
    )
}