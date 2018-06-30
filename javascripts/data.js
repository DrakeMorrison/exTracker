'use strict';

// add an exs property on each locale that is an array of names
const dataSmash = (arrData) => {
  return arrData[1].map((locale) => {
    const exsProperty = [];
    arrData[0].forEach((ex) => {
      if (ex.locations.includes(locale.locationId)) {
        exsProperty.push(ex.name);
      };
    });
    locale.exs = exsProperty;
    return locale;
  });
};

module.exports = {
  dataSmash,
};
