import React from 'react';
import img1 from '../../assets//img2/1.jpg'; 
import img2 from '../../assets/img2/2.jpg'; 
import img3 from '../../assets/img2/3.jpg'; 
import img4 from '../../assets/img2/4.jpg'; 
import Card1 from '../../components/Card1/Card1';

function Card1Ex() {

  const images = [
    { image: img1, width: '260px', height: '427px' }, 
    { image: img2, width: '72px', height: '72px' },   
    { image: img3, width: '72px', height: '72px' },  
    { image: img4, width: '72px', height: '72px' } 
  ];

  return (
    <div className="App">
      {/* Test1 컴포넌트에 이미지 배열 전달 */}
      <Card1 images={images} />
    </div>
  );
}

export default Card1Ex;
