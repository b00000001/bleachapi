import * as cheerio from 'cheerio';
import fetchPage from './axios';
import returnChar from './characterSwitch';
const noDescription = [
  'Kenpachi',
  'Yoruichi',
  'Coyote',
  'Retsu',
  'Ulquiorra',
  'Yhwach',
  'Orihime'
];
const pageInfo = async (selection: string) => {
  const charname: any = returnChar(selection);
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
      // if human
      ...(charname?.human && {
        occupation: $('h3:contains("Occupation") + div').text()
      }),
      // if arrancar
      affiliation: $('h3:contains("Affiliation") + div').text(),
      ...(charname?.arrancar && {
        previousaffiliation: $(
          'h3:contains("Previous Affiliation") + div'
        ).text()
      }),
      ...(charname?.arrancar && {
        previousoccupation: $('h3:contains("Previous Occupation") + div').text()
      }),
      ...(charname?.arrancar && {
        previousteam: $('h3:contains("Previous Team") + div').text()
      }),
      ...(charname?.arrancar && {
        previouspartner: $('h3:contains("Previous Partner") + div').text()
      }),
      ...(charname?.arrancar && {
        partner: $('h3:contains("Partner") + div').text()
      }),
      // if shinigami
      ...(charname?.shinigami && {
        profession: $('h3:contains("Profession") + div').text()
      }),
      ...(charname?.shinigami && {
        previousposition: $('h3:contains("Previous Position") + div').text()
      }),
      ...(charname?.shinigami && {
        previousdivision: $('h3:contains("Previous Division") + div').text()
      }),
      ...(charname?.shinigami && {
        previouspartner: $('h3:contains("Previous Partner") + div').text()
      }),
      baseofoperations: $('h3:contains("Base of Operations") + div').text(),
      ...(charname?.shinigami && {
        shikai: $('h3:contains("Shikai") + div').text()
      }),
      ...(charname?.shinigami && {
        bankai: $('h3:contains("Bankai") + div').text()
      }),
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
