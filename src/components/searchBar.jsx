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
      <div>
      <form onSubmit={this.onSubmit}>
      <input type="text" onChange={this.onChange}/></form>
      </div>
    );
  }
}

export default SearchBar

