const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.json({ "jobs":[{"job1":"job description"},{"job2":"job description"}]})
})

app.listen(5000, () => {console.log("Server started on port 5000...")})