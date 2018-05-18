'use strict';
const locations = require('./locations.js');
const ex = require('./ex.js');
const dom = require('./dom.js');
const addEvents = require('./events.js');
const exView = require('./exview.js');
const dataFile = require('./data.js');

const locationsLoad = (data) => {
  dataFile.setLocations(data);
  dom.buildLocations(data);
};

const exLoads = (data) => {
  dataFile.setExs(data.exs);
  dom.buildExs(data.exs);
  $('.ex-panel').on('click', exView.exView);
};

const loadData = () => {
  return Promise.all([ex(), locations(),]);
};

const initializer = () => {
  loadData().then((data) => {
    exLoads(data[0]);
    const betterLocations = dataFile.dataSmash(data);
    locationsLoad(betterLocations);
  }).catch(console.error.bind(console));

  addEvents();
};

module.exports = initializer;
