const fs = require('fs');
const { idGenerator } = require('../../helpers/idGen');
const idRoute = require("express").Router();

idRoute.get('/', (req, res) => {
    fs.readFile(`./db/db.json`, `utf-8`, (err, data) => {
        !err ? res.json(JSON.parse(data)) : console.error(err)
    })
});



idRoute.post('/', (req, res) => {
    fs.readFile(`./db/db.json`, `utf-8`, (err, data) => {
        !err ? res.status(201).json('Still have greenlight') : console.log(err)
        let addNote = {
            id : `${idGenerator()}`,
            title: `${req.body.title}`,
            text: `${req.body.text}`,
        };
        const dbGrab = JSON.parse(data)
        dbGrab.push(addNote);
        fs.writeFile(`./db/db.json`, JSON.stringify(dbGrab, ``, 4),(err, data) => {
            !err ? console.log('File Updated.'):console.error(err)
        })
    })
});

module.exports = idRoute;