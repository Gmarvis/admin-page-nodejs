let express = require("express");
let app = express()

let rootGreetings = (req, res) => {
  res.json({ "hello": "root Greetings from express" });
};
// routes
app.get("/", rootGreetings);
app.listen(8001);
