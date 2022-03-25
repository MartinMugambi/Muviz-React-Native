import axios from "axios"
import { Token } from "../../key"



export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer ${Token}`
    }
})