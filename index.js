const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('news api running')
})

app.get('/categories-news', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log('badsha-news-server running on port', port);
})
