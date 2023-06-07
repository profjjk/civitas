import axios from 'axios';
let baseUrl = 'http://localhost:8080/api';

export const API = {
    getRepData (address: string) {
        return axios.post(`${baseUrl}/representatives/address`, { address })
    }
}