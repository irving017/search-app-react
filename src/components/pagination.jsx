import React, { Component } from 'react';

class Paginations extends Component {
  
  state={
    arrayPages:[],
    pagin:0
  }

  componentWillMount(){
    const total = Math.ceil(this.props.total/this.props.perPage)
    this.setState({pagin:total})
  }

  componentWillReceiveProps(){
    const total = Math.ceil(this.props.total/this.props.perPage)
    this.setState({pagin:total})
  }

  getNumPages=()=>{
    const {totalPages,arrayPages} = this.state
    for(let i =1; 1< (totalPages+1); i++){
      arrayPages.push(i)
    }
    this.setState(arrayPages)
  }

  render() {
    const {arrayPages,pagin}=this.state
    return (
      <div>
        <p>{this.props.total} Productos</p>
        <p>{this.props.perPage}</p>
        <p>{pagin}</p>
      </div>
    );
  }
}

export default Paginations;
