import React from 'react'
import {removeFromCart} from '../actions/index'
import {connect} from 'react-redux'
import Product from './Product'
import styled from 'styled-components'

const ProductDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Cart = (props) => {
    return (
        <div>
            <h3>Total: ${props.total}</h3>
            <ProductDiv>
                {props.items && props.items.map(item => {
                    return <Product key={item.id} remove={props.removeFromCart} product = {item} button={'remove from cart'}/>
                })}
            </ProductDiv>
            
        </div>
        
    )
}


const mapStateToProps = state => {
    return {
        items: state.cartReducer.items,
        total: state.cartReducer.total
    }
}

export default connect(mapStateToProps, {removeFromCart})(Cart)