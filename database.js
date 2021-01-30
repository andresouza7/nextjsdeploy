import axios from 'axios'

const HARPERDB_URL = process.env.HARPERDB_URL
const HARPERDB_AUTH_TOKEN = process.env.HARPERDB_AUTH_TOKEN

const url = 'https://cloud-andrewebdev.harperdbcloud.com'
const auth = 'Basic YW5kcmU6cGlkOTZzcWRp'

axios.defaults.baseURL = url
axios.defaults.headers.common['Authorization'] = auth
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default axios;