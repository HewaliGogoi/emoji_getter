const express = require('express');
const app = express();
const Text = require('./model/textPage.model');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.post('/', async(req, res) => {
    try {
        let detail = req.body;
        const text = await Text.insertMany([detail]);
        console.log(text)
        res
        .status(201)
        .json(text);
    } catch (error) {
        return res
        .status(500)
        .json(error);
    }
});

app.get('/', async (req, res) => {
    try {
        let response = await Text.find({});
        res.status(201).json(response)
    } catch (error) {
        return res
        .status(500)
        .json(error);
    }
})

module.exports = app;