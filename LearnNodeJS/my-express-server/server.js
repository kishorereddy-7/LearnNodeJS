const express = require("express")
const app = express()

app.get("/", function(req, res) {
    res.send("Hello")
})

app.get("/contact", function(req, res) {
    res.send("Contact me")
})

app.get("/about", function(req, res) {
    res.send("i am kishore reddy")
})

app.listen(3000, function() {
    console.log("Server has started on port 3000")
})
