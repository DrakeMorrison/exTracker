'use strict';
const buildLocations = (array) => {
  let domString = '';
  $(array).each((i, locale) => {
    domString += `<div id='${locale.locationId}' class="panel panel-info location-panel">`;
    domString += `<div class="panel-heading">`;
    domString += `<h3 class="panel-title text-capitalize search">${locale.name}</h3>`;
    domString += `</div>`;
    domString +=   `<div class="panel-body">`;
    domString +=     `<img class='img-responsive img-rounded'src='${locale.img}' alt='...'>`;
    domString +=     `<h6 class='text-capitalize search'>${locale.address}</h6>`;
    domString +=     `<p>Arrival Time: <strong class='text-capitalize'>${locale.time}</strong></p>`;
    domString +=   `</div>`;
    domString += `</div>`;
  });

  $('#locations-div').html(domString);
};

const buildExs = (exs) => {
  let domString = '';
  exs.forEach((ex) => {
    domString += `<div id='${ex.id}' class="panel panel-danger ex-panel">`;
    domString += `<div class="panel-heading">`;
    domString += `<h3 class="panel-title text-capitalize search">${ex.name}</h3>`;
    domString += `</div>`;
    domString += `<div class="panel-body">`;
    domString += `<img class='img-responsive'src='${ex.img}' alt='...'>`;
    domString += `<h1>${ex.age} Years Old</h1>`;
    domString += `</div>`;
    domString += `<ul class='list-group'>`;
    ex.flaws.forEach(flaw => {
      domString += `<li class='list-group-item text-capitalize'>${flaw}</li>`;
    });
    domString += `</ul>`;
    domString += `</div>`;
  });

  $('#ex-div').html(domString);
  $('#ex-navbar-div').html(domString);
};

module.exports = {
  buildLocations,
  buildExs,
};
