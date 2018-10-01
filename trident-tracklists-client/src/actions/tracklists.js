import {resetTracklistForm} from './tracklistForm';
const setTracklists = tracklists => {
  return {
    type: 'GET_TRACKLISTS_SUCCESS',
    tracklists
  }
}

const addTracklist = tracklist => {
  return {
    type:'CREATE_TRACKLIST_SUCCESS',
    tracklist
  }
}

// const addLike = like => {
//   return {
//     type: 'CREATE_LIKE_SUCCESS',
//     like
//   }
// }

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
    let test = fetch('http://localhost:3001/api/tracklists', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({tracklist: tracklist })
    })
    .then(response => response.json())
    .then(tracklist => {
      dispatch(addTracklist(tracklist))
      dispatch(resetTracklistForm())
    })
    .catch(err => console.log(err))
  }
}

// export const addLikes = likes => {
//   return dispatch => {
//     let test = fetch('http://localhost:3001/api/tracklists/likes', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({like: like })
//     })
//     .then(response => response.json())
//     .then(like => {
//       dispatch(addLikes(like))
//     })
//     .catch(err => console.log(err))
//   }
// }
