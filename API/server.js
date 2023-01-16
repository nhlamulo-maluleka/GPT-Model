const express = require('express');
const app = express();
const cors = require('cors');
const { model } = require('./Model');
const PORT = process.env.PORT || 9000

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
    res.send("<h1>Welcome to Nicroni GTP!</h1>");
})

app.post("/ask", (req, res) => {
    const { body: { input } } = req;

    const genResponse = model.generate(input);

    genResponse.then(({ data }) => {
        res.send({
            code: 200,
            response: data
        });
    }).catch(err => {
        res.send({
            code: 500,
            response: err
        });
    });
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});