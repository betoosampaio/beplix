import { LOAD_CRIPTO } from './actionsTypes'

export const loadCripto = data => {
    return {
        type: LOAD_CRIPTO,
        payload: data
    }
}