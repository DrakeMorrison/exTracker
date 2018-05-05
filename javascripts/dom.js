const buildLocations = (array) => {
  let domString = '';
  $(array).each((i, locale) => {
    domString += `<div class="panel panel-info">`;
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

const buildEx = (ex) => {
  let domString = '';
  domString += `<div id='ex-panel' class="panel panel-danger">`;
  domString += `<div class="panel-heading">`;
  domString += `<h3 class="panel-title text-capitalize">${ex.name}</h3>`;
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

  $('#ex-div').html(domString);
  $('#ex-navbar-div').html(domString);
};

module.exports = {
  buildLocations,
  buildEx,
};
