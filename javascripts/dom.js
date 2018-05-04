const buildLocations = (array) => {
  // const domString = '';
  console.error('buildLocations', array);
};

const buildEx = (ex) => {
  let domString = '';
  domString += `<div id='ex-panel' class="panel panel-default">`;
  domString += `<div class="panel-heading">`;
  domString += `<h3 class="panel-title">${ex.name}</h3>`;
  domString += `</div>`;
  domString += `<div class="panel-body">`;
  domString += `<img class='img-responsive'src='${ex.img}' alt='...'>`;
  domString += `<h1>${ex.age} Years Old</h1>`;
  domString += `</div>`;
  domString += `<ul class='list-group'>`;
  ex.flaws.forEach(flaw => {
    domString += `<li class='list-group-item'>${flaw}</li>`;
  });
  domString += `</ul>`;
  domString += `</div>`;

  $('#ex-div').html(domString);
};

module.exports = {
  buildLocations,
  buildEx,
};
