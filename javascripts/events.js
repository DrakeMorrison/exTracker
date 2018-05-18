'use strict';
const exView = require('./exview.js');

const filterSearchBar = (e) => {
  const input = e.target.value.toLowerCase();
  const searchElements = $('.search');
  searchElements.closest('div.panel').hide();
  searchElements.each((i, element) => {
    if (element.textContent.toLowerCase().includes(input)) {
      $(element).closest('div.panel').show();
      $('#reset-btn').closest('div').removeClass('hide');
    }
  });
};

const hideNotMatchingCards = (str) => {
  $(`p:contains(${str})`).closest('div.panel').siblings('.location-panel').hide();
  $(`p:contains(${str})`).closest('div.panel').show();
  $('#reset-btn').closest('div').removeClass('hide');
};

const filterTime = (e) => {
  const target = e.target.id;
  if (target === 'morning-btn') {
    hideNotMatchingCards('Morning');
  } else if (target === 'afternoon-btn') {
    hideNotMatchingCards('Afternoon');
  } else if (target === 'evening-btn') {
    hideNotMatchingCards('Evening');
  } else if (target === 'after-dark-btn') {
    hideNotMatchingCards('After Dark');

  }
};

const resetBtn = () => {
  $('div.panel').show();
  $('#reset-btn').closest('div').addClass('hide');
};

const addEventListeners = () => {
  $('#searchBar').on('keydown', filterSearchBar);
  $('.time-btn').on('click', filterTime);
  $('#reset-btn').on('click', resetBtn);
  $('#back-btn').on('click', exView.resetView);
};

module.exports = addEventListeners;
