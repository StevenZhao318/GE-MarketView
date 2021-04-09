import axios from "axios";

const urlBase5 =
  "https://prices.runescape.wiki/api/v1/osrs/timeseries?timestep=5m&id=";
const urlBaseCur = "https://prices.runescape.wiki/api/v1/osrs/latest?id=";

export const fetchRawData = async (itemID) => {
  let validUrl = `${urlBase5}444`;

  if (itemID) {
    validUrl = `${urlBase5}${itemID}`;
    // console.log("the cur ID is: " + itemID);
  }

  try {
    const { data } = await axios.get(validUrl);
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
