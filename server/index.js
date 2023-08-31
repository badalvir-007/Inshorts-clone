import express from 'express';

import Connection from './database/db.js';
import DefaultData from './deafult.js';
import Route from './route/route.js';



const app = express();

app.use('/', Route);


const PORT= 8000;

Connection();

app.listen(PORT , () => console.log(`Server  is running successfully on port ${PORT}`)) ;


DefaultData();