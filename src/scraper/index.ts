import * as cheerio from 'cheerio';
import fetchPage from './axios';
const noDescription = [
  'Kenpachi',
  'Yoruichi',
  'Coyote',
  'Retsu',
  'Ulquiorra',
  'Yhwach'
];

const pageInfo = async (selection: string) => {
  let charname;
  switch (selection) {
    case 'Yoruichi':
      charname = {
        first: 'Yoruichi',
        last: 'Shihoin'
      };
      break;
    case 'Coyote':
      charname = {
        first: 'Coyote',
        last: 'Stark'
      };
      break;
    case 'Retsu':
      charname = {
        first: 'Retsu',
        last: 'Unohana'
      };
      break;
    case 'Ichigo':
      charname = {
        first: 'Kurosaki',
        last: 'Ichigo'
      };
      break;
    case 'Ulquiorra':
      charname = {
        first: 'Ulquiorra',
        last: 'Cifer'
      };
      break;
    case 'Rukia':
      charname = {
        first: 'Rukia',
        last: 'Kuchiki'
      };
    case 'Yhwach':
      charname = {
        first: 'Yhwach',
        last: ''
      };
      break;
    case 'Uryu':
      charname = {
        first: 'Uryu',
        last: 'Ishida'
      };
      break;
    case 'Karin':
      charname = {
        first: 'Karin',
        last: 'Kurosaki'
      };
      break;
    case 'Soul_King':
      charname = {
        first: 'Soul',
        last: 'King'
      };
      break;
    case 'Kenpachi':
      charname = {
        first: 'Kenpachi',
        last: 'Zaraki'
      };
      break;
    case 'Chad' || 'Yasutora' || 'Chado':
      charname = {
        first: 'Yasutora',
        last: 'Sado'
      };
      break;
    default:
      charname = {
        first: '',
        last: ''
      };
  }
  try {
    const { data }: any = await fetchPage(
      `${charname?.first} ${charname?.last}`
    );
    const $ = cheerio.load(data);
    const pageInfo = {
      title: $('#firstHeading').text().replace(/\s\s+/g, ''),
      characterQuote: $('#mw-content-text p:first')
        .text()
        .replace(/\s\s+/g, ''),
      image: $('#mw-content-text img').attr('src'),
      description: `${
        noDescription.includes(charname?.first)
          ? 'Not Available'
          : $(
              `#mw-content-text p:contains("${charname?.first}"), #mw-content-text p:contains("${charname.last}")`
            )
              .first()
              .text()
              .replace(/\s\s+/g, '')
      }`,
      race: $('.portable-infobox h3:contains("Race") + div').text(),
      birthday: $('.portable-infobox h3:contains("Birthday") + div').text(),
      gender: $('.portable-infobox h3:contains("Gender") + div').text(),
      height: $('.portable-infobox h3:contains("Height") + div').text(),
      weight: $('.portable-infobox h3:contains("Weight") + div').text(),
      affiliation: $('h3:contains("Affiliation") + div').text(),
      powersandabilities: $(
        '#mw-content-text h3:contains("Powers & Abilities") ~ p, #mw-content-text h3:contains("Natural Abilities") ~ p, #mw-content-text h2:contains("Powers & Abilities") ~ p'
      )
        .text()
        .split(/\r?\n/),
      appearance: $('#mw-content-text h2:contains("Appearance") ~ p:lt(3)')
        .text()
        .split(/\r?\n/)
    };
    return pageInfo;
  } catch (err) {
    console.log(err);
  }
};

export default pageInfo;
