import axios from "axios";


const ncGamesApi = axios.create({
  baseURL: "https://nc-games-7q91.onrender.com/api",
});

export const fetchAllReviews = () => {
  return ncGamesApi
    .get(`/reviews`)
    .then(({ data }) => {
      return data;
    })
    .catch(err => {
        console.log(err)
    });
};
