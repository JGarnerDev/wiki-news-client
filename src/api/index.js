import axios from "axios";

const API_URL = process.env.REACT_APP_WIKI_NEWS_API_URL;

const DATE_LIST_SLUG = "/dates";
const NEWS_LATEST_SLUG = "/news/latest";

export const getDatesAvailableList = async () => {
  const datesList = await axios
    .get(API_URL + DATE_LIST_SLUG)
    .then((res) => res.data);
  return datesList;
};

export const getNewsLatest = async () => {
  const newsList = await axios
    .get(API_URL + NEWS_LATEST_SLUG)
    .then((res) => res.data);
  return newsList;
};

export const getNewsByDate = async (date) => {
  const newsList = await axios
    .get(API_URL + `/news/${date}`)
    .then((res) => res.data);
  return newsList;
};
