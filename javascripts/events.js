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

const filterTime = (e) => {
  const target = e.target.id;
  if (target === 'morning-btn') {
    $('p:contains("Morning")').closest('div.panel').hide();
    $('#reset-btn').closest('div').removeClass('hide');

  } else if (target === 'afternoon-btn') {
    $('p:contains("Afternoon")').closest('div.panel').hide();
    $('#reset-btn').closest('div').removeClass('hide');

  } else if (target === 'evening-btn') {
    $('p:contains("Evening")').closest('div.panel').hide();
    $('#reset-btn').closest('div').removeClass('hide');

  } else if (target === 'after-dark-btn') {
    $('p:contains("After Dark")').closest('div.panel').hide();
    $('#reset-btn').closest('div').removeClass('hide');
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
};

module.exports = addEventListeners;
