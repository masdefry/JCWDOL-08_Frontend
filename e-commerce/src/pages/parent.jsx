import {connect} from 'react-redux'

import Child1 from "../components/child1"
import Child2 from "../components/child2"
import { useState, useEffect } from 'react';

// Import Actions Redux
import { FetchApi } from './../redux/actions/dataAction';

function Parent({FetchApi, dataComponent}){

    let [nameFromChild1, setNameFromChild1] = useState('')

    let getNameFromChild1 = (name) => {
        setNameFromChild1(name)
    }

    useEffect(() => {
        FetchApi()
    }, [])

    return(
        <>
            <h1>
                This is Parent
            </h1>
            <Child1 myFunct={getNameFromChild1} />
            <Child2 data={nameFromChild1} />
            {
                dataComponent?
                dataComponent.data.map(value => {
                   return(
                    <>
                     <div>
                        {value.name}
                    </div>
                   </>
                   )
                })
                :
                'Loading'
            }
        </>
    )
}

const mapDispatchToProps = {
    FetchApi
}

const mapStateToProps = (state) => {
    return {
        dataComponent: state.dataReducer // data: [{}]
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Parent)