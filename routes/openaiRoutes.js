const express = require('express');
const { generateImage } = require('../controllers/openaiController');
const router = express.Router();

// http://localhost:5000/openai/generate
router.get('/generate', (request, response) => {
    response.status(200).json({
        success: true,
    })
})

router.post('/generateImage', generateImage )

module.exports = router;