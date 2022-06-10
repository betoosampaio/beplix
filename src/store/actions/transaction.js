import { TRANSACTION_CRIPTO } from './actionsTypes'

export const transactionCripto = data => {
    return {
        type: TRANSACTION_CRIPTO,
        payload: data
    }
}
