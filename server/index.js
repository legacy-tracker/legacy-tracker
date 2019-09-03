require("dotenv").config();
const express = require("express");
const massive = require("massive");

const PORT = 3001;

const { CONNECTION_STRING } = process.env;

const app = require("express")();

app.use(express.json());

// massive(CONNECTION_STRING).then(db => {
//     app.set('db', db)
//     console.log('db connected')
// })

app.listen(PORT, () => console.log(`LISTEN on ${PORT}`));
