import axios from 'axios'


const BASE_URL = 'http://localhost:3000'

const getPhotos = () => {
    return axios.get(`${BASE_URL}/photos`).then(res=>console.log(res.data))
    

}


export default getPhotos