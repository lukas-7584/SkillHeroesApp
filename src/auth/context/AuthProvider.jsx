
import React from 'react'
import { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'

const initialState = {
    logged : false,
    user:null,
}

const init = () => {

    const user = JSON.parse(localStorage.getItem('user'))

    return{
        logged: !!user,
        user,

    }
}

export const AuthProvider = ( {children} ) => {
    
        const [authState, dispatch] =useReducer(authReducer, initialState, init)

        const login  =  (username = '') =>{
            const user ={
                id: 'JLA4525',
                username: username,
            }

            localStorage.setItem('user', JSON.stringify(user));

            dispatch({
                type: types.login,
                payload: user
            })
        }

        const logout = () =>{

            dispatch({
                type: types.logout,
            })

            localStorage.removeItem('user');

        }

    return (
        <AuthContext.Provider value={ {...authState, login, logout} }>
            { children }
        </AuthContext.Provider>
    )
}
