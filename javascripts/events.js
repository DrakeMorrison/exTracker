const filterSearchBar = (e) => {
  console.error('filterSearchBar', e);
};

const filterTime = (e) => {
  console.error('filterTime', e);
};

const addEventListeners = () => {
  $('#searchBar').on('keydown', filterSearchBar);
  $('.time-btn').on('click', filterTime);
};

module.exports = addEventListeners;
