import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import SearchBar from './components/searchBar';
import ShowProducts from './components/showProducts';
import Grid from '@material-ui/core/Grid';

const endPoint = 'http://www.liverpool.com.mx/tienda/'


class App extends Component {

  state={
    products:[],
    message:''
  }

  getProducts=(param)=>{
    axios.get(endPoint+`?s=${param}&d3106047a194921c01969dfdec083925=json`)
    .then(response=>{
      const noMatchMessage = `Tu busqueda ${param} arrojo 0 resultados` 
      const productsFind=response.data.contents[0].mainContent[3].contents[0].records
      //console.log(productsFind)
      console.log(response)
      productsFind.length!=0?this.setState({products:productsFind}):this.setState({message:noMatchMessage,products:[]})
      
    })
    .catch(e=>console.log(e))
  }

  render() {
    const {products,message}= this.state
    return (
      <div>
        <SearchBar getProducts={this.getProducts}/>
        <div style={{backgroundColor:'#F5F5F5'}}>
        {products.length!=0?
        <Grid container spacing={16} justify={'center'} style={{padding:40}}>
        {products.map((p,i)=>
        <Grid key={i} item>
        <ShowProducts p={p}/>
        </Grid>
        )}
        </Grid>:<h2>{message}</h2>}
        </div>
      </div>
    );
  }
}

export default App;
