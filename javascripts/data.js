let exs = [];
let locations = [];

const setExs = (data) => {
  exs = data;
};

const setLocations = (data) => {
  locations = data;
};

const getExs = () => exs;

const getLocations = () => locations;

const getExsById = (testId) => {
  return exs.filter((ex) => ex.id === testId)[0];
};

module.exports = {
  setLocations,
  setExs,
  getExs,
  getLocations,
  getExsById,
};
