import axios from 'axios';

const fetchPage = async () => {
  const data = await axios.get(
    'https://bleach.fandom.com/wiki/Ichigo_Kurosaki'
  );
  //eslint-disable-next-line
  console.log('page loaded successfully');
  return data;
};

export default fetchPage;
