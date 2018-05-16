// const getLocations = (successFn, errorFn) => {
//   $.get('/db/locations.json')
//     .done(successFn)
//     .fail(errorFn);
// };

const getLocations = () => {
  return new Promise((resolve, reject) => {
    $.get('/db/locations.json')
      .done((data) => {
        resolve(data);
      })
      .fail((err) => {
        reject(`Oi got an error!`, err);
      });
  });
};

module.exports = getLocations;
