import React from "react";

const ProductCard = ({product, addtoCart}) => {
    return(
        <div>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => addtoCart(product)}>Add to cart</button>
        </div>
    )
}

export default ProductCard;