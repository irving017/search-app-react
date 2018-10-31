import React from 'react'
import {Switch, Route,Redirect} from 'react-router-dom'
import SearchBar from './components/searchBar'

const Routes = ()=>{
  return(
    <Switch>
      <Route exact path='/' component={SearchBar}/>
      <Route path='/tienda/:params' component={SearchBar}/>
      <Redirect to='/'/>
    </Switch>
  )
}

export default Routes
