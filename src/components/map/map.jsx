import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";


class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.map = null;

    this.icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [27, 39]
    });

    this.iconActive = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [27, 39]
    });

    this._highlightMarker = this._highlightMarker.bind(this);
  }

  _highlightMarker(offer) {

    leaflet
      .marker([offer.location.latitude, offer.location.longitude], {icon: this.iconActive})
      .addTo(this.map);
  }


  createMap() {
    // eslint-disable-next-line react/prop-types
    const {offers, activeCity, activeOffer} = this.props;

    const city = [activeCity.location.latitude, activeCity.location.longitude];


    const zoom = activeCity.location.zoom;

    this.map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(city, zoom);

    this.leafletMap = this.map;

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    offers.map((offer) => {

      leaflet
        .marker([offer.location.latitude, offer.location.longitude], {icon: this.icon})
        .addTo(this.map);
    });

    if (activeOffer) {
      leaflet
        .marker([activeOffer.location.latitude, activeOffer.location.longitude], {icon: this.iconActive})
        .addTo(this.map);
    }
  }

  componentDidMount() {
    this.createMap();
  }

  componentDidUpdate() {
    // eslint-disable-next-line react/prop-types
    const {marker} = this.props;
    if (this.leafletMap) {
      this.leafletMap.eachLayer(function (layer) {
        layer.remove();
      });
      this.leafletMap.remove();

      this.createMap();
      if (marker) {
        this._highlightMarker(marker);
      }
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
  ),
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
    name: PropTypes.string,
  }).isRequired,
};


export default Map;
