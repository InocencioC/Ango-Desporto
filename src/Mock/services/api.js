var axios = require("axios").default;

 var options = {
   method: 'GET',
   url: 'https://livescore6.p.rapidapi.com/news/v2/list',
   headers: {
     'x-rapidapi-host': 'livescore6.p.rapidapi.com',
     'x-rapidapi-key': '23d3d1eb61msh875a290b8abb85cp124a3fjsned938d3f8f7e',
   }
 };

axios.request(options).then(function (response) {
  console.log(response.data);
 }).catch(function (error) {
   console.error(error);
 });
