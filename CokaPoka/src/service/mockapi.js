import axios from 'axios'


const BASE_URL = 'http://5e84a4a6a8fdea00164aca2b.mockapi.io/api'

const getPhotosMock = () => {
    return axios.get(`${BASE_URL}/photos`)


}


export default getPhotosMock