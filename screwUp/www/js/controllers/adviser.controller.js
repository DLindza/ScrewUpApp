(function () {
    'use strict';

    angular
        .module('screwUpApp')
        .controller('AdviserCtrl', AdviserCtrl);

    AdviserCtrl.$inject = ['$state', '$cordovaGeolocation'];

    function AdviserCtrl($state, $cordovaGeolocation) {
            var adviserVM = this;

            var options = { timeout: 10000, enableHighAccuracy: true };

            $cordovaGeolocation.getCurrentPosition(options).then(function (position) {

                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                var mapOptions = {
                    center: latLng,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                adviserVM.map = new google.maps.Map(document.getElementById("adviserVM.map"), mapOptions);

                //wait until the map is loaded
                google.maps.event.addListenerOnce(adviserVM.map, 'idle', function () {

                    var marker = new google.maps.Marker({
                        map: adviserVM.map,
                        animation: google.maps.Animation.DROP,
                        position: latLng
                    });

                });

                google.maps.event.addListenerOnce(adviserVM.map, 'idle', function () {

                    var marker = new google.maps.Marker({
                        map: adviserVM.map,
                        animation: google.maps.Animation.DROP,
                        position: latLng
                    });

                    var infoWindow = new google.maps.InfoWindow({
                        content: "Here I am! Number One Financial Advisor - 1105 N. Market Street Wilmington, DE  - Call me at 1-800-SCREWUP"
                    });

                    google.maps.event.addListener(marker, 'click', function () {
                        infoWindow.open(adviserVM.map, marker);
                    });

                });

            }, function (error) {
                console.log("Could not get location");
            });
        }
})();


