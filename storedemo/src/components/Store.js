import React from 'react'
import {addToCart} from '../actions'
import Product from './Product'
import {connect} from 'react-redux'

const Store = (props) => {
    console.log('props', props);
    return (
        <div>
            {props.products && props.products.map(product => {
                return <Product key={product.id} add={props.addToCart} product={product} button={'add to cart'}/>
            })}
        </div>
    )
}

const mapPropsToState = state => {
    return {
        products: state.storeReducer.items
    }
}


export default connect(mapPropsToState, {addToCart})(Store)