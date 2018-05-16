// const getEx = (successFn, errorFn) => {
//   $.get('/db/exs.json')
//     .done(successFn)
//     .fail(errorFn);
// };

const getExs = () => {
  return new Promise((resolve, reject) => {
    $.get('/db/exs.json')
      .done((data) => {
        resolve(data);
      })
      .fail((err) => {
        reject(`Oi got an error!`, err);
      });
  });
};

module.exports = getExs;
