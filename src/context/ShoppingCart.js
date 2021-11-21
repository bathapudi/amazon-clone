import React, { useContext, useReducer } from 'react'

export const initialState = {
    basket: [],
    user: {
        email: '',
        password: '',
        islogged: false
    }
}

export const ShoppingCartContext = React.createContext();

export const ShoppingCartProvider = ({ children, reducer, initialState }) => {

    return (
        <ShoppingCartContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </ShoppingCartContext.Provider>

    )
}

export const useStateValue = () => useContext(ShoppingCartContext);