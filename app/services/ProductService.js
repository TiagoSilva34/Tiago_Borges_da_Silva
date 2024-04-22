import { API } from "./axios.config";

const getAllProducts = async() => {
    try {
        const { data } = await API().get('/products')

        return data
    } catch (error) {
        console.log(error.response)
    }
} 

export const ProductService = {
    getAllProducts
}