const express = require("express");
const path = require("path");
const { connectToMongoDB } = require("./connect");
const { URL } = require("./models/url");
const { router } = require("./routes/url");
const { staticRoute } = require("./routes/staticRouter");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

connectToMongoDB("mongodb://localhost:27017/url-shortner")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(`Error: ${err}`));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", router);
app.use("/", staticRoute);

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
