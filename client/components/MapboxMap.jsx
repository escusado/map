import React from 'react';
import ReactMapboxGl, { Marker, RotationControl, ScaleControl, ZoomControl, Source, Layer, Feature } from 'react-mapbox-gl';
import config from '../../config.json';

const Map = ReactMapboxGl({
  accessToken: config['mapbox.api.key']
});

export default class MapboxMap extends React.Component {

  render() {
    return (
      <Map
        style='mapbox://styles/mapbox/satellite-v9'
        center={[-95.10458156746033,16.564658628571426]}
        zoom={[15]}
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}>
        <Marker
          coordinates={[-95.10458156746033,16.564658628571426]}
          anchor="bottom">
          <img src={'https://i.imgur.com/9rCpWsN.png'}/>
        </Marker>

          <RotationControl/>
          <ZoomControl/>
          <ScaleControl/>

      </Map>
    );
  }

}
