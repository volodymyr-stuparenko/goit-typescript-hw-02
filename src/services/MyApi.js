import axios from 'axios';

const myKey = 'VCOnMe1DpUA-YflVb2CuIdDFtorjZPzeH0ijBeaY1fo';

export const searchImages = async (query, page = 1, per_page = 12, signal) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${myKey}&per_page=${per_page}&query=${query}&page=${page}`,
    { signal }
  );
  return response.data;
};
