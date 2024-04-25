"use client"
import { useEffect, useState } from 'react'
import { createContext } from 'react'

export const ProductContext = createContext({})

export const ProductProvider = ({children}) => {
    const [storageData, setStorageData] = useState({})
    const [storageType, setStorageType] = useState("") 


    useEffect(() => {
        if (JSON.parse(localStorage.getItem("campaignData")) === null)
        localStorage.setItem('campaignData', JSON.stringify([]))

        if(storageData && storageData.id && storageType === "productData") {
            localStorage.setItem('productData', JSON.stringify(storageData))
            localStorage.setItem('storageType', JSON.stringify(storageType))
        }

        if(storageData && storageData.id && storageType === "updateCampaign") {
            localStorage.setItem('updateCampaign', JSON.stringify(storageData))
            localStorage.setItem('storageType', JSON.stringify(storageType))
        }

        else if (storageType === "campaignData") {
            let campaign = JSON.parse(localStorage.getItem("campaignData"))
            let storageCampaign = [...campaign, storageData]
            localStorage.setItem('campaignData', JSON.stringify(storageCampaign))
            localStorage.setItem('storageType', JSON.stringify(storageType))
        }
    }, [storageData, storageType])

    const getStorageData = () => {
        let storageType = JSON.parse(localStorage.getItem("storageType"))

        if (storageType === "campaignData") {
            const campaign = JSON.parse(localStorage.getItem("campaignData"))

            return campaign
        } else if (storageType === "productData") {
            const product = JSON.parse(localStorage.getItem("productData"))

            return product
        } else if (storageType === 'updateCampaign') {
            const update = JSON.parse(localStorage.getItem("updateCampaign"))

            return update
        }
    }
    
    return (
        <ProductContext.Provider value={{ setStorageType, setStorageData, getStorageData }}>
            {children}
        </ProductContext.Provider>
    )
}