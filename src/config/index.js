require('dotenv').config()

export const Config = {
    api_key: process.env.API_KEY,
    api_url: 'https://api.themoviedb.org/3/search/movie',
    img_path: 'https://image.tmdb.org/t/p/w500'
}