import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/index'

const initialState = {
    items: [],
    total: 0
}

export const cartReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            console.log('payload from cart', action.payload)
            return {
                items: [...state.items, action.payload],
                total: state.total + action.payload.price
            }
        case REMOVE_FROM_CART:
            console.log('from the reducer');
            const removed = state.items.filter(item => {
                return item.id !== Number(action.payload.id)
            })
            return {
                items: [...removed],
                total: state.total - action.payload.price
            }


            // const newList = state.items.filter(product => {
            //     return product.id !== Number(action.payload.id)
            // })
            // return {
            //     items: [...newList]
            // }

        default:
            return state;
    }
}