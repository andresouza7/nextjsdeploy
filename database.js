import axios from 'axios'

const HARPERDB_URL = process.env.HARPERDB_URL
const HARPERDB_AUTH_TOKEN = process.env.HARPERDB_AUTH_TOKEN
const token = 'Basic ' + HARPERDB_AUTH_TOKEN

axios.defaults.baseURL = HARPERDB_URL
axios.defaults.headers.common['Authorization'] = token
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default axios;