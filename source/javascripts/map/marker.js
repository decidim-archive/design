$(function () {
  'use strict';

  if($('#map').length) {

    var markersController = function() {};

    markersController.prototype = {
      map: undefined,
      addInfoWindow: function(marker, map, htmlContent) {
        var infoWindow = new google.maps.InfoWindow({
          content: htmlContent
        });
        marker.addListener('click', function() {
          infoWindow.open(map, marker);
        });
      }
    };
    var _inst = new markersController();
    window.markersController = _inst

  }
});
