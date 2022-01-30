require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const productRouter = require('./routes/productRouter')

const app = express()
app.use(express.json())

app.use('/api/products', productRouter)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Server is running on port', port)
})

// Connect to MongoDB
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, err => {
    if(err) throw err
    console.log('MongoDB is connected...')
})