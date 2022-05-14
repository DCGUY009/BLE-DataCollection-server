const express = require("express");
const bodyparser = require("body-parser");

const app = express();

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

let postResult = [],
    count = 0;

app.route("/example")
    .get((req, res) => {
        res.status(200).json({ data: postResult, count: count });
    })
    .post((req, res) => {
        count += 1;
        console.log(req.body);
        postResult.push(req.body);
        res.status(200).json(req.body);
    });

// setting of port for server to listen
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log("Server started listening on port : ", PORT);
});
