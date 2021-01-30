import styles from '../styles/Home.module.css'
import axios from 'axios'
import {useRouter} from 'next/router'

function ListItem({product}) {
    let router = useRouter();

    async function deleteProduct(e) {
        e.preventDefault()
        let response = axios.get('http://localhost:3000/api/products/delete', {
            params: {
                id: product.id
            }
        })
        console.log(response.data)
        router.push("/")
    }

    return (
        <>
        <a href={`/product?id=${product.id}`} className={styles.card}>
            <p>{product.name}</p>
            <h3>&rarr; R$ {product.price}</h3>
        </a>
        <a href="" onClick={deleteProduct}>Delete</a>
        </>
    )
}

export default ListItem
