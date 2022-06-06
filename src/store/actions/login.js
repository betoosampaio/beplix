import { LOGIN_CHANGED, PASSWORD_CHANGED } from './actionsTypes'

export const changeLogin = data => {
    return {
        type: LOGIN_CHANGED,
        payload: data
    }
}

export const changePassword = data => {
    return {
        type: PASSWORD_CHANGED,
        payload: data
    }
}