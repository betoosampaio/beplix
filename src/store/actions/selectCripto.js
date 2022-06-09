import { SELECT_CRIPTO } from './actionsTypes'

export const selectCripto = data => {
    return {
        type: SELECT_CRIPTO,
        payload: data
    }
}