const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const joblistRouter = require('./routes/joblist')

app.use('/job', joblistRouter)

// app.get("/", (req, res) => {
//     res.json({ "jobs":[{"job1":"job description"},{"job2":"job description"}]})
// })

app.listen(5000, () => {console.log("Server started on port 5000...")})