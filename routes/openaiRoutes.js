const { response, request } = require('express');
const express = require('express');
const router = express.Router();

// http://localhost:5000/openai/generate
router.get('/generate', (request, response) => {
    response.status(200).json({
        success: true,
    })
})

router.post('/generateImage', (request, response) => {
    response.status(200).json({
        success: true
    })
})

module.exports = router;