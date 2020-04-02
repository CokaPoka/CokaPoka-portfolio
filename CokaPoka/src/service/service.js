import axios from 'axios'
// import { authHeader } from './auth.service';

const BASE_URL = 'https://coetus.herokuapp.com/api/users'

const register = async (name, surname, username, password, email) => {
    return await axios.put(BASE_URL, { name, surname, username, password, email });

}
const login = async (username, password) => {
    return await axios.post(`${BASE_URL}`, { username, password })
}

export { register, login }