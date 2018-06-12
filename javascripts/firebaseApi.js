'use strict';

let apiKey = '';

function firebaseKey () {
  return new Promise(function (resolve, reject) {
    $.get('/db/apiKeys.json')
      .done(function (data) {
        resolve(data.firebase);
      })
      .fail(function (error) {
        reject('Error', error);
      });
  });
}

function getKeys () {
  firebaseKey().then(function (results) {
    apiKey = results;
    firebase.initializeApp(results);
  }).catch(console.error.bind(console));
}

function getData (collection) {
  const collectionWithKeys = [];
  return new Promise (function (resolve, reject) {
    $.ajax({
      method: 'GET',
      url: `${apiKey.databaseURL}/${collection}.json`,
    })
      .done(function (data) {
        if (data !== null) {
          Object.keys(data).forEach(function (key) {
            data[key].id = key;
            collectionWithKeys.push(data[key]);
          });
        }
        resolve(collectionWithKeys);
      })
      .fail(function (error) {
        reject(error);
      });
  });
}

module.exports = {
  getKeys,
  getData,
};
