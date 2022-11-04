const { Request, Response } = require("express")

const homeController = {

    /**
     * Méthode index du home controller
     * @param {Request} req 
     * @param {Response} res 
     */

    index : (req, res)=> { 
        res.sendStatus(501)
    },
    contact : (req, res)=> { 
        res.sendStatus(501)
    }
}
module.exports = homeController