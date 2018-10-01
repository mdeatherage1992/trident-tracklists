import React, {Component} from 'react';
import './Like.css';
class Like extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  render() {
    return (
      <div className="customContainer">
        <button className="btn btn-primary" onClick={this.handleClick}>
          </button>
          Counter: {this.state.count}
      </div>
    );
  }
}

export default Like;
