// utils/youtube.js
import axios from 'axios';

const API_KEY = 'AIzaSyDb65VQ625hy59Vr9w17ERmsRoM0DkRS08'; 
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const fetchVideos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: 'snippet',
        channelId: 'UCkJEpR7JmS36tajD34Gp4VA',  
        maxResults: 10,
        key: API_KEY,
        order: 'date', 
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching YouTube videos:', error.response.data);
    return [];
  }
}