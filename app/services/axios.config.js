import axios from "axios";

const apiUrl = 'https://fakestoreapi.com'

export const API = () => {
    return axios.create({
        baseURL: apiUrl
    })
}