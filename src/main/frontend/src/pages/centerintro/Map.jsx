import React, { useEffect, useState } from 'react';

function Map() {
  const [error, setError] = useState(null); // 에러 상태를 관리
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=0d4c2ab52d4c65f286c1b559096704c1&autoload=false`; // 카카오맵 API URL
  
// 스크립트를 head에 추가
  document.head.appendChild(script);
  useEffect(() => {
    // 카카오맵 API 스크립트를 동적으로 추가
    
    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map'); 
          let map = new window.kakao.maps.Map(mapContainer, {
              center:  new window.kakao.maps.LatLng(37.47682182093529, 126.8792406611434), // 지도 초기 위치
              level: 3, // 지도 줌 레벨
            
          });

          const markerPosition = new window.kakao.maps.LatLng(37.47682182093529, 126.8792406611434); // 마커 위치
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
          marker.setMap(map); // 마커 지도에 추가
      });
  };
    

    // 스크립트 로딩 실패 시
    script.onerror = () => {
      setError('스크립트 로드 실패');
    };

    

  }, []); // 컴포넌트가 처음 렌더링될 때만 실행

  // 에러가 있을 경우 에러 메시지를 출력
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
}

export default Map;
