import axios from 'axios';

const fetchPage = async (name: String) => {
  try {
    const charname = {
      first: name.split(' ')[0],
      last: name.split(' ')[1]
    };
    const data = await axios.get(
      `https://bleach.fandom.com/wiki/${charname.first}_${charname.last}`
    );
    //eslint-disable-next-line
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchPage;
