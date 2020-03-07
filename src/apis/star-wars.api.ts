import axios from 'axios';

const baseURL='https://facef-api-starwars.herokuapp.com/';

export const getFilms = async () => { 
    return axios.request({baseURL, url:'films'})
}

export const getFilmById = async (id: number) => {
    return axios.request({baseURL, url:`films/${id}`})
}