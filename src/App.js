import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monsters: [
        { name: "Dracula", id: "1", email : "gennady@gmail.com"},
        { name: "Zombie", id: "2", email : "sandra@gmail.com"},
        { name: "Frankenstein", id: "3", email : "tom@gmail.com" }
      ],
      searchField : ""  
    };

  }

  handleChange = event => {
    this.setState({searchField : event.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({monsters : data});
      });
  }


  render() {
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter((monster => monster.name.toLowerCase().includes(searchField.toLowerCase())))

    return (
    <div className = "App">
      <h1> Monster Rolodex </h1>
      <SearchBox placeholder = "search monster" onChangeHandler = {this.handleChange}/>
      <CardList monsters={filteredMonsters} />
    </div>
    )
  };
}

export default App;
