import React, { Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CartForm from './components/CartForm'
import Basket from './components/Basket'

export default class App extends React.Component {
  state = {products: []}

  setBasketRowData = (data) => this.setState({products: [...this.state.products, data]})

  render() {
    return <>
      <h2>Termék hozzáadása a kosárhoz:</h2>
      <CartForm onBasketRowData={this.setBasketRowData} />
      <hr />
      <h3>A kosár tartalma</h3>
      <Basket products={this.state.products} />
    </>
  }
}