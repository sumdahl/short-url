const staticRoute = require("express").Router();
const { URL } = require("../models/url");

staticRoute.get("/", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});
module.exports = { staticRoute };
