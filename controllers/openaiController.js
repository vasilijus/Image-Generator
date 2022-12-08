// const dotenv = require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (request, response) => {
    response.status(200).json({
        success: true,
    })
};

module.exports = { generateImage };