import React, {Component, useState, useEffect} from 'react';
import CardList from '../components/CardList.jsx';
import SearchBox from '../components/SearchBox.jsx';
import Scroll from '../components/Scroll.jsx';

function App () {

    const [ robots, setRobots ] = useState([]);
    const [searchfield , setSearchfield] = useState("");

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setRobots(json));
    }, []);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

    return !robots.length ? <h1>Loading...</h1> : 
    (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
    );
}

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

async function getData() {
  try {
      let [users, posts, albums] = await urls.map(url => {
      fetch(url);
      console.log(users);
      console.log(posts);
      console.log(albums);
    })
  } catch(err) {
    console.log('oops', err);
  }};


// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             robots: [],
//             searchfield: ''
//         }
//     }

//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(users => this.setState({robots:users}));
        
//     }

//     onSearchChange = (event) => {
//         this.setState({ searchfield: event.target.value });
//     }

//     render() {
//         const { robots, searchfield } = this.state;
//         const filteredRobots = robots.filter(robot => {
//         return robot.name.toLowerCase().includes(searchfield.toLowerCase());
//         });
        
//         return !robots.length ? <h1>Loading...</h1> : 
//         (
//             <div className='tc'>
//                 <h1>RoboFriends</h1>
//                 <SearchBox searchChange={this.onSearchChange}/>
//                 <Scroll>
//                     <CardList robots={filteredRobots}/>
//                 </Scroll>
//             </div>
//         );
//     }
// }

export default App;