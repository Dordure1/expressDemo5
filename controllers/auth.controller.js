const { render } = require("ejs")
const { Request, Response } = require("express")

const authController = {

    login : async (req,res)=> {
        //// TODO login session
        res.render('auth/login')
    },

    loginPost : async (req,res)=> {
        
        //// TODO checkDB
        //// TODO login session
        const {pseudo, password} = req.body

        if(pseudo !== "zaza" || password !=="1234")
        {
            return res.render("auth/login")
        }

        ///login de la session
        req.session.userId = 42 
        req.session.userPseudo ="zaza"
        

        res.redirect('/')

    },

    register : async (req,res)=> {
        //// TODO login session
        res.render('auth/register')

    },

    registerPost : async (req,res)=> {
        
        /// TODO add acount in db
        //// TODO login session
        res.sendStatus(501)

    },

    logout : async (req,res)=> {
        //// TODO logoutsession
        req.session.destroy()
        res.redirect('/')
    },

}

module.exports = authController