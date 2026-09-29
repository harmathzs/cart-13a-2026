import React from "react";
export default class Basket extends React.Component {
    state = {
        products: [
/*            
            {productname: "Laptop", productprice: 1200, quantity: 1},
            {productname: "Headphones", productprice: 200, quantity: 2},
*/            
        ],
    }

    render() {
        return <ul>
            {this.state.products.length>0 && this.state.products.map(
                (product, idx) => <li key={idx}>
                    {product.productname} - Ár: {product.productprice} Ft, Mennyiség: {product.quantity}
                </li>
            )}
            {this.state.products.length<1 && <p>Üres...</p>}
        </ul>
    }
}