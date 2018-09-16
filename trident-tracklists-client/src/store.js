import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import tracklists from './reducers/tracklists'



const reducers = combineReducers({
  tracklists
});

// : tracklistsReducer


const middleware = [thunk]

export default createStore(
  reducers,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_(), applyMiddleware(...middleware),
);




// let tracklists = tracklistsReducer(undefined,{
// type: 'GET_TRACKLISTS_SUCCESS',
// tracklist:[{ title: "new title"}],
// });
// console.log(tracklist) = []
