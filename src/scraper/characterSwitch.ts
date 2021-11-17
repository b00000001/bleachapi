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
  return charname;
};

export default returnChar;
