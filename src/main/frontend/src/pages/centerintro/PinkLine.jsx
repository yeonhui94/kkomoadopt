const PinkLine = () => {
    return (
        <div style={{display: "flex", justifyContent:"center"}}>
        <div
        style={{
            width: "1400px", height:"100%",
            boxShadow: '4px 2px 3px #e3e3e3', 
            border: '2px #E5E5E5 solid' ,
            width: 'calc(100% - 80px)',  // 100%에서 양 옆에 80px씩 뺀 길이로 라인을 더 길게 설정
            maxWidth: '2000px',  // 최대 너비를 2000px로 설정
            backgroundColor: '#E5E5E5',
            marginLeft: '40px', // 왼쪽 여백
            marginRight: '40px', // 오른쪽 여백
            
        }}
        />
        </div>
    )
}

export default PinkLine;