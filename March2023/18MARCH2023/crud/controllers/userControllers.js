const db = require('../models/index');
const users = db.users;
const xlsx = require('xlsx')
const fs = require('fs');
const path = require("path");
// const fileReader = new FileReader();

exports.uploadUsers = async (req, res) => {
    let arr = [];
    const workbook = xlsx.readFile(req.file.path);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(worksheet);
    let string = JSON.stringify(data);
    let dir = path.join(__dirname, `../txt/data.txt`);
    const json = fs.writeFile(dir, string, () => {
    })
    let newPath = dir
    let jsonData;
    fs.readFile(newPath, 'utf8', (err, data) => {
        if (err) throw err;

        // Convert text to JSON
        jsonData = JSON.parse(data);
// console.log( jsonData);
        // Use the JSON data
let count = 0;
        for (let i = 0; i < jsonData.length; i++) {
            for (let j = i + 1; j < jsonData.length; j++) {
                if (jsonData[i]["email"] === jsonData[j]["email"]) {
                    console.log("duplicate");
                }
                else {
                    arr.push(jsonData[i])
                    ++count
                    console.log(count);
                }
            }

        }console.log(count);console.log(arr);
    });;

}