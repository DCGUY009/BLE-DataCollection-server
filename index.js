const express = require("express");
const bodyparser = require("body-parser");

const app = express();

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.route("/example")
    .get((req, res) => {
        res.send("Hello");
    })
    .post((req, res) => {
        console.log(req.body);
        res.status(200).send("Got the data");
    });

// setting of port for server to listen
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log("Server started listening on port : ", PORT);
});
