const Toronto = { lat: 43.780918, lng: -79.421371 }
const LocationData = [
  {
    location: 'Toronto',
    lat: 43.780918,
    lng: -79.421371,
    src: "/imgs/Toronto.jpg"
  },
  {
    location: 'Banff National Park',
    lat: 51.180202,
    lng: -115.565704,
    src: "/imgs/Banff.jpg"
  },
  {
    location: 'Yosemite National Park',
    lat: 37.865101,
    lng: -119.596848,
    src: "/imgs/Yosemite.jpg"
  },
  {
    location: 'Yellowstone National Park',
    lat: 44.423691,
    lng: -110.588516,
    src: "/imgs/Yellowstone.jpg"
  },
];
let infoboxTemplate = '<div class="h-20 w-32 bg-white font-Inter text-gray-700 text-sm rounded-xl text-center flex justify-between items-center mb-2 shadow-lg z-50"><div class="title">{title}</div>{description}</div>';

function getMap () {
  let map = new Microsoft.Maps.Map('#mymap', {
    credentials: '',
    center: new Microsoft.Maps.Location(Toronto.lat, Toronto.lng),
    mapTypeId: Microsoft.Maps.MapTypeId.road,
    zoom: 5,
  });

  let center = map.getCenter();

  //create pushpins for locations
  for (let i = 0; i < LocationData.length; i++) {
    let pin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(LocationData[i].lat, LocationData[i].lng), {
      color: '#22C55E',  
      title: LocationData[i].location   
    })
    map.entities.push(pin)

    //infobox metadata
    pin.metadata = {
      title: LocationData[i].location,
      description: `<img class="w-20 h-20 rounded-r-xl"src=${LocationData[i].src} alt="locations"/>`
    };
    Microsoft.Maps.Events.addHandler(pin, 'mouseover', pushpinEnter);
    Microsoft.Maps.Events.addHandler(pin, 'mouseout', pushpinExit);

  }
  //Create infobox
  let infobox = new Microsoft.Maps.Infobox(center, {    
    visible: false
  }); 
  //Assign the infobox to a map instance.
  infobox.setMap(map);

  //hover over pushpin
  function pushpinEnter(e) {
    //Make sure the infobox has metadata to display.
    if (e.target.metadata) {
      //Set the infobox options with the metadata of the pushpin.
      infobox.setOptions({
        location: e.target.getLocation(),
        htmlContent: infoboxTemplate.replace('{title}', e.target.metadata.title).replace('{description}', e.target.metadata.description),
        visible: true
      });
    }
  }
  //leave pushpin
  function pushpinExit(e) {
    infobox.setOptions({
      visible: false
    })
  }
}
