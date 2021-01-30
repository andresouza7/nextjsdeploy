const URL_LOCALHOST = 'http://localhost:3000'
const URL_CLOUD = process.env.VERCEL_URL.split('/')[0]

console.log(URL_CLOUD)
const dev = process.env.NODE_ENV !== 'production'

const server = dev ? URL_LOCALHOST : URL_CLOUD

export default server

