import axios from 'axios';

export interface Results {
  id: string | number;
  urls: {
    regular: string;
    small: string;
  };
}
interface GetDataImg {
  total_pages: number;
  results: Results[];
}

const myKey = 'VCOnMe1DpUA-YflVb2CuIdDFtorjZPzeH0ijBeaY1fo';

export const fetchData = async (
  query: string,
  page: number,
  signal: AbortSignal
): Promise<GetDataImg> => {
  const response = await axios.get<GetDataImg>(
    `https://api.unsplash.com/search/photos/?client_id=${myKey}&per_page=5&query=${query}&page=${page}`,
    { signal }
  );
  console.log(response.data);
  return response.data;
};
