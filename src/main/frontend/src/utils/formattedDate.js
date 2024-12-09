export function formatDate(dateString) {
    const date = new Date(dateString);  // 문자열을 Date 객체로 변환
    return date.toLocaleDateString('ko-KR');  // 한국어 형식으로 변환
}