import axios from "axios";


const ncGamesApi = axios.create({
  baseURL: "https://nc-games-7q91.onrender.com/api",
});

export const fetchReviews = () => {
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

  export const fetchReviewsByCategory = (category) => {
    return ncGamesApi
    .get(`/reviews?category=${category}`)
    .then(({ data }) => {
      return data;
    })
    .catch(err => {
        console.log(err)
    });
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

  export const postNewComment = (comment, ID) => {
   
    const url=`/reviews/${Number(ID)}/comments`
    
    
    return ncGamesApi
    .post(`/reviews/${Number(ID)}/comments`, comment)
    .then(({data})=>{
      return (data)
    })

   
  }