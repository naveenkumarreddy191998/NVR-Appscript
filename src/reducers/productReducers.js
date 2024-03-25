import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,

} from '../constants/productContants'
export const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST:
            return {
                loading:true,
                products: []
            }
        case ALL_PRODUCTS_SUCCESS:
            return {
                loading:false,
                products: action.payload,
            }
        case ALL_PRODUCTS_FAIL:
            return {
                error: action.payload
            }
        default:
            return state
    }
}