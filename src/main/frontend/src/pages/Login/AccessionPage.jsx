// 이거 삭제하세요!!!!!!!!!!!!!! 필요없습니다. 



import styled from "styled-components";
import AccesstionPageContents from "../../contents/AccessionPageContents";

const StyledContent1 = styled(AccesstionPageContents)`

  margin-bottom: 0;
`;

function AccesstionPage({gridArea}) {
  return (
    <div style={{gridArea: gridArea}}>
      <StyledContent1 />
    </div>
  );
}

export default AccesstionPage;
