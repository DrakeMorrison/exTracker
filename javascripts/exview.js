const data = require('./data.js');
const dom = require('./dom.js');

const exView = (e) => {
  $(e.currentTarget).siblings().each((i, ex) => {
    $(ex).hide();
  });

  const exCardId = e.target.closest('.ex-panel').id;
  const exObject = data.getExsById(exCardId);
  const matchingLocales = getMatchingLocations(exObject.locations);
  dom.buildLocations(matchingLocales);

  showBackBtn();
};

const getMatchingLocations = (array) => {
  const locations = data.getLocations();
  let matchingLocations = [];
  matchingLocations = locations.filter((locale) => {
    return array.includes(locale.locationId);
  });
  return matchingLocations;
};

const showBackBtn = () => {
  $('nav').hide();
  $('#back-btn').show();
  $('body').css('padding-top', 0);
};

const hideBackBtn = () => {
  $('nav').show();
  $('#back-btn').hide();
  $('body').css('padding-top', '60px');
};

const resetView = () => {
  const locations = data.getLocations();
  const exs = data.getExs();
  dom.buildExs(exs);
  dom.buildLocations(locations);
  hideBackBtn();
  $('.ex-panel').on('click', exView);
};

module.exports = {
  exView,
  resetView,
};
