import React from "react";
export default class CartForm extends React.Component {
    state = {
        productname: "",
        productprice: "",
        quantity: 0,
    }

    resetForm = () => {
        this.setState({
            productname: "",
            productprice: "",
            quantity: 0,
        })
    }

    handleFormSubmit = (e) =>{
        e.preventDefault()
        console.log("handleFormSubmit state", this.state)
        console.log("handleFormSubmit e", e)
        console.log("e.target[0].value", e.target[0].value)
        console.log("e.target[1].value", e.target[1].value)
        console.log("e.target[2].value", e.target[2].value)
        console.log("e.target[3].value", e.target[3].value)

        // TODO - process form data

        this.resetForm()
    }

    handleProductNameChange = (e) => {
        //console.log("handleProductNameChange e", e)
        this.setState({productname: e.target.value})
    }
    handleProductPriceChange = (e) => {
        this.setState({productprice: +e.target.value})
    }
    handleQuantityChange = (e) => {
        this.setState({quantity: +e.target.value})
    }

    componentDidUpdate = () => {
        // console.log("componentDidUpdate state", this.state)
    }

    render() {
        return <form method="POST" onSubmit={this.handleFormSubmit}>
            <label htmlFor="productname">Termék neve: </label>
            <input type="text" name="productname" placeholder="pl. Labubu plüss" onChange={this.handleProductNameChange} value={this.state.productname}></input>
            <br />

            <label htmlFor="productprice">Ár: </label>
            <input type="number" name="productprice" placeholder="pl. 1499" onChange={this.handleProductPriceChange} value={this.state.productprice}></input>            
            <br />

            <label htmlFor="quantity">Mennyiség: </label>
            <input type="number" name="quantity" placeholder="pl. 1" onChange={this.handleQuantityChange} value={this.state.quantity}></input>            
            <br /> 

            <input type="submit" value="Hozzáadás a kosárhoz" />
            <br />           
        </form>
    }
}