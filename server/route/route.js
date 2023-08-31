import express from 'express';



const route = express.Router();


route.get('/news' , ()=> {
    console.log('hello');
});

export default route;