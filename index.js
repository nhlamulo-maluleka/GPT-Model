const model = require("./Model")

const response = model("Modify the story to include insects")

response.then(res => {
    console.log(res.data)
}).catch(err => console.error(err))