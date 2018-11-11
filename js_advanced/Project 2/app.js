const tmdb = {}
tmdb.key = '37ecc0c23b6732fd9d464cd99d51f6e1'

tmdb.getMovies = () => {
    $.ajax({
        url: 'https://api.themoviedb.org/3/search/movie',
        method: 'GET',
        dataType: 'json',
        data: {
            api_key: tmdb.key,
            language: 'en-US',
            include_adult: false,
            query: 'matrix'
        }
    }).then(res => console.log(res))
}

tmdb.init = () => {
    tmdb.getMovies()
}

$(() => {
    tmdb.init()
})
