const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');






router.get('/:id', async (req, res) => {
    
        const { id } = req.params;

        const response = await fetch(`${process.env.API_URL}/${id}?api_key=${process.env.API_KEY}`);

        if(response.status == 404) return res.status(response.status).json({ message: "Object do not exist"})
        else if(response.status > 300) return res.status(response.status).json({ message: "Unknown error has occured."})

        const data = await response.json();

        res.json(data);

});

module.exports = router;