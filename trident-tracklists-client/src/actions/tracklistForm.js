

export const updateTracklistFormData = tracklistFormData => {
  return {
    type: 'UPDATED_DATA',
    tracklistFormData
  }
}

export const resetTracklistForm = () => {
  return {
    type: 'RESET_TRACKLIST_FORM'
  }
}
