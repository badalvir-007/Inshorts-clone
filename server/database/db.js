import mongoose from 'mongoose';



const Connection = async(username , password) => {

    
    const URL = `mongodb+srv://${username}:${password}@inshorts-clone.ykggtms.mongodb.net/?retryWrites=true&w=majority`;

    //cirrently i have not make a connection on mongodb and thta's why there is  no url  is here and establishh the cluster first i complete all  the code after that i add the url  coneeection for the mongodb

    try {
        await mongoose.connect( URL , { useNewUrlParser : true });
        console.log("Database connected  succesfully");
    } catch (error) {
        console.log('error while connecting withh the database', error);
    }


}

export default Connection;