import axios from 'axios';
import { GetDataImg } from './MyApi.types';

const myKey = 'VCOnMe1DpUA-YflVb2CuIdDFtorjZPzeH0ijBeaY1fo';

export const fetchData = async (
  query: string,
  page: number,
  signal: AbortSignal
): Promise<GetDataImg> => {
  const response = await axios.get<GetDataImg>(
    `https://api.unsplash.com/search/photos/?client_id=${myKey}&per_page=12&query=${query}&page=${page}`,
    { signal }
  );
  console.log(response.data);
  return response.data;
};
