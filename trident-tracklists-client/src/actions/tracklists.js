
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

export const createTracklist = tracklist => {
  return dispatch => {
    return fetch('http://localhost:3001/api/tracklists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(tracklist)
    })
    .then(response => response.json())
    .then(response => {
      debugger})
    .catch(err => console.log(err))
  }
}
