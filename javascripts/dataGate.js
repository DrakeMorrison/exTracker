'use strict';
const dom = require('./dom.js');
const addEvents = require('./events.js');
const exView = require('./exview.js');
const dataFile = require('./data.js');
const {getKeys, getData,} = require('./firebaseApi.js');

const locationsLoad = (data) => {
  dom.buildLocations(data);
};

const exLoads = (data) => {
  dom.buildExs(data);
  $('.ex-panel').on('click', exView.exView);
};

const loadData = () => {
  return Promise.all([getData('exs'), getData('locations'),]);
};

const initializer = () => {
  getKeys().then(() => {
    loadData().then((data) => {
      exLoads(data[0]);
      const betterLocations = dataFile.dataSmash(data);
      locationsLoad(betterLocations);
    }).catch(console.error.bind(console));
  }).catch(console.error.bind(console));

  addEvents();
};

module.exports = initializer;
