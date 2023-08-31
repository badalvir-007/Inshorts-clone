
//this works as an api in the backend

import News from '../models/news-schems.js';

export const getNews = async (request , response) => {
    try {
       let data = await News.find({});
       response.status(200).json(data);
    } catch (error) {
        response.status(500).json({
            message :data.message
        });
    }
}