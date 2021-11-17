import axios from 'axios';

const fetchPage = async (name: String) => {
  const charname = {
    first: name.split(' ')[0],
    last: name.split(' ')[1]
  };
  console.log(charname);
  const data = await axios.get(
    `https://bleach.fandom.com/wiki/${charname.first}_${charname.last}`
  );
  //eslint-disable-next-line
  console.log('page loaded successfully');
  return data;
};

export default fetchPage;
