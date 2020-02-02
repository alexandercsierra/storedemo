import React from 'react'
import {removeFromCart} from '../actions/index'
import {connect} from 'react-redux'
import Product from './Product'

const Cart = (props) => {
    return (
        <div>
            <div>
                {props.items && props.items.map(item => {
                    return <Product key={item.id} remove={props.removeFromCart} product = {item} button={'remove from cart'}/>
                })}
            </div>
            <h3>{props.total}</h3>
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