import React, { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { MapProps } from 'react-kakao-maps-sdk';

interface ISearchPlace {
  searchPlace: string;
}

const Maps = ({ searchPlace }: ISearchPlace) => {
  const [state, setState] = useState<MapProps>({
    // 지도의 초기 위치
    center: { lat: 37.49676871972202, lng: 127.02474726969814 },
    // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
    isPanto: true,
  });

  useEffect(() => {
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(searchPlace, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = data[0];
        setState({
          center: {
            lat: newSearch.y as unknown as number,
            lng: newSearch.x as unknown as number,
          },
        });
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.');
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.');
        return;
      }
    });
  }, [state]);

  return (
    <Map
      // 지도를 표시할 Container
      center={state.center}
      isPanto={state.isPanto}
      style={{
        // 지도의 크기
        width: '100%',
        height: '100vh',
      }}
      level={3} // 지도의 확대 레벨
    ></Map>
  );
};

export default Maps;
