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
      '<div class="address card__extra">'+
      '<div class="address__icon">'+
      '<svg width="40" height="70">'+
      '<use xlink:href="/images/icons.svg#icon-meetings" />'+
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
      '<a href="'+meetingLink+'" class="button button--sc">Ver encuentro</a>'+
      '</div>'+
      '</div>'+
      '</div>';
      return markerTemplate;
    }
    
    var decidimMarker = {
    path: 'M25,13.46h0A7.55,7.55,0,0,0,17.5,7h0c-0.14,0-1.09.11-1.41,0.17a7.4,7.4,0,0,0-5.39,4.25,7.79,7.79,0,0,0-.45,1.31c0,0.14-.21,1-0.23,1.29,0,0.06,0,.56,0,0.76a7.41,7.41,0,0,0,1,3.54l3.74,6.48,1.77,3.06a1.23,1.23,0,0,0,1,.67h0a1.23,1.23,0,0,0,1.05-.68l1.53-2.66L24,18.41a7.47,7.47,0,0,0,1-3.61C25,14.63,25,13.6,25,13.46ZM14.89,12a3.62,3.62,0,1,1,2.57,6.17h0a3.62,3.62,0,0,1-3.62-3.61A3.59,3.59,0,0,1,14.89,12Z',
    fillColor: '#C24B29',
    fillOpacity: 1,
    strokeColor: 'transparent',
    scale: 1.6
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
