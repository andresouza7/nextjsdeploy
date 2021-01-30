import axios from '../../../database'

export default async function handler(req, res) {
    let { id } = req.query;

    var body = JSON.stringify({
        "operation": "sql",
        "sql": `SELECT * FROM nextapp.products WHERE id = '${id}'`
    })

    let response = await axios.post('',body);

    res.json(response.data[0])
}