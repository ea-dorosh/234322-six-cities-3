import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

const AMSTERDAM = [52.38333, 4.9];

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers, activeOffer} = this.props;
    const city = AMSTERDAM;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });

    const zoom = 12;
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
        .marker([offer.coords.x, offer.coords.y], {icon})
        .addTo(map);
    });

    if (activeOffer) {
      const iconActive = leaflet.icon({
        iconUrl: `img/pin-active.svg`,
        iconSize: [27, 39]
      });

      leaflet
        .marker([activeOffer.coords.x, activeOffer.coords.y], {icon: iconActive})
        .addTo(map);
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
        coords: PropTypes.shape({
          x: PropTypes.number.isRequired,
          y: PropTypes.number.isRequired
        })
      })
  ).isRequired,
  activeOffer: PropTypes.shape({
    coords: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    })
  }),
};


export default Map;
