"use strict";

module.exports.run = () => {

  const https = require("https");

  const options = {
    hostname: "api.getshifter.io",
    port: 443,
    path: "/v1/projects/SITE-ID/artifacts",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "AUTH-TOKEN"
    }
  };

  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", d => {
      process.stdout.write(d);
    });
  });

  req.on("error", error => {
    console.error(error);
  });

  req.write(data);
  req.end();
};
