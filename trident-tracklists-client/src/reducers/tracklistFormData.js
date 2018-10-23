const initialState = {
  title: '',
  url: '',
  genre: '',
  tracklist: '',
  likes: ''
  }

export default(state = initialState, action) => {
  switch(action.type) {
    case 'UPDATED_DATA':
    return action.tracklistFormData;


    case 'RESET_TRACKLIST_FORM':
      return initialState;

    default:
    return state;
  }
}
