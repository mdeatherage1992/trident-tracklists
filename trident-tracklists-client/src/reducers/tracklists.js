export default (state = [], action) => {
  switch(action.type) {
    case 'GET_TRACKLISTS_SUCCESS':
    return action.tracklists;

    case 'CREATE_TRACKLIST_SUCCESS':
    return state.concat(action.tracklist)

    default:
    return state;
  }
}
