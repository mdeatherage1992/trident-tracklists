import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

const tracklistsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_TRACKLISTS_SUCCESS':
    return action.tracklist;

    default:
    return state;
  }
}

let tracklists = tracklistsReducer(undefined,{
type: 'GET_TRACKLISTS_SUCCESS',
tracklist:{ title: "new title"},
});
console.log(tracklist) = []
