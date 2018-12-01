const axios = require('axios');

const url = 'https://api.themoviedb.org/4/list/1'
const options = {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2VjYzBjMjNiNjczMmZkOWQ0NjRjZDk5ZDUxZjZlMSIsInN1YiI6IjViZDUzYTJkOTI1MTQxMDNhMDAyNDlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5X-5HPY62-x6BW_56KZcu6_VoCN3SDC-0pkyxbQfNY',
    'Content-Type': 'application/json;charset=utf-8'
}

const getMovies = axios.get(url, {headers: options})
    .then(res => console.log(res))
    .catch(err => err)

export default getMovies
