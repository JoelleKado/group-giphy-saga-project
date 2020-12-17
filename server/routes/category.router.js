const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();

require('dotenv').config();

router.get('/', (req, res) => {
    let giphyKey = process.env.GIPHY_API_KEY;
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${giphyKey}`)
        .then(response => {
            console.log('This is response', response.data.data)
            res.send(response.data.data)
        })
        .catch(err => {
            console.log('Error in giphy search get', err)
            res.sendStatus(500)
        })
})

// router.post('/', (req, res) => {
//     let giphyKey = process.env.GIPHY_API_KEY;
//     axios.post(`http://api.giphy.com/v1/gifs/search?api_key=${giphyKey}`)
// })

router.get('/', (req, res) => {
    // return all categories
    const queryText = `SELECT * FROM category ORDER BY name ASC`;
    pool.query(queryText)
        .then((result) => {
            console.log('Result.rows', result.rows)
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;
