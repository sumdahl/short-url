const router = require("express").Router();
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleCreateEntry,
} = require("../controllers/url");

router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", handleCreateEntry)
router.get("/analytics/:shortId", handleGetAnalytics);
module.exports = { router };
