const returnChar = (selection: string) => {
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
      break;
    case 'Yhwach':
      charname = {
        first: 'Yhwach',
        last: ''
      };
      break;
    case 'Uryu' || 'Ishida':
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
    case 'Soul_King' || 'King':
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
    case 'Chad':
    case 'Yasutora':
    case 'Chado':
      charname = {
        first: 'Yasutora',
        last: 'Sado'
      };
      break;
    case 'Kisuke':
    case 'Urahara':
    case 'Kisuke_Urahara':
      charname = {
        first: 'Kisuke',
        last: 'Urahara'
      };
      break;
    case 'Orihime':
      charname = {
        first: 'Orihime',
        last: 'Inoue'
      };
      break;
    case 'Aizen':
      charname = {
        first: 'Sosuke',
        last: 'Aizen'
      };
      break;
    case 'Grimmjow':
      charname = {
        first: 'Grimmjow',
        last: 'Jaegerjaquez'
      };
      break;
    case 'Nnoitra':
      charname = {
        first: 'Nnoitra',
        last: 'Gilga'
      };
      break;
    case 'Szayel':
    case 'Szayelaporro':
      charname = {
        first: 'Szayelaporro',
        last: 'Granz'
      };
      break;
    case 'Baraggan_Louisenbairn':
    case 'Baraggan':
      charname = {
        first: 'Baraggan',
        last: 'Louisenbairn'
      };
      break;
    case 'Tier_Harribel':
    case 'Harribel':
      charname = {
        first: 'Tier',
        last: 'Harribel'
      };
      break;
    case 'Toshiro_Hitsugaya':
    case 'Hitsugaya':
      charname = {
        first: 'Toshiro',
        last: 'Hitsugaya'
      };
      break;
    case 'Nell':
    case 'Nelliel_Tu_Odelschwanck':
      charname = {
        first: 'Nelliel_Tu_',
        last: 'Odelschwanck'
      };
      break;
    case 'Renji_Abari':
    case 'Renji':
      charname = {
        first: 'Renji',
        last: 'Abari'
      };
      break;
    case 'Genryusai_Shigekuni_Yamamoto':
    case 'Genryusai':
    case 'Yamamoto':
      charname = {
        first: 'Genryusai_Shigekuni_',
        last: 'Yamamoto'
      };
      break;
    case 'Retsu_Unohana':
    case 'Unohana':
      charname = {
        first: 'Retsu',
        last: 'Unohana'
      };
      break;
    default:
      charname = {
        first: '',
        last: ''
      };
  }
  return charname;
};

export default returnChar;
