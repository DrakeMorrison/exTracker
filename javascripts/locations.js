const getLocations = (successFn, errorFn) => {
  $.get('/db/locations.json')
    .done(successFn)
    .fail(errorFn);
};

module.exports = getLocations;
