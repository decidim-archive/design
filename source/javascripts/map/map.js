$(function () {
  'use strict';

  if($('#google-map').length) {
    var markersController = window.markersController;

    var mapsController = function() {};
    mapsController.prototype = {
      init: function() {
        _inst.map = new google.maps.Map($('#google-map')[0], {
         //barcelona coordinates
          center: { lat: 41.3851, lng: 2.1734 },
          zoom: 12,
          scrollwheel: false
        });
      },
      latLng: function(lat, lng) {
        return { lat: lat, lng: lng }
      },
      addMarker: function(lat, lng, infoWindowContent) {
        var marker = new google.maps.Marker({
          position: _inst.latLng(lat, lng),
          icon: decidimMarker,
          map: _inst.map
        });
        if(infoWindowContent) {
          markersController.addInfoWindow(marker, _inst.map, infoWindowContent );
        }
        
      }

    };

    function markerTemplate(meetingTitle, meetingDesc, meetingDay, meetingMonth, meetingTime, meetingPlace, meetingAddress, meetingCity, meetingLink){ 
      var markerTemplate = '<div class="map-info__content">'+
      '<h3>'+meetingTitle+'</h3>'+
      '<div id="bodyContent">'+
      '<p>'+meetingDesc+'</p>'+
      '<div class="map__date-adress">'+
      '<div class="card__datetime">'+
      '<div class="card__datetime__date">'+
      meetingDay+'<span class="card__datetime__month">'+
      meetingMonth+'</span>'+
      '</div>'+
      '<div class="card__datetime__time">'+
      meetingTime+
      '</div>'+
      '</div>'+
      '<div class="address">'+
      '<div class="address__icon">'+
      '<svg width="40" height="70">'+
      '<use xlink:href="#shape-icon-meetings" />'+
      '</svg>'+
      '</div>'+
      '<div class="address__details">'+
      '<strong>'+meetingPlace+'</strong><br>'+
      '<span>'+meetingAddress+'</span><br>'+
      '<span>'+meetingCity+'</span>'+
      '</div>'+
      '</div>'+
      '</div>'+
      '<div class="map-info__button">'+
      '<a href="'+meetingLink+'" class="button">Ver cita</a>'+
      '</div>'+
      '</div>'+
      '</div>';
      return markerTemplate;
    }
    
    var decidimMarker = {
    path: 'M12.47,6.31a5.79,5.79,0,1,1-5.81,5.8,5.8,5.8,0,0,1,5.81-5.8m0-6.18A12.1,12.1,0,0,1,24.46,11a11.89,11.89,0,0,1-1.57,7.23Q18.34,26.14,13.78,34a1.38,1.38,0,0,1-2.54,0Q6.65,26.09,2.07,18.15A12,12,0,0,1,10.18.41C10.94,0.26,11.72.22,12.49,0.13Z',
    fillColor: '#DC0030',
    fillOpacity: 1,
    strokeColor: 'rgba(255,255,255,.8)',
    scale: 1
    };
    
    var _inst = new mapsController();
    _inst.init();
    _inst.addMarker(41.3851, 2.1734, markerTemplate(
      'Consell de les dones de Barcelona',
      'Recollir, en sessió oberta al carrer, propostes per millorar la convivència i l´ús de l´espai públic al barri',
      '20',
      'Ago',
      '16:00 - 18:00',
      'Seu del Districte Sants-Montjuïc',
      'Carrer de la Creu Coberta, 104',
      'Barcelona',
      '/meeting-view'
    ));
    _inst.addMarker(41.3400, 2.0900, markerTemplate(
      'Trobada amb el regidor',
      'Recollir, en sessió oberta al carrer, propostes per millorar la convivència i l´ús de l´espai públic al barri',
      '20',
      'Ago',
      '16:00 - 18:00',
      'Seu del Districte Sants-Montjuïc',
      'Carrer de la Creu Coberta, 104',
      'Barcelona',
      '/meeting-view'
    ));
    _inst.addMarker(41.4300, 2.1900, markerTemplate(
      'Consell de barri',
      'Recollir, en sessió oberta al carrer, propostes per millorar la convivència i l´ús de l´espai públic al barri',
      '20',
      'Ago',
      '16:00 - 18:00',
      'Seu del Districte Sants-Montjuïc',
      'Carrer de la Creu Coberta, 104',
      'Barcelona',
      '/meeting-view'
    ));
  }
});
