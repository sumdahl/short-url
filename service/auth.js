const handleSessionToUserMap = new Map();
const setUser = (id, user) => {
  handleSessionToUserMap.set(id, user);
};
const getUser = (id) => {
  return handleSessionToUserMap.get(id);
};

module.exports = {
  setUser,
  getUser,
};
