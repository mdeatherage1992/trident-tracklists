export default (state = [], action) => {
  switch(action.type) {
    case 'GET_TRACKLISTS_SUCCESS':
    return action.tracklists;

    default:
    return state;
  }
}
