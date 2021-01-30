// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from '../../../database'

export default async function route(req, res) {
  console.log()
  var body = JSON.stringify({
    "operation": "sql",
    "sql": "SELECT * FROM nextapp.products"
  });

  let response = await axios.post('', body);

  res.json(response.data);
}
