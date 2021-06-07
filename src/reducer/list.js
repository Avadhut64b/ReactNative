import {ADD_CONTACT, REMOVE_CONTACT} from '../action/action.types'


const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return [...state, action.payload]
        case REMOVE_CONTACT:
            return state.filter((contact) => contact.id !== action.payload)
        default:
            return state
    }
}