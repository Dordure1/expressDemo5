require('dotenv-flow').config()

/// récupération variable d'environement
const {NODE_ENV , PORT} = process.env
const express = require('express');
const router = require('./routers');

const app = express()

app.use(router)



app.listen(PORT,()=> {
    console.log(`Server up on port: ${PORT}, in ${NODE_ENV} mode`);
})