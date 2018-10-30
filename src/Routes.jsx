import React from 'react'
import {Switch, Route,Redirect} from 'react-router-dom'
import ShowProducts from './components/showProducts'
import SearchBar from './components/searchBar'

const Routes = ()=>{
  return(
    <Switch>
      <Route path='/' component={SearchBar}/>
      <Route path='/:params' component={ShowProducts}/>
    </Switch>
  )
}

export default Routes
