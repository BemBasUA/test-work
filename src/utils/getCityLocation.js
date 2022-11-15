import axios from "axios";

const API_KEY = "bdc_b16c8db662fe43db946bd57b59552eae";

export async function getCityLocation(latitude, longitude) {
  return await axios
    .get("https://api.bigdatacloud.net/data/reverse-geocode", {
      params: {
        key: API_KEY,
        latitude,
        longitude,
      },
    })
    .then((location) => location.data.locality);
}
