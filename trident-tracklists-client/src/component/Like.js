import React, {Component} from 'react';
import './Like.css';
class Like extends Component {

  state = {
    tracklists: []
  }

//   handleClick = event => {
//   event.preventDefault()
//   fetch('http://localhost:3001/api/tracklists', {
//     method: "POST",
//     headers:{
//       "Content-Type: application/json"
//     },
//     body: JSON.stringify(this.state)
//   })
//   .then(response => response.json());
// }



  render() {
    return (
      <div className="customContainer">
        <button>
          </button>
          {this.props.counter}
      </div>
    );
  }
}



export default Like;

// handleonChange = event  => {
//   const {name,value} = event.target;
//   const currentTracklistFormData = Object.assign({}, this.props.tracklistFormData, {
//     [name]: value
//   })
//   this.props.updateTracklistFormData(currentTracklistFormData)
// }
//
// handleClick = event => {
//   this.props.addLikes(this.props.tracklistFormData)
// }
//
// const mapStateToProps = state => {
//   return {
//     tracklistFormData: state.tracklistFormData
//   }
// }
//
// export default connect(mapStateToProps, {
//   updateTracklistFormData,
//   updateTracklist
// })(Like)


// handleClick = () => {
//   this.setState(({ count }) => ({
//     count: count + 1
//   }));
// };


// constructor() {
//   super();
//   this.state = {
//     likes: 0
//   };
//   this.handleClick = this.handleClick.bind(this);
// }
//
// handleClick = () => {
//   this.setState(({ likes }) => ({
//     likes: likes + 1
//   }));
// };
