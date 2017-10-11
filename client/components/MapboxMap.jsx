import React from 'react';
import ReactMapboxGl, { Source, Layer, Feature } from 'react-mapbox-gl';

const RASTER_SOURCE_OPTIONS = {
  'type': 'raster',
  'tiles': [
    '',
  ],
  'tileSize': 512
};

const Map = ReactMapboxGl({
  accessToken: ''
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
          <Layer
            type='symbol'
            id='marker'
            layout={{ 'icon-image': 'marker-15' }}>
            <Feature coordinates={[-95.10458156746033,16.564658628571426]}/>
          </Layer>

          <Source id='source_id' tileJsonSource={RASTER_SOURCE_OPTIONS} />
          <Layer type='raster' id='layer_id' sourceId='source_id' />


      </Map>
    );
  }

}
