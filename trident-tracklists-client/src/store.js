import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import tracklists from './reducers/tracklists';
import tracklistFormData from './reducers/tracklistFormData';




const reducers = combineReducers({
  tracklists,
  tracklistFormData
});

// : tracklistsReducer


const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(...middleware),
);




// let tracklists = tracklistsReducer(undefined,{
// type: 'GET_TRACKLISTS_SUCCESS',
// tracklist:[{ title: "new title"}],
// });
// console.log(tracklist) = []
