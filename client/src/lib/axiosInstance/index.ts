import axios, { AxiosInstance } from 'axios';

const placesConfig = {
    baseURL: 'https://maps.googleapis.com/maps/api/place/autocomplete/json',
    method: 'get',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }

};

export const axiosPlacesInstance: AxiosInstance = axios.create(placesConfig);