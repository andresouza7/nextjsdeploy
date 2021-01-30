const URL_LOCALHOST = 'http://localhost:3000'
const URL_CLOUD = 'https://nextjs-9xegayk8q.vercel.app/'

const server = process.env.NODE_ENV === 'development' ? URL_LOCALHOST : URL_CLOUD

export default server

