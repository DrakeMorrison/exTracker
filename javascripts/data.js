const locations = require('./locations.js');
const ex = require('./ex.js');
const dom = require('./dom.js');

const locationsLoad = (data) => {
  dom.buildLocations(data.locations);
};

const exLoads = (data) => {
  const exObject = new Object();
  exObject.name = data.name;
  exObject.img = data.img;
  exObject.age = data.age;
  exObject.flaws = data.flaws.slice(0,8);
  dom.buildEx(exObject);
};

const ajaxFail = (error) => {
  console.error('Something is broken here: ', error);
};

const initializer = () => {
  locations(locationsLoad, ajaxFail);
  ex(exLoads, ajaxFail);
};

module.exports = initializer;
