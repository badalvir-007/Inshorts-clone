import {useEffect} from 'react';
import { Box } from '@mui/material';
import { getNews } from '../service/api';

const Articles = () => {

    useEffect( ()=>{
        dailyNews();
    } , []);

    const dailyNews = async() =>{
        let response = await getNews();
        console.log(response);
    }
  return (
    <Box>
      Tho kaise ho app sab

      karthe hai kam  bhot der hogya hai
    </Box>
  )
}

export default Articles;
