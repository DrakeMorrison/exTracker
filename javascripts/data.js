'use strict';
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

// add an exs property on each locale that is an array of names
const dataSmash = (arrData) => {
  return arrData[1].locations.map((locale) => {
    const exsProperty = [];
    arrData[0].exs.forEach((ex) => {
      if (ex.locations.includes(locale.locationId)) {
        exsProperty.push(ex.name);
      };
    });
    locale.exs = exsProperty;
    return locale;
  });
};

module.exports = {
  setLocations,
  setExs,
  getExs,
  getLocations,
  getExsById,
  dataSmash,
};
