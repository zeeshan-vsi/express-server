const express = require('express')
const app = express()
app.use(express.json())    // <==== parse request body as JSON

const port = process.env.PORT || 8080


app.get('/', (req, res) => {
    res.send('send all of your request related data with post request to the same address')
})
app.post('/', (req, res) => {
    res.json(JSON.stringify(req.body))
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})