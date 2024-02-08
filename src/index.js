const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

const PORT = 4000;
const app = express();

//const DB_USER = root;
//const DB_pass = example;
//const DB_port = 27017;
//const DB_HOST = '192.168.32.2';
const redisClient = redis.createClient({
    url: 'redis://redis:6379'
}); 
redisClient.on('error',(err) => console.log('Redis Client Error', err));
redisClient.on('connect',() => console.log('Redis Client connected',err));
redisClient.connect();


const URI = 'mongodb://root:example@mongo:27017';
mongoose
    .connect(URI)
    .then(() => console.log('connected to database'))
    .catch((err) => console.log('Faild to connect to DB', err));
app.get('/',(req,res) => res.send('<h1> Hello tester From AWS!!, we are using docker hub now!!!!</h1>'))
app.listen(PORT,() => console.log(`app is up and running on port: ${PORT}`))