var map;
var marker;
var center = {
  lat: 32.774763377486956, // 緯度
  lng: 130.6813807256887 // 経度
};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), { 
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 16, // 地図のズームを指定
    gestureHandling: 'none',
    mapTypeControl: false, //地図の種類切り替えを非表示
    streetViewControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP,
      background: 'red',
    }

  });

  marker = new google.maps.Marker({ // マーカーの追加
    position: center, // マーカーを立てる位置を指定
    map: map,// マーカーを立てる地図を指定
  });

  var mapStyle = [{
    "stylers": [{
      "saturation": -100
    }]
  }];
  var mapType = new google.maps.StyledMapType(mapStyle);
  map.mapTypes.set('GrayScaleMap', mapType);
  map.setMapTypeId('GrayScaleMap');
}


// $(function () {
//   $('.info').click(function () {
//     $('.info #map').css("pointer-events", "auto");
//   });
//   $('.info').mouseout(function () {
//     $('.info #map').css("pointer-events", "none");
//   });
// });
