// Product.js

import React from 'react';


function Product({spanText, productImage, productDescription, productPrice}) {
    return (
        <article>
        <span>{spanText}</span>
        <img src={productImage} alt={productDescription}/>
        <p>{productDescription}</p>
        <h4>{productPrice}</h4>
        </article>
    );
}

export default Product;

// destructuring props:

//function Product(props) {
//     return (
//         <article>
//         <span>{props.spanText}</span>
//         <img src={props.productImage} alt={props.productDescription}/>
//         <p>{props.productDescription}</p>
//         <h4>{props.productPrice}</h4>
//         </article>
//     );
// }