import { Items } from "@/types/Items";

const axios = require("axios");

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  method: 'GET',
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'e4744db562msh5a3fbcf4075375cp1b339cjsn1321672464b0',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
type success = {
  data: {
    items: Items[] 
  } | null
}

export const fetchFromApi = async (url: string): Promise<success> => {

  const res = await axios.get(`${BASE_URL}/${url}`, options);
  if ( res ) {
    return {
      data: res.data
    }
  } else {
    return {
      data: null
    }
  }
  
}


// go to vuex and fetch it, then push it to frontend