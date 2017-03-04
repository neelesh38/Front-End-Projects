//locations data for places to be shown on map
var locations=[
      {
			  title: 'Jagannath Temple',
			 location:{
				  lat: 19.8047181,
          lng: 85.8179802,
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
        selected:false
		  },
      {
			  title: 'Chilika Lake',
			  location:{
          lat: 19.8450,
         lng: 85.4788,
       },
       show:true,
       selected:false
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

  var self=this;
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


  marker.addListener('click', function() {
    populateInfoWindow(this, largeInfowindow);
  });
  marker.addListener('mouseover',function(){
    this.setIcon(highlightedIcon);
  });

  marker.addListener('mouseout',function(){
    this.setIcon(defaultIcon);
  });

  self.Bounce = function(marker) {
          marker.setAnimation(google.maps.Animation.BOUNCE);
          setTimeout(function() {
              marker.setAnimation(null);
          }, 600);
      };
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
    infowindow.marker = marker;
    infowindow.setContent('<h5>' + marker.title + '</h5>');
    infowindow.open(map, marker);
    // Make sure the marker property is cleared if the infowindow is closed.
    infowindow.addListener('closeclick',function(){
      infowindow.setMarker = null;
    });
  }



}

self.filterText=ko.observable('');
self.applyFilter = function() {

    var currentFilter = self.filterText();
    infowindow.close();

    //filter the list as user seach
    if (currentFilter.length === 0) {
			self.setAllShow(true);
		} else {
			for (var i = 0; i < markers.length; i++) {
				if (markers[i].name.toLowerCase().indexOf(currentFilter.toLowerCase()) > -1) {
					markers[i].show(true);
					markers[i].setVisible(true);
				} else {
					markers[i].show(false);
					markers[i].setVisible(false);
				}
			}
    }
    infowindow.close();
  };


}
