import React, {Component} from 'react';
import Tracklists from './Tracklists';
import './App.css';
import './Tracklists.css';
import Header from '../component/Header';
import Login from '../component/Signup';
import Logout from '../component/Logout';


// const tracklists = [
//   {
//   title: "new Tracks",
//    url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/497178522&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
//    genre: "Techno",
//    tracklist: "new stuff"
// },
// {
//   title: "old Tracks",
//    url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/493745535&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
//    genre: "Deep",
//    tracklist: "new tunes"
// }
// ]



class App extends Component {
  componentDidMount(){
    let that = this
    axios.get('/users/check_for_user',{
    })
    .then(function(response){
      if(response.data.email){
        that.setState({
          currentUser: response.data.email
        })
      } else {
        that.setState({
          currentUser: null
        })
      }
    })
    .catch(function(error){
      console.log(error);
    })
  }
updateCurrentUser(email) {
    this.setState({
      currentUser: email
    })
  }



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
