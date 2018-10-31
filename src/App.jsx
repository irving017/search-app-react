import React, { Component } from 'react';
import './App.css';
import Routes from './Routes'
//import Pagination from './components/pagination'


class App extends Component {

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
    
    return (
      <div>
        <Routes/>
      </div>
    );
  }
}

export default App;
