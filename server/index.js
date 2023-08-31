import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


import Connection from './database/db.js';
import DefaultData from './deafult.js';
import Route from './route/route.js';



const app = express();

dotenv.config();

app.use(cors());
app.use('/', Route);


const PORT= 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username , password);

app.listen(PORT , () => console.log(`Server  is running successfully on port ${PORT}`)) ;


DefaultData();