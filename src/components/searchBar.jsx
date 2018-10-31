import React, { Component } from 'react';
import ShowProducts from './showProducts';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'

const endPoint = 'http://www.liverpool.com.mx/tienda/'

class SearchBar extends Component {
  
  state={
    link:'',
    products:[],
    message:'',
    search:'',
    totalProducts:0,
    productsPerPage:0
  }

  componentWillMount(){
    let clientPath = localStorage.getItem('client_path')
    clientPath = clientPath?clientPath.split(','):[];
    clientPath.push(window.location.href)
    localStorage.setItem('client_path',clientPath.toString())
    const param = this.props.match.params.params
    if(param!==undefined)this.getProducts(param)
  }

  getProducts=(param)=>{
    axios.get(endPoint+`?s=${param}&d3106047a194921c01969dfdec083925=json`)
    .then(response=>{
      const noMatchMessage = `Tu busqueda ${param} arrojo 0 resultados` 
      const productsFind=response.data.contents[0].mainContent[3].contents[0].records
      const totalProductsFind=response.data.contents[0].mainContent[3].contents[0].totalNumRecs
      const productsPerPageFind = response.data.contents[0].mainContent[3].contents[0].recsPerPage
      //console.log(productsFind)
      productsFind.length!==0?this.setState({products:productsFind,totalProducts:totalProductsFind,search:param,productsPerPage:productsPerPageFind}):this.setState({message:noMatchMessage,products:[],totalProducts:0,search:0})      
    })
    .catch(e=>console.log(e))
  }

  onChange=(event)=>{
    const value = event.target.value
    this.setState({link:value})
  }
  onSubmit=(event)=>{
    const {link}=this.state
    link===''?event.preventDefault():this.props.history.push(`/tienda/${link}`)
  }

  render() {
    const {products,message,totalProducts}= this.state
    return (
      <div>
      <div style={{width:'100vw',height:'10vh',backgroundColor:'#ED0093',display:'flex'}}> 
      <div style={{width:'20%'}}><img src="https://assets.liverpool.com.mx/assets/images/logos/liverpool-logo.svg"style={{width:'70%',height:'80%',padding:'3% 10%'}} alt=""/></div>
      <form style={{width:'80%'}} onSubmit={this.onSubmit}>
      <input  onChange={this.onChange} placeholder="Buscar" type="text" style={{width:'80%',height:'40%',margin:'2% 0%'}}/>
      </form>
      </div>
      {totalProducts!==0?
        <div style={{backgroundColor:'#F5F5F5',width:'100vw'}}>
        {/* <Pagination total={totalProducts} perPage={productsPerPage} changePage={this.changePage}/> */}
        <Grid container spacing={16} justify={'center'} style={{padding:40,margin:0}}>
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

export default SearchBar

