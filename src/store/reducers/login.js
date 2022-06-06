import { LOGIN_CHANGED, PASSWORD_CHANGED } from '../actions/actionsTypes'

const initialState = {
        login: '',
        password: ''
}

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_CHANGED:
            return {
                ...state,
                login: action.payload
            }
        case PASSWORD_CHANGED:
            return {
                ...state,
                password: action.payload
            }
        default:
            return state
    }        
}

export default loginReducer