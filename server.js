const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use('/', express.static(
    path.join(
        __dirname,
        'test1/dist/test1/browser')
    )
)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})