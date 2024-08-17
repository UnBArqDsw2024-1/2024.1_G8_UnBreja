import axios from "axios";

const BASE_URL = "http://unbreja.vps-kinghost.net";

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function login(body) {
  return axios.post(`${BASE_URL}/auth/login`, body);
}

function register(body) {
  return axios.post(`${BASE_URL}/auth/signup`, body);
}

function getUniversidades() {
  return axios.get(`${BASE_URL}/auth/universidades`);
}

function getInteresses() {
  return axios.get(`${BASE_URL}/auth/interesses`);
}

function updatePerfil(usuario){
  return axios.put(`${BASE_URL}/api/usuarios`, usuario);
}

const api = {
  login,
  register,
  getUniversidades,
  getInteresses,
  updatePerfil
};

export default api;
