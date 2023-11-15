import axios from 'axios'
import settings from '../../settings'
const { API_BASE_URL, token } = settings

const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
}

const API = {
    async get(url: string) {
        return await axios.get(`${API_BASE_URL}${url}`, { headers })
    }
}

export default API