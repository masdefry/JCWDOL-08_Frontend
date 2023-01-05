import { combineReducers } from 'redux'

import DataReducer from './dataReducer';

const allReducer = combineReducers({
    dataReducer: DataReducer // data: [{}]
})

export default allReducer