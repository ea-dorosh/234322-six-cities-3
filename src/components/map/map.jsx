import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";


class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  createMap() {
    const {offers, activeCity, activeOffer} = this.props;

    const city = [activeCity.location.latitude, activeCity.location.longitude];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });

    const zoom = activeCity.location.zoom;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    this.leafletMap = map;

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.map((offer) => {

      leaflet
        .marker([offer.location.latitude, offer.location.longitude], {icon})
        .addTo(map);
    });

    if (activeOffer) {
      const iconActive = leaflet.icon({
        iconUrl: `img/pin-active.svg`,
        iconSize: [27, 39]
      });

      leaflet
        .marker([activeOffer.location.latitude, activeOffer.location.longitude], {icon: iconActive})
        .addTo(map);
    }
  }

  componentDidMount() {
    this.createMap();
  }

  componentDidUpdate() {
    if (this.leafletMap) {
      this.leafletMap.eachLayer(function (layer) {
        layer.remove();
      });
      this.leafletMap.remove();

      this.createMap();
    }
  }

  componentWillUnmount() {

    if (this.leafletMap) {
      this.leafletMap.eachLayer(function (layer) {
        layer.remove();
      });
      this.leafletMap.remove();
      this.leafletMap = null;
    }
  }

  render() {

    return (
      <div id="map" style={{height: `100%`}}/>
    );
  }
}


Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        city: PropTypes.shape({
          location: PropTypes.shape({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            zoom: PropTypes.number.isRequired
          }),
          name: PropTypes.string.isRequired,
        })
      })
  ).isRequired,
  activeOffer: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    })
  }),
  activeCity: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }),
    name: PropTypes.string.isRequired,
  }).isRequired,
};


export default Map;
