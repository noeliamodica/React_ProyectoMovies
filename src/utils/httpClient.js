const API = "https://api.themoviedb.org/3"

export function get (path){
    return fetch( API + path, {
            headers:{
             Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzdmOWRmMjZiNDZlYzM3ZTBkNzg3NTMxY2Q1NDJiMyIsInN1YiI6IjY0MGQzMWUxMzIzZWJhMDEwYjkwNjIyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CZ4aLBP4njQNk9I3D3JzRYODyWokcwKU33fQmElf3hs",    
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then(result => result.json())
}