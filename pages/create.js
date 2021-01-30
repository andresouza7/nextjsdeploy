import axios from 'axios'
import {useState} from 'react'
import {useRouter} from 'next/router'
import server from '../server'

function Create() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)

    let router = useRouter()

    async function add(e) {
        e.preventDefault();
        console.log("submiting...")
        let data = { name, price }
        await axios.post(`${server}/api/products/add`, data)
        
        router.push("/");
    }

    return (
        <div>
            <h1>Add new product</h1>
            <form method="" action="" onSubmit={add}>
                <label>Product name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <label>Product price</label>
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
                <button type="submit" onClick={add}>Send post request</button>
            </form>

        </div>
    )
}

export default Create
