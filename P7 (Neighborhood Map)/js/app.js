var locations=[
      {
			  title: 'Jagannath Temple',
			 location:{
				  lat: 19.8047181,
          lng: 85.8179802,
          id:'',
        },
        show:true,
        selected:false,

		  },
		  {
			  title: 'Konark Sun Temple',
			  location:{
          lat: 19.8875953,
          lng: 86.0945364,
        },
        show:true,
        selected:false,
        id:'4cbdd05b3481199c2ecc6d3f'
		  },
      {
			  title: 'Chilika Lake',
			  location:{
          lat: 19.8450,
         lng: 85.4788,
       },
       show:true,
       selected:false,
       id:''
		  },
		  {
			  title: 'Puri Beach',
			  location:{
          lat: 19.7947,
          lng: 85.8253,
        },
        show:true,
        selected:false,
		    id:'4cfb649ac671721e4959c318'
		  }
];


var markers=[];
var viewModel=function(){
  var largeInfowindow = new google.maps.InfoWindow();
for(var i=0;i<locations.length;i++)
{
  var position=locations[i].location;
  var title=locations[i].title;
  var defaultIcon = makeMarkerIcon('0091ff');
  var highlightedIcon = makeMarkerIcon('FFFF24');
  var marker=new google.maps.Marker({
    map:map,
    position:position,
    title:title,
    animation:google.maps.Animation.DROP,
    icon:defaultIcon,
	  show:ko.observable(locations[i].show),
	  selected:ko.observable(locations[i].selected),
	  venue:locations[i].id
  })
  markers.push(marker);


  //rating of the place
  //color change on click
  marker.addListener('click', function() {
    populateInfoWindow(this, largeInfowindow);
  });
  marker.addListener('mouseover',function(){
    this.setIcon(highlightedIcon);
  });

  marker.addListener('mouseout',function(){
    this.setIcon(defaultIcon);
  });
}
function makeMarkerIcon(markerColor) {
  var markerImage = new google.maps.MarkerImage(
    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
    '|40|_|%E2%80%A2',
    new google.maps.Size(21, 34),
    new google.maps.Point(0, 0),
    new google.maps.Point(10, 34),
    new google.maps.Size(21,34));
  return markerImage;
}
function populateInfoWindow(marker, infowindow) {
  // Check to make sure the infowindow is not already opened on this marker.
  if (infowindow.marker != marker) {
    // Clear the infowindow content to give the streetview time to load.
    infowindow.setContent('');
    infowindow.marker = marker;
    // Make sure the marker property is cleared if the infowindow is closed.
    infowindow.addListener('closeclick', function() {
      infowindow.marker = null;
    });
    var streetViewService = new google.maps.StreetViewService();
    var radius = 50;
    // In case the status is OK, which means the pano was found, compute the
    // position of the streetview image, then calculate the heading, then get a
    // panorama from that and set the options
    function getStreetView(data, status) {
      if (status == google.maps.StreetViewStatus.OK) {
        var nearStreetViewLocation = data.location.latLng;
        var heading = google.maps.geometry.spherical.computeHeading(
          nearStreetViewLocation, marker.position);
          infowindow.setContent('<div>' + marker.title + '</div><div id="pano"></div>');
          var panoramaOptions = {
            position: nearStreetViewLocation,
            pov: {
              heading: heading,
              pitch: 30
            }
          };
        var panorama = new google.maps.StreetViewPanorama(
          document.getElementById('pano'), panoramaOptions);
      } else {
        infowindow.setContent('<div>' + marker.title + '</div>' +
          '<div>No Street View Found</div>');
      }
    }
    // Use streetview service to get the closest streetview image within
    // 50 meters of the markers position
    streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
    // Open the infowindow on the correct marker.
    infowindow.open(map, marker);
  }
}
/*this.selectAll=function(marker){
  this.selected=true;
  populateInfoWindow(marker,largeInfowindow);
};*/
this.selectAll=function(marker){
  marker.setAnimation(google.maps.Animation.BOUNCE);
  marker.setIcon(highlightedIcon);
  setTimeout(function() {
            marker.setAnimation(null);
            marker.setIcon(defaultIcon)
        }, 700);
  populateInfoWindow(marker,largeInfowindow);
};

}
