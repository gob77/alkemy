import axios from "axios";

let API_URL = "https://www.superheroapi.com/api.php/10226476343726075/search/";

export const getCharacters = axios.create({
    baseURL: API_URL,
});
