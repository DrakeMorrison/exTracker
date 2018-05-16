const locations = require('./locations.js');
const ex = require('./ex.js');
const dom = require('./dom.js');
const addEvents = require('./events.js');
const setLocations = require('./data.js').setLocations;
const setExs = require('./data.js').setExs;
const exView = require('./exview.js');

const locationsLoad = (data) => {
  setLocations(data.locations);
  dom.buildLocations(data.locations);
};

const exLoads = (data) => {
  setExs(data.exs);
  dom.buildExs(data.exs);
  $('.ex-panel').on('click', exView.exView);
};

const initializer = () => {
  ex().then((data) => {
    exLoads(data);
  });
  locations().then((data) => {
    locationsLoad(data);
  });
  addEvents();
};

module.exports = initializer;
