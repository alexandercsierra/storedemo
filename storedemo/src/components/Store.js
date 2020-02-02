import React from 'react'
import {addToCart} from '../actions'
import Product from './Product'
import {connect} from 'react-redux'
import styled from 'styled-components'

const ProductDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Store = (props) => {
    console.log('props', props);
    return (
        <ProductDiv>
            {props.products && props.products.map(product => {
                return <Product key={product.id} add={props.addToCart} product={product} button={'add to cart'}/>
            })}
        </ProductDiv>
    )
}

const mapPropsToState = state => {
    return {
        products: state.storeReducer.items
    }
}


export default connect(mapPropsToState, {addToCart})(Store)