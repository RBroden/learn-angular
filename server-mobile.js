const express = require('express')
const app = express()
const path = require('path')
const port = 3001

app.use('/', express.static(
    path.join(
        __dirname,
        'space-station/www')
    )
)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})