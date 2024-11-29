import React, { useEffect, useState } from 'react';

function Map() {
  const [error, setError] = useState(null); // 에러 상태를 관리

  useEffect(() => {
    // 카카오맵 API 스크립트를 동적으로 추가
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=748d20c2d0b857da185e5e7c655d9ac7&autoload=false`; // 카카오맵 API URL
    script.async = true;

    // 스크립트 로딩 완료 후
    script.onload = () => {
      try {
        // 카카오맵 API가 정상적으로 로드되면 지도 생성 코드 실행
        const mapContainer = document.getElementById('map'); 
        const mapOptions = {
          center: new window.kakao.maps.LatLng(37.47682182093529, 126.8792406611434), // 지도 초기 위치
          level: 3, // 지도 줌 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOptions); // 지도 생성 ㅍ

        const markerPosition = new window.kakao.maps.LatLng(37.47682182093529, 126.8792406611434); // 마커 위치
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map); // 마커 지도에 추가
      } catch (e) {
        // 지도 초기화 중 오류 발생 시
        setError('카카오맵 로딩 오류');
      }
    };

    // 스크립트 로딩 실패 시
    script.onerror = () => {
      setError('스크립트 로드 실패');
    };

    // 스크립트를 head에 추가
    document.head.appendChild(script);

    // useEffect cleanup
    return () => {
      document.head.removeChild(script);
    };
  }, []); // 컴포넌트가 처음 렌더링될 때만 실행

  // 에러가 있을 경우 에러 메시지를 출력
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div id="map" style={{ width: '550px', height: '600px' }}></div>
    </div>
  );
}

export default Map;
