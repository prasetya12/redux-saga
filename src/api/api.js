import axios from "axios"


export function getApi(){

    return axios.create({
        baseURL: process.env.REACT_APP_URL
    })
}
