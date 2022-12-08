const express = require('express');
const { generateImage } = require('../controllers/openaiController');
const router = express.Router();

// http://localhost:5000/openai/test
router.get('/test', (request, response) => {
    response.status(200).json({
        success: true,
    })
})
// http://localhost:5000/openai/generateImage
router.post('/generateImage', generateImage );

module.exports = router;