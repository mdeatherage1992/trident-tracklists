import React, {Component} from 'react';
import Tracklists from './Tracklists';
import './App.css';
import './Tracklists.css';




class App extends Component {


  render () {
    return (
      // <Router>
      <div className="App">
      <Tracklists />
      </div>
      // </Router>
    );
  }


}

export default App;




// render () {
//   return (
//     // <Router>
//     <div className="App">
//     <Tracklists />
//     </div>
//     // </Router>
//   );
// }
// }


// fetch('http://localhost:3001/api/tracklists')
// .then(response => response.json())
// // .then(tracklists => this.setState({tracklists}))
