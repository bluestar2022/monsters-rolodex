import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.components'
import {SearchBox} from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {

    super()
    this.state = {
      //string: 'Hello Hisham',
      monsters: [],
      searchField: ''
    };

    //this.handle_the_Change = this.handle_the_Change.bind(this);
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters: users}))
}

  // render () {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           {this.state.string}
  //         </p>
  //         <button onClick={() => this.setState({string: 'Hello Safaa'})}>Change Text</button>
  //       </header>
  //     </div>
  //   );
  // }

  handle_the_Change = e => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter( m => m.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox place_holder = 'Search Monsters' handleChange = {this.handle_the_Change} />
        <CardList allmonsters = {filteredMonsters} />
      </div>
    )
  }
}

export default App;
