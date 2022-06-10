import { TRANSACTION_CRIPTO } from '../actions/actionsTypes'

const initialState = {
    transaction: [],
}

const transactionReducer = (state = initialState, action) => {
    switch(action.type) {
        case TRANSACTION_CRIPTO:
            return {
                ...state,
                transaction: action.payload
            }
        default:
            return state
    }        
}

export default transactionReducer