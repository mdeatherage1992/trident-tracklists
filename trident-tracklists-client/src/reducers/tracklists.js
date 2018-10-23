export default (state = [], action) => {
  switch(action.type) {
    case 'GET_TRACKLISTS_SUCCESS':
    return action.tracklists;

    case 'CREATE_TRACKLIST_SUCCESS':
    return state.concat(action.tracklist)

    // case 'UPDATE_TRACKLIST_DATA':
    // return action.tracklists;


    default:
    return state;
  }
}
