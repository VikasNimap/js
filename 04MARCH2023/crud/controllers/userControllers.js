const db = require('../models/index');
const users = db.users;
const path = require('path');
const bcrypt = require('bcrypt');
const fs = require("fs");
const csv = require("fast-csv");

async function createUser(req, res) {
    const data = req.body;
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    const response = await users.create(data);
    res.send({result:response});
}

async function getUser(req,res){
    const response = await users.findAll({where:{deletedAt:null}})
    res.send({result:response})
}

async function updateUser(req,res){
    const userId = req.params.id;
    const data = req.body;
    const response = await users.update(data,{where:{id:userId}});
    res.send({result:response});
}

async function deleteUser(req,res){
    const userId = req.params.id;
    const response = await users.destroy({where:{id:userId}});
    res.send({result:response});
}

//

const bulkUpload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }

    let tutorials = [];
    let paths = path.join( "public")
    console.log(":::::::",paths);

    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        tutorials.push(row);
      })
      .on("end", async() => {
        await users.bulkCreate(tutorials)
          .then(() => {
            res.status(200).send({
              message:
                "Uploaded the file successfully: " + req.file.originalname,
            });
          })
          .catch((error) => {
            res.status(500).send({
              message: "Fail to import data into database!",
              error: error.message,
            });
          });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};
//
// async function bulkUpload(req,res){
//     const data = req.body;
//     const response = await users.bulkUpload(data);
//     res.send({result:response});
// }
module.exports = {createUser,getUser,updateUser,deleteUser,bulkUpload}