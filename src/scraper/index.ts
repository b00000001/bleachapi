import * as cheerio from 'cheerio';
import fetchPage from './axios';
import axios from 'axios';
import { text } from 'express';
const charname = {
  first: 'Yoruichi',
  last: `Shihoin`
};
const pageInfo = async () => {
  try {
    const { data }: any = await axios.get(
      `https://bleach.fandom.com/wiki/${charname.first}_${charname.last}`
    );
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
              `#mw-content-text b:contains("${
                charname.first || charname.last
              }") ~ i ~ a`
            )
              // .first()
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
