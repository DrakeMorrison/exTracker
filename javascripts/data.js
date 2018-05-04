const locations = require('./locations.js');
const ex = require('./ex.js');
const dom = require('./dom.js');

const locationsLoad = (data) => {
  dom.buildLocations(data.locations);
};

const exLoads = (data) => {
  dom.buildEx(data);
};

const ajaxFail = (error) => {
  console.error('Something is broken here: ', error);
};

const initializer = () => {
  locations(locationsLoad, ajaxFail);
  ex(exLoads, ajaxFail);
};

module.exports = initializer;
