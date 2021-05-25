import axios from 'axios';

const HEADER_VALUE =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41';

const urlBase5 =
  'https://prices.runescape.wiki/api/v1/osrs/timeseries?timestep=5m&id=';
const urlBaseCur = 'https://prices.runescape.wiki/api/v1/osrs/latest?id=';

const itemPriceHistory =
  'https://api.weirdgloop.org/exchange/history/osrs/all?id=';

const itemInfoBase = 'https://www.osrsbox.com/osrsbox-db/items-json/';

export const fetchRawData = async (itemID) => {
  let validUrl = `${itemPriceHistory}573`;

  if (itemID) {
    validUrl = `${itemPriceHistory}${itemID}`;
    // console.log("the cur ID is: " + itemID);
  }

  try {
    const { data } = await axios.get(validUrl);
    // console.log('Fetched data: ');
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCurData = async (itemID) => {
  let validUrl = `${urlBaseCur}444`;

  if (itemID) {
    validUrl = `${urlBaseCur}${itemID}`;
  }

  try {
    const { data } = await axios.get(validUrl);
    return data;
  } catch (error) {}
};

export const fetchItemInfo = async (itemID) => {
  let validUrl = `${itemInfoBase}444.json`;

  if (itemID) {
    validUrl = `${itemInfoBase}${itemID}.json`;
  }

  try {
    const { data } = await axios.get(validUrl);
    return data;
  } catch (error) {}
};
