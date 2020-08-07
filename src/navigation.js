import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import HomePage from './pages/home'
import ItemsPage from './pages/items'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'
import ProfilePage from './pages/profile'
import LogoutPage from './pages/logout'


const Navigation = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/items" component={ItemsPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile/:userid" component={ProfilePage} />
        <Route path="/logout" component={LogoutPage} />
        
      </Switch>
    </BrowserRouter>
  )
}

export default Navigation