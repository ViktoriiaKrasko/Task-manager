const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

//middleware
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(
        `Server is listening on ${port} and starting at http://localhost:${port}`
    );
});
