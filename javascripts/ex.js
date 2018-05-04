const getEx = (successFn, errorFn) => {
  $.get('/db/ex.json')
    .done(successFn)
    .fail(errorFn);
};

module.exports = getEx;
