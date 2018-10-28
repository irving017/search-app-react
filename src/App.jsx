import React, { Component } from 'react';
import './App.css';
import {getProducts} from './services/productServices';
import SearchBar from './components/searchBar'
import Routes from './Routes'

class App extends Component {
  

  componentWillMount(){
    console.log(getProducts('ropa'))
  }

  render() {
    return (
      <div>
      <SearchBar/>
      <Routes/>
      </div>
    );
  }
}

export default App;
