const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');
const app = express();

dbConnection();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use('/api/images', require('./routes/images'));

app.listen(process.env.PORT || 8080, ()=>{
    console.log(`Running in port ${process.env.PORT}`);
});
