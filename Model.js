require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const model = async (input) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: input,
    temperature: 0,
    max_tokens: 2000,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });

  return response;
};

module.exports = model;
