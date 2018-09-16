
const setTracklists = tracklists => {
  return {
    type: 'GET_TRACKLISTS_SUCCESS',
    tracklists
  }
}


export const getTracklists = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/tracklists')
    .then(response => response.json())
    .then(tracklists => dispatch(setTracklists(tracklists)))
    .catch(err => console.log(err));
  }
}
