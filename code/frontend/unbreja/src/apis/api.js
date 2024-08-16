
import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

function createConfig(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
}

function login(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);

    return promise;
}
