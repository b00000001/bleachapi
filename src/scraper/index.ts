// TODO: Fix fetchPage() import so that it will work.

import * as cheerio from 'cheerio';
import fetchPage from './axios';
const charname = {
  first: 'Sosuke',
  last: 'Aizen'
};
const pageInfo = async () => {
  try {
    const { data }: any = await fetchPage();
    const $ = cheerio.load(data);
    const pageInfo = {
      title: $('#firstHeading').text().replace(/\s\s+/g, ''),
      characterQuote: $('#mw-content-text p:first')
        .text()
        .replace(/\s\s+/g, ''),
      image: $('#mw-content-text img').attr('src'),
      description: `${
        charname.first === 'Yoruichi'
          ? 'Not Available'
          : $(
              `#mw-content-text p:contains("${charname.first}"), #mw-content-text p:contains("${charname.last}")`
            )
              .first()
              .text()
              .replace(/\s\s+/g, '')
      }`,
      powersandabilities: $(
        '#mw-content-text h3:contains("Powers & Abilities") ~ p, #mw-content-text h3:contains("Natural Abilities") ~ p, #mw-content-text h2:contains("Powers & Abilities") ~ p'
      )
        .text()
        .split(/\r?\n/)
    };
    return pageInfo;
  } catch (err) {
    console.log(err);
  }
};

export default pageInfo;
