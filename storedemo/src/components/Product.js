import React from 'react'


export default function Product(props) {
    const {product, add, button, remove} = props;


    return (
        <div>
            <h1>{product.name}</h1> 
            <p>{product.price}</p>
            <button onClick={(e)=>{
                if (button==='add to cart'){
                    add(product)
                } else {
                    console.log('from button remove')
                    remove(product);
                }
                    

            }}>{button}</button>
        </div>
    )
}


