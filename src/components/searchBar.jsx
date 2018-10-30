import React, { Component } from 'react';

class SearchBar extends Component {
  
  state={
    param:''
  }

  onChange=(e)=>{
    const param = e.target.value
    this.setState({param})
  }

  onSubmit=(e)=>{
    e.preventDefault()
    const {param} = this.state
    this.props.getProducts(param)
  }

  render() {
    return (
      <div style={{width:'100vw',height:'10vh',backgroundColor:'#ED0093',display:'flex'}}> 
      <div style={{width:'20%'}}><img src="https://assets.liverpool.com.mx/assets/images/logos/liverpool-logo.svg"style={{width:'70%',height:'80%',padding:'3% 10%'}} alt=""/></div>
      <form style={{width:'80%'}} onSubmit={this.onSubmit}>
      <input  onChange={this.onChange} placeholder="Buscar" type="text" style={{width:'80%',height:'40%',margin:'2% 0%'}}/>
      </form>
      </div>
    );
  }
}

export default SearchBar

