//create the store using redux 
//import all the reducers then pass it to the store
//react thunk should be added 
//payload function such as dispatch are asynchronous we have to use reduxTHunk middelware
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk"

import reducers from './index'


const store = createStore(reducers, {},
	applyMiddleware(thunk)
	)

export default store