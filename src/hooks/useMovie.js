import { useState } from "react"
import tmdb from "../api/tmdb"

export default () =>{


    

    const[movie, setMovie] = useState({
        loading: false,
        data: null,
        error: null,
    })


    const fecthMovie = async (url) =>{
 
        setMovie({
            loading: true,
            data: null,
            error: null,
        })
        try {
            
            const response = await tmdb.get(url);

            setMovie({
                loading: false,
                data: response.data.results,
                error: null,
            })
        } catch (error) {
            
            setMovie({
                loading: false,
                data: null,
                error: "Could not  fectch movies"
            })
        }
    }

    return [movie, fecthMovie];
}