let initialState = {
    data: []
}

function DataReducer(state = initialState, action){
    switch(action.type){
        case 'GET_DATA_SUCCESS': 
            return { ...state, data: action.payload } // [{}]
        default: 
            return state 
    }
}

export default DataReducer