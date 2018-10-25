import React, { Component } from 'react';
import './Like.css';

class Button extends Component {


constructor(props) {
super(props);
this.state = {
  counter: this.props.counter,
  clickable: true
  }
}




  handleSubmit = () => {
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
      likes: this.state.counter + 1
    }})
  })
  .then(response => response.json())
  .then(response => {
    this.setState({
      counter: this.state.counter + 1,
      });
    });
}




  render() {
    return (
      <div id="clickLike" className="customContainer">
      <button onClick={this.handleSubmit.bind(this)}>
      {this.state.counter}
      </button>
      </div>
    )
  }
}


export default Button;
