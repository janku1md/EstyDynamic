(function() {
  'use strict';

  var beards = rawDataSorted.results;

  $(document).ready(function() {

    var $list = $('.beards-list');

    beards.forEach(function(beard) {
      var beardText = renderTemplate('beard-item', {
        image: beard.Images[0].url_170x135,
        title: beard.title,
        shop: beard.Shop.shop_name,
        price: beard.price,
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