import React, { Component } from 'react';
import './Like.css';
class Button extends Component {

constructor(props) {
super(props);
this.state = {
  tracklist: {
  title: this.props.title,
  url: this.props.url,
  genre: this.props.genre,
  tracklist: this.props.tracklist,
  likes: this.props.counter
    }
  }
}

  handleSubmit = event => {
  event.preventDefault()
  fetch(`http://localhost:3001/api/tracklists/${this.props.id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({tracklist:{
      title:this.props.title,
      url:this.props.url,
      genre:this.props.genre,
      tracklist: this.props.tracklist,
      likes: this.props.counter + 1
    }})
  })
  .then(response => response.json())
  this.setState({
  likes: this.state.likes + 1
  })
}

  render() {
    return (
      <div className="customContainer">
      <button onClick={this.handleSubmit}>
      {this.props.counter}
      </button>
      </div>
    )
  }

}


export default Button;
