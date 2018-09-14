import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

const tracklistsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_TRACKLISTS_SUCCESS':
    return action.tracklists;

    default:
    return state;
  }
}


const reducers = combineReducers({
  tracklists: tracklistsReducer
});

const middleware = [thunk]

export default createStore(
  reducers,
  applyMiddleware(...middleware),
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
)




// let tracklists = tracklistsReducer(undefined,{
// type: 'GET_TRACKLISTS_SUCCESS',
// tracklist:[{ title: "new title"}],
// });
// console.log(tracklist) = []
