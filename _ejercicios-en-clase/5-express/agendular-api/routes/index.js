//Ruteador de

const express = require('express')
const dailiesRouter = require('./dailies.router')

function routerApi(app){
    const router = express.Router();
    
    app.use('/api/v1',router)

    router.use('/dailies',dailiesRouter);
}

module.exports = routerApi