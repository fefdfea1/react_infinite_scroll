import axios from "axios";
import { API_KEY } from "../APIKEY";

export const getData = async (category = "business", page = 1) => {
  const data = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=de&page=${page}&pageSize=5&category=${category}&apiKey=${API_KEY}`
  );
  return data;
};
