import React from "react";
export default class CartForm extends React.Component {
    handleFormSubmit = (e) =>{
        e.preventDefault()
        console.log("handleFormSubmit e", e)
        console.log("e.target[0].value", e.target[0].value)
        console.log("e.target[1].value", e.target[1].value)
        console.log("e.target[2].value", e.target[2].value)
        console.log("e.target[3].value", e.target[3].value)
    }

    render() {
        return <form method="POST" onSubmit={this.handleFormSubmit}>
            <label htmlFor="productname">Termék neve: </label>
            <input type="text" name="productname" placeholder="pl. Labubu plüss"></input>
            <br />

            <label htmlFor="productprice">Ár: </label>
            <input type="number" name="productprice" placeholder="pl. 1499"></input>            
            <br />

            <label htmlFor="quantity">Mennyiség: </label>
            <input type="number" name="quantity" placeholder="pl. 1"></input>            
            <br /> 

            <input type="submit" value="Hozzáadás a kosárhoz" />
            <br />           
        </form>
    }
}