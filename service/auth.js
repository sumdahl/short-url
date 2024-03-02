const jwt = require("jsonwebtoken");
const secret = "Sumiran123@@$$";

const setUser = (user) => {
  // Return the signed token
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role
    },
    secret
  );
};

const getUser = (token) => {
  if (!token) return null;
  try {
  return jwt.verify(token, secret);
  } catch (err) {
  console.log(` JWT verification failed: ${err.message}`);
  return null;
  }
};

module.exports = {
  setUser,
  getUser,
};
