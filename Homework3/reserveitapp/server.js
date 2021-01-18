const express = require('express');

const connectDB = require('C:/Users/Stefanija/Desktop/ReserveIT/Homework3/reserveitapp/DB/Connection');

const Route = require('C:/Users/Stefanija/Desktop/ReserveIT/Homework3/reserveitapp/routes/auth.js');
const app = express();

connectDB();
const Port = process.env.Port || 3000;

app.listen(Port, () => console.log('Server started'));

app.use('/api', Route);