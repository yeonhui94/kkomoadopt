function HeaderDivider() {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center', // 가운데 정렬
            marginTop: '20px',
            marginBottom: '20px',
        }}>
            <div style={{
                width: 'calc(100% - 80px)',  // 100%에서 양 옆에 80px씩 뺀 길이로 라인을 더 길게 설정
                maxWidth: '2000px',  // 최대 너비를 2000px로 설정
                height: '4px',
                backgroundColor: '#E5E5E5',
                marginLeft: '40px', // 왼쪽 여백
                marginRight: '40px', // 오른쪽 여백
            }} />
        </div>
    );
}

export default HeaderDivider;
