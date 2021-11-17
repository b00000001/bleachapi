import axios from 'axios';

const fetchPage = async () => {
  const data = await axios.get('https://bleach.fandom.com/wiki/Sosuke_Aizen');
  //eslint-disable-next-line
  console.log('page loaded successfully');
  return data;
};

export default fetchPage;
