import React from 'react'

export default function Product(props) {
    const {product, onAdd} = props;
    return (
        <div>
           <img className="small" src={product.imageUrl} alt={product.name}></img> 
           <h3>{product.name}</h3>
           <p>Size:</p>
           <div>Width: {product.size.width}</div>
           <div>Height: {product.size.height}</div>
           <div>Weight: {product.weight}</div>
           <div>Price: {product.price}</div>
           <button onClick={() => onAdd(product)}>Add to card</button>
        </div>
    )
}
