import {ADD_CONTACT, REMOVE_CONTACT} from './action.types'


export const addContact = (contact) => ({
    type: ADD_CONTACT,
    payload: contact
})

export const removeContact = (id) => ({
    type: REMOVE_CONTACT,
    payload: id
})
