"use client"
import { useEffect, useState } from 'react'
import { createContext } from 'react'

export const ProductContext = createContext({})

export const ProductProvider = ({children}) => {
    const [productState, setProductState] = useState({})


    useEffect(() => {
        if(productState && productState.id) localStorage.setItem('productData', JSON.stringify(productState))
    }, [productState])

    const getStoreData = () => {
        const product = JSON.parse(localStorage.getItem("productData"))

        setProductState(product)
    }
    
    return (
        <ProductContext.Provider value={{ productState, setProductState, getStoreData }}>
            {children}
        </ProductContext.Provider>
    )
}