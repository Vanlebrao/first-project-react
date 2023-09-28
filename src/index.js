import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import GlobalStyles from './globalStyles'

ReactDOM.render(
  <>
    <Home />
    <Users />
    <GlobalStyles />
  </>,
  document.getElementById('root')
)
