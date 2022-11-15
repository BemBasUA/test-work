import axios from "axios";

const API_KEY = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

axios.defaults.baseURL =
  "https://api.json-generator.com/templates/ZM1r0eic3XEy/data";

export async function getJobs() {
  return await axios
    .get(axios.defaults.baseURL, {
      params: {
        access_token: API_KEY,
      },
    })
    .then((jobs) => jobs.data);
}
