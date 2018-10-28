import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ShowProducts from './components/showProducts'

const Routes = ()=>{
  return(
    <Switch>
      <Route path='/?' component={ShowProducts}></Route>
    </Switch>
  )
}

export default Routes
