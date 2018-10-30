import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import SearchBar from './components/searchBar';
import ShowProducts from './components/showProducts';
import Grid from '@material-ui/core/Grid';

const endPoint = 'http://www.liverpool.com.mx/tienda/'


class App extends Component {

  state={
    products:[]
  }

  getProducts=(param)=>{
    axios.get(endPoint+`?s=${param}&d3106047a194921c01969dfdec083925=json`)
    .then(response=>{
      console.log(response.data.contents[0].mainContent[3].contents[0].records)
      this.setState({products:response.data.contents[0].mainContent[3].contents[0].records})
    })
    .catch(e=>console.log(e))
  }

  render() {
    const {products}= this.state
    return (
      <div>
        <SearchBar getProducts={this.getProducts}/>
        <Grid container spacing={24}>
        {products.map((p,i)=>
        <Grid item>
        <ShowProducts key={i} p={p}/>
        </Grid>
        )}
        </Grid>
      </div>
    );
  }
}

export default App;
