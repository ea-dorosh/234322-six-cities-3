import React, {PureComponent} from "react";

import PropTypes from "prop-types";


class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    // const {offers} = this.props;
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom: zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    return (
      <div id="map"/>
    );
  }
}

// Map.propTypes = {
//   offers: PropTypes.array.isRequired,
//   advertsCount: PropTypes.number.isRequired,
// };


export default Map;
