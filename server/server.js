const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const joblistRouter = require('./routes/joblist')
app.use('/job', joblistRouter)

const illegalRouter = require('./routes/illegal')
app.use('/illegal', illegalRouter)

const capitalRouter = require('./routes/capital')
app.use('/capital', capitalRouter)

app.listen(5000, () => {console.log("Server started on port 5000...")})