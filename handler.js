"use strict";

module.exports.run = () => {
  const axios = require("axios");

  axios
    .post("https://api.getshifter.io/v1/login", {
      username: process.env.USERNAME,
      password: `${process.env.PASSWORD}`
    })
    .then(res => {
      console.log(res.data.AccessToken);
      axios.defaults.headers.common.Authorization = res.data.AccessToken;
      axios.post(
        `https://api.getshifter.io/v1/projects/${process.env.SITE_ID}/artifacts`
      );
    })
    .catch(error => {
      console.error(error);
    });
};
