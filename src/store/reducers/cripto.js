import { LOAD_CRIPTO } from '../actions/actionsTypes'

const initialState = {
        cripto: [],
}

const criptoReducer = (state = initialState, action) => {    
    switch(action.type) {
        case LOAD_CRIPTO:
            return {
                ...state,
                cripto: action.payload 
            }        
        default:
            return state
    }        
}

export default criptoReducer