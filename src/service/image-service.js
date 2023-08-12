import axios from 'axios';

const API_KEY = 'tpp05jhywR489r6f2sV4l4Wewalm5zjLZsZrhlD3TvhlnJ93qwgmiQ6Y';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);
  return data;
};

// https://api.pexels.com/v1/search?query=nature&per_page=1
