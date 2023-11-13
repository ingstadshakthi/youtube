import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function fetchData(search_query) {
    const hour = new Date().getHours();
    let API_KEY;
    if (hour < 3) {
        API_KEY = process.env.API_KEY_1;
    } else if (hour < 6) {
        API_KEY = process.env.API_KEY_2;
    } else if (hour < 9) {
        API_KEY = process.env.API_KEY_3;
    } else if (hour < 12) {
        API_KEY = process.env.API_KEY_4;
    } else if (hour < 15) {
        API_KEY = process.env.API_KEY_5;
    } else if (hour < 18) {
        API_KEY = process.env.API_KEY_6;
    } else if (hour < 21) {
        API_KEY = process.env.API_KEY_7;
    } else if (hour < 24) {
        API_KEY = process.env.API_KEY_8;
    } else {
        API_KEY = process.env.API_KEY_1;
    }
    const MAX_RESULTS = process.env.MAX_RESULTS;
    const SEARCH_QUERY = search_query === 'All' ? process.env.SEARCH : search_query;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${MAX_RESULTS}&q=${SEARCH_QUERY}&type=video&key=${API_KEY}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return { resp, data }

}

app.get('/api/search/:id', async (req, res) => {

    const { resp, data } = await fetchData(req.params.id);
    if (resp.status === 200) {
        res.status(200).json(data);
    } else {
        res.status(400).json({
            message: "request failed"
        });
    }

});

app.listen(PORT, console.log("Server Started"));