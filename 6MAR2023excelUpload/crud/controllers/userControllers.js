const db = require('../models/index');
const users = db.users;
const path = require('path');
const bcrypt = require('bcrypt');
const fs = require("fs");
const csv = require('csv-parser');
const csv2json = require('csv2json');
const xlsxConvert = require('xlsx');
// const uploads = require('../uploads');
async function createUser(req, res) {
  const data = req.body;
  const salt = await bcrypt.genSalt(10);
  data.password = await bcrypt.hash(data.password, salt);
  const response = await users.create(data);
  res.send({ result: response });
}

async function getUser(req, res) {
  const response = await users.findAll({ where: { deletedAt: null } })
  res.send({ result: response })
}

async function updateUser(req, res) {
  const userId = req.params.id;
  const data = req.body;
  const response = await users.update(data, { where: { id: userId } });
  res.send({ result: response });
}

async function deleteUser(req, res) {
  const userId = req.params.id;
  const response = await users.destroy({ where: { id: userId } });
  res.send({ result: response });
}

//

const bulkUpload = async (req, res) => {
  try {
    // var workbook = xlsxConvert.readFile(req.file.path);
    // var sheet_name_list = workbook.SheetNames;
    // let data = xlsxConvert.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
    // console.log("data======",data);
    // const response = await users.bulkCreate(data);
    // res.send({ result: response })


    // let data = fs.createReadStream(req.file.path)
    // .pipe(csv2json({
    //   // Defaults to comma.
    //   separator: ';'
    // }))
    // .pipe(fs.createWriteStream('data1.json'));
    // let test = fs.readFile('C:/Users/hp/Desktop/04MARCH2023/crud/data1.json','utf8',async(err,data)=>{
    //   if(err){
    //     console.error(err)
    //     return 
    //   }
    // let a1 = JSON.parse(data);
    // console.log(data);
    // for(let i = 0;i<a1.length;i++){
    //   console.log("SDFG",a1[i]);

    // }
    

  }
  catch (error) {
    res.send({result:`${error}`})
  }
}

module.exports = { createUser, getUser, updateUser, deleteUser, bulkUpload }