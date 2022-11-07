const mongoose = require('mongoose');

module.exports= async (urlConnection)=>{

    await mongoose.connect(urlConnection,{
            /// options ici
    })
    console.log('Connection MongoDB successfull ! ');

    return mongoose.connection

}
