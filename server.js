require('dotenv-flow').config()

/// récupération variable d'environement
const {NODE_ENV , PORT} = process.env
const express = require('express');
const app = express()

app.use('/',(req,res)=> {
    res.send("<h1>Hello</h1>")
})

app.listen(PORT,()=> {
    console.log(`Server up on port: ${PORT}, in ${NODE_ENV} mode`);
})