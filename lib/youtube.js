// utils/youtube.js
import axios from 'axios';

const API_KEY = 'AIzaSyDb65VQ625hy59Vr9w17ERmsRoM0DkRS08'; // Replace with your API key
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const fetchVideos = async (pageToken = '') => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: 'snippet',
        channelId: 'UCkJEpR7JmS36tajD34Gp4VA', // Replace with your channel ID
        maxResults: 10,
        key: API_KEY,
        order: 'date',
        pageToken: pageToken, // Add pageToken for pagination
      },
    });
    return {
      items: response.data.items,
      nextPageToken: response.data.nextPageToken, // Return nextPageToken
    };
  } catch (error) {
    console.error('Error fetching YouTube videos:', error.response.data);
    return { items: [], nextPageToken: '' };
  }
};