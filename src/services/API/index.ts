import axios from 'axios'
import settings from '../../settings'

const API = {
    get(url: string) {
        const response = axios.get(`${settings.apiUrl}${url}`)
    }
}

export default API