import { SELECT_CRIPTO } from '../actions/actionsTypes'

const initialState = {
        selectCripto: [],
}

const selectCriptoReducer = (state = initialState, action) => {    
    switch(action.type) {
        case SELECT_CRIPTO:
            return {
                ...state,
                selectCripto: action.payload 
            }        
        default:
            return state
    }        
}

export default selectCriptoReducer