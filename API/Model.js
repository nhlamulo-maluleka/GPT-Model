require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

class GTPModel {
  apiKey = null;
  openai = null;
  configuration = null;

  constructor() {
    this.apiKey = process.env.OPENAI_API_KEY;
  }

  compileModel() {
    this.configuration = new Configuration({
      apiKey: this.apiKey,
    });

    this.openai = new OpenAIApi(this.configuration);
  }

  async generate(input) {
    return await this.openai.createCompletion({
      model: "text-davinci-003",
      prompt: input,
      temperature: 0,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });
  }
}

const model = new GTPModel();
model.compileModel();

module.exports = { model };
