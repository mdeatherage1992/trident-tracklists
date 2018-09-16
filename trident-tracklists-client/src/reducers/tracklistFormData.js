export default(state = {
    title: '',
    url: '',
  genre: '',
tracklist: '',
}, action) => {
  switch(action.type) {
    case 'UPDATED_DATA':
    return action.tracklistFormData

    default:
    return state;
  }
}
