const URL_LOCALHOST = 'http://localhost:3000'
const URL_CLOUD = process.env.VERCEL_URL

console.log(URL_CLOUD)

const server = URL_CLOUD ? URL_CLOUD : URL_LOCALHOST

export default server

