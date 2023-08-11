import React from 'react';
import GoogleMapReact from 'google-map-react';

import * as S from './style';
import { useSelector } from 'react-redux';

const Map = () => {
  // AIzaSyC2TOGDeSPh8C8oNxo1i59g2C_hry8t_To

  const { bakeryInformationList } = useSelector(
    (state) => state.bakeryInformation
  );

  const AnyReactComponent = () => <S.StoreName> My bakery</S.StoreName>;

  const renderMarkers = (map, maps) => {
    new maps.Marker({
      position: {
        lat: bakeryInformationList.data.position.lat,
        lng: bakeryInformationList.data.position.lng,
      },
      map,
      title: 'My Bakery',
    });
  };

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    // console.log('API đã được tải thành công');
    // console.log('Đối tượng map:', map);
    // console.log('Đối tượng maps:', maps);
    renderMarkers(map, maps);
  };

  console.log(process.env);

  return (
    <>
      <S.MapBorder>
        <S.MapRender>
          <GoogleMapReact
            bootstrapURLKeys={{
              // key: process.env.GOOGLE_MAP_API_KEY,
              key: 'AIzaSyC2TOGDeSPh8C8oNxo1i59g2C_hry8t_To',
            }}
            defaultCenter={{
              lat: 16.080858,
              lng: 108.2132054,
            }}
            defaultZoom={18}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
            <AnyReactComponent
              lat={16.080858}
              lng={108.2132054}
              text="Cake Store map"
            />
            {/* <Marker/> */}
          </GoogleMapReact>
        </S.MapRender>
      </S.MapBorder>
    </>
  );
};

export default Map;
