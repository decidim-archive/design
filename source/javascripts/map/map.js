$(function () {
  'use strict';

  if($('#map').length) {
    var markersController = window.markersController;

    var mapsController = function() {};
    mapsController.prototype = {
      init: function() {
        _inst.map = new google.maps.Map($('#map')[0], {
         //barcelona coordinates
          center: { lat: 41.3851, lng: 2.1734 },
          zoom: 12
        });
      },
      latLng: function(lat, lng) {
        return { lat: lat, lng: lng }
      },
      addMarker: function(lat, lng, infoWindowContent) {
        var marker = new google.maps.Marker({
          position: _inst.latLng(lat, lng),
          map: _inst.map
        });
        if(infoWindowContent) {
          markersController.addInfoWindow(marker, _inst.map, infoWindowContent );
        }
      }

    };

    var _inst = new mapsController();
    _inst.init();
    _inst.addMarker(41.3851, 2.1734, 'Some information goes here');
    _inst.addMarker(41.3400, 2.0900);
    _inst.addMarker(41.4300, 2.1900);
  }
});
