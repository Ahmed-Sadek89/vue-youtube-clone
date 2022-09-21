import { Items } from "@/types/Items";

const axios = require("axios");

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  method: 'GET',
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '29fdce7590msh809dc6876da46a5p11f7edjsn4ca6a409899e',
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