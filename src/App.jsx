import React, { Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CartForm from './components/CartForm'
import Basket from './components/Basket'

export default class App extends React.Component {
  render() {
    return <>
      <CartForm />
      <hr />
      <h3>A kosár tartalma</h3>
      <Basket />
    </>
  }
}