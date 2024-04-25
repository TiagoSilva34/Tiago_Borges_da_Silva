import axios from "axios";

export const apiUrl = 'https://fakestoreapi.com'

export const API = () => {
    return axios.create({
        baseURL: apiUrl
    })
}