import React from 'react'
import { types } from '../Helpers/types'

export const login = (email) => ({
    type: types.login,
    payload: {
        email
    }
})

export const logout = () => ({
    type: types.logout
}); 