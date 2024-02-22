const express = require("express");
const { connectToMongoDB } = require("./connect");
// const { URL } = require("./models/url");
const { router } = require("./routes/url");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

connectToMongoDB("mongodb://localhost:27017/url-shortner")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(`Error: ${err}`));

app.use(express.json());
app.use("/url", router);

// app.get("/:shortId", async (req, res) => {
//   const shortId = req.params.shortId;
//   const entry = await URL.findOneAndUpdate(
//     {
//       shortId,
//     },
//     {
//       $push: {
//         visitHistory: {
//           timestamp: Date.now(),
//         },
//       },
//     }
//   );
//   res.redirect(entry.redirectedURL);
// });

app.listen(port, () => {
  console.log(`Server is listening at port : ${port}`);
});
