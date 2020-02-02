import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/index'
import products from '../data/products'

const initialState = {
    items: [...products]
}

export const storeReducer = (state=initialState, action) => {
    switch(action.type){

        case ADD_TO_CART:
            const newList = state.items.filter(product => {
                return product.id !== Number(action.payload.id)
            })
            return {
                items: [...newList]
            }
        case REMOVE_FROM_CART:
            return {
                items: [...state.items, action.payload]
            }

        default:
            return state;
    }
}