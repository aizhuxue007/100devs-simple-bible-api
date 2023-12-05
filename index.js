import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        const resp = await axios.get('https://bible-api.com/john%203:16');
        res.send(resp.data);
    } catch (error) {
        console.error(error)
    }
    
})

app.listen(port, () => {
    console.log(`Listening on PORT: ${port}.`)
})