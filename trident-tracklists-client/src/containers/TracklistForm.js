import React, {Component} from 'react';
import { connect } from 'react-redux';
import {updateTracklistFormData } from '../actions/tracklistForm'
class TracklistForm extends Component {

  handleOnChange = event => {
    const {name, value} = event.target;
    const currentTracklistFormData = Object.assign({}, this.props.tracklistFormData, {
      [name]: value
    })
    this.props.updateTracklistFormData(currentTracklistFormData)
  }


  render() {
    const {title,url,genre,tracklist} = this.props.tracklistFormData
    return (
      <div>
      Add a Tracklist
      <form>
      <div className="inputs">
      <label htmlFor="name">Name:</label>

      <input
        type="text"
        onChange = {this.handleOnChange}
        name="title"
        value={title}
        />
        <br />

    <label htmlFor="url">Embed Link:</label>

    <input
        type="text"
        onChange = {this.handleOnChange}
        name="url"
        value={url}
        />
        <br />


      <label htmlFor="genre">Genre:</label>

      <input
        type="text"
        onChange = {this.handleOnChange}
        name="genre"
        value={genre}
        />
        <br />

      <label htmlFor="tracklist">Tracklist:</label>

      <input
        type="text"
        onChange = {this.handleOnChange}
        name="tracklist"
        value={tracklist}
        />

        </div>
      </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tracklistFormData: state.tracklistFormData
  }
}

export default connect(mapStateToProps, {updateTracklistFormData})(TracklistForm);
