(function() {
  'use strict';

  var searchBoxItems = rawDataSorted.results;

  $(document).ready(function() {

    var $list = $('.items-list');

    searchBoxItems.forEach(function(searchItems) {
      var beardText = renderTemplate('searchItems', {
        image: searchItems.Images[0].url_170x135,
        title: searchItems.title,
        shop: searchItems.Shop.shop_name,
        price: searchItems.price
      });
      $list.append(beardText);
    });

  });


  function renderTemplate(name, data) {
    var $template = $('[data-template-name=' + name + ']').text();
    $.each(data, function(prop, value) {
      $template = $template.replace('<% ' + prop + ' %>', value);
    });
    return $template;
  }

})();



$('form').on('submit', function(event) {
  event.preventDefault();
  var itemRequest = ($(this).find('input').val());
  $.ajax({
    url: "https://api.etsy.com/v2/listings/active.js?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=" + itemRequest + "&includes=Images,Shop",
    type: "GET",
    dataType: 'jsonp'
  })
  .done(function(data) {
    // console.log(data);
  });
});
