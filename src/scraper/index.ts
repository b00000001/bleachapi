import * as cheerio from 'cheerio';
import fetchPage from './axios';
import axios from 'axios';
import { text } from 'express';
const pageInfo = async () => {
  try {
    const { data }: any = await axios.get(
      'https://bleach.fandom.com/wiki/Ichigo_Kurosaki'
    );
    const $ = cheerio.load(data);
    const pageInfo = {
      title: $('#firstHeading').text().replace(/\s\s+/g, ''),
      characterQuote: $('#mw-content-text p:first')
        .text()
        .replace(/\s\s+/g, ''),
      image: $('#mw-content-text img').attr('src'),
      description: $('#mw-content-text p:contains("Ichigo")').text()
    };
    return pageInfo;
  } catch (err) {
    console.log(err);
  }
};

export default pageInfo;
