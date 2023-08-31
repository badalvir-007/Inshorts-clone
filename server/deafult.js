import { data } from "./constants/data.js";
import News  from './models/news-schems.js';

const DefaultData = async () => {

    try {
        await News.insertMany(data);
        console.log('Data imported Succesfully');
    } catch (error) {
        console.log('error' , error.message);
    }

}

export default DefaultData;