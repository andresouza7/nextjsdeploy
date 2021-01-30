const URL_LOCALHOST = 'http://localhost:3000'
const URL_CLOUD = ''

console.log(URL_CLOUD)
const dev = process.env.NODE_ENV !== 'production'

const server = dev ? URL_LOCALHOST : URL_CLOUD

export default server

