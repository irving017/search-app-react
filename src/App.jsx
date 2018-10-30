import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import SearchBar from './components/searchBar';
import ShowProducts from './components/showProducts';
import Grid from '@material-ui/core/Grid';
//import Pagination from './components/pagination'

const endPoint = 'http://www.liverpool.com.mx/tienda/'


class App extends Component {

  state={
    products:[],
    message:'',
    search:'',
    totalProducts:0,
    productsPerPage:0
  }

  getProducts=(param)=>{
    axios.get(endPoint+`?s=${param}&d3106047a194921c01969dfdec083925=json`)
    .then(response=>{
      const noMatchMessage = `Tu busqueda ${param} arrojo 0 resultados` 
      const productsFind=response.data.contents[0].mainContent[3].contents[0].records
      const totalProductsFind=response.data.contents[0].mainContent[3].contents[0].totalNumRecs
      const productsPerPageFind = response.data.contents[0].mainContent[3].contents[0].recsPerPage
      console.log(productsFind)
      productsFind.length!==0?this.setState({products:productsFind,totalProducts:totalProductsFind,search:param,productsPerPage:productsPerPageFind}):this.setState({message:noMatchMessage,products:[],totalProducts:0,search:0})      
    })
    .catch(e=>console.log(e))
  }

  //Funcion paginacion
  // changePage=(param)=>{
  //   const {search} = this.state
  //   axios.get(endPoint+`page-${param}?s=${search}&d3106047a194921c01969dfdec083925=json`)
  //   .then(response=>{
  //     const noMatchMessage = `Tu busqueda ${param} arrojo 0 resultados` 
  //     const productsFind=response.data.contents[0].mainContent[3].contents[0].records
  //     const totalProductsFind=response.data.contents[0].mainContent[3].contents[0].totalNumRecs
  //     productsFind.length!=0?this.setState({products:productsFind,totalProducts:totalProductsFind}):this.setState({message:noMatchMessage,products:[],totalProducts:0})      
  //   })
  //   .catch(e=>console.log(e))
  // }

  render() {
    const {products,message,totalProducts,productsPerPage}= this.state
    return (
      <div>
        <SearchBar getProducts={this.getProducts}/>
        {totalProducts!==0?
        <div style={{backgroundColor:'#F5F5F5'}}>
        {/* <Pagination total={totalProducts} perPage={productsPerPage} changePage={this.changePage}/> */}
        <Grid container spacing={16} justify={'center'} style={{padding:40}}>
        {products.map((p,i)=>
        <Grid key={i} item>
        <ShowProducts p={p}/>
        </Grid>
        )}
        </Grid>
        </div>:<h2>{message}</h2>}
      </div>
    );
  }
}

export default App;
