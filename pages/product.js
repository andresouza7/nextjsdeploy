import axios from 'axios'
import server from '../server'

export default function Product({product}) {
    console.log(product)
    return(
        <>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <a href="/">Go back</a>
        </>
    )
}

export async function getServerSideProps(context) {
    // get product from API
    let {id} = context.query

    let response = await axios.get(`${server}/api/products/${id}`)
    let product = response.data

    return ({
        props: {
            product
        }
    })
}