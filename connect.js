const mongoose = require("mongoose");
const connectToMongoDB = async (url) => {
  try {
    await mongoose.connect(url);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

module.exports = {
  connectToMongoDB,
};
