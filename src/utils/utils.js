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

export const fetchReviewByID = (ID) => {
   
    return ncGamesApi
      .get(`/reviews/${ID}`)
      .then(({ data }) => {
      return(data);
      })
      .catch(err => {
      return(err);
    })
  }

  export const fetchCurrentComments = (ID) => {

    return ncGamesApi
    .get(`/reviews/${ID}/comments`)
    .then(({data}) => {
        return (data)
    })
    .catch(err => {
        return(err);
      })
  }

  export const incrementVote = (num, ID) => {

    return ncGamesApi
    .patch(`/reviews/${ID}`, { inc_votes : num })
    .then(({data} )=> {
        return data.review.votes
    })

  }