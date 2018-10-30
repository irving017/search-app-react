import React, { Component } from 'react';
import {Card,CardContent,CardMedia} from '@material-ui/core'

class ShowProducts extends Component {

  render() {
    return (
      <Card className='productCard' style={{width:250}}>
        <div style={{height:200, width:200, margin:'0 auto',marginTop:'10%',marginBottom:'-5%'}}>
        <CardMedia
          style={{height:'80%', width:'80%',marginLeft:'10%'}}
          image={this.props.p['sku.thumbnailImage'][0]}
          title="Imagen Producto"
        />
        </div>
        <CardContent style={{height:150}}>
          <h4 style={{fontSize:'.9rem',fontWeight:300}}>{this.props.p.productDisplayName[0]}</h4>
          {this.props.p.promoPrice!==0?
          <div>
          <p style={{fontWeight:300,textDecoration:'line-through'}}>$ {this.props.p.productPrice}</p>
          <p style={{fontWeight:900, color:'red'}}>$ {this.props.p.promoPrice}</p>
          </div>
          :<p style={{fontWeight:900, color:'red'}}>$ {this.props.p.productPrice}</p>
          }
        </CardContent>
      </Card>
    );
  }
}

export default ShowProducts;
