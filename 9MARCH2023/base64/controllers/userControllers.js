const db = require('../models/index');
const users = db.users;
const fs = require('fs');
const path = require('path')
exports.createUsers = async(req,res)=>{
    const data = req.body;

    const encoded = req.file.path.toString('base64')
    function base64(encoded){
        var bitmap = fs.readFileSync(encoded);
        //convert binary data to base64 encoded string
         new Buffer(bitmap).toString('base64');
         base64(encoded);
        console.log("encoded",encoded)
        data.image = encoded
        const response = await users.create(data);
        res.send({result:response})
    // }
    
}