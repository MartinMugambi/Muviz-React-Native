import axios from "axios"


export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDY1N2QzNjVmOTNmMzEwMTNmNzhkMzMxYmU1NDIwZSIsInN1YiI6IjYwZGFmNTExMjViOTU1MDA3M2IwYTE0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IoJRpgUz-F0ECN5bVHTEeLEd32f6tMfRd0JnKySXSJc"
    }
})