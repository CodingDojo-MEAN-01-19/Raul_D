const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const path = require('path');


const port = process.env.PORT || 8000;

const app = express();

app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

app.use(express.static('my-angular-app/public/dist/public'));

app.listen(port, () => console.log `We are connected to port ${port}.`);
