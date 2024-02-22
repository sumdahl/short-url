const shortid = require("shortid");
const { URL } = require("../models/url");

const handleGenerateNewShortURL = async (req, res) => {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "url is required" });
  }
  const uniqueUrlId = shortid();

  await URL.create({
    shortId: uniqueUrlId,
    redirectedURL: body.url,
    visitHistory: [],
  });
  return res.json({ id: uniqueUrlId });
};

const handleGetAnalytics = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({
    shortId,
  });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
};

const handleCreateEntry = async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectedURL);
}
module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleCreateEntry,
};
