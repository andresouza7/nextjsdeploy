import axios from '../../../database'

export default async function handler(req, res) {
    const { name, price } = req.body

    var body = JSON.stringify({
        "operation": "sql",
        "sql": `INSERT INTO nextapp.products (name, price) VALUES ('${name}','${price}')`
    });

    let response = await axios.post('', body);

    res.json(response.data);
}