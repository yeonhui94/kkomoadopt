import Button from "../../../components/Button/Button";
import postst from "../Commu_post.module.css";
const Comment = () => {

    // const [newComment, setNewComment] = useState(""); // 새 댓글 입력 상태
    // const [editingComment, setEditingComment] = useState(null); // 수정 중인 댓글의 인덱스 상태
    // const [editedCommentText, setEditedCommentText] = useState(""); // 수정된 댓글 내용

    //  // 댓글 추가 함수
    // const handleAddComment = () => {
    //     if (newComment.trim()) { // 댓글이 비어 있지 않으면
    //     const newCommentObject = {
    //         userNickname: user.nickname,
    //         comment: newComment, // 작성된 댓글
    //     };
    //     // 현재 comments 배열에 새 댓글을 추가
    //     const updatedComments = [...faqState.comments, newCommentObject];

    //     // 댓글 배열을 상태에 반영
    //     faqActions.changeComment(updatedComments);
    //     setNewComment(""); // 댓글 입력창 초기화
    //     }
    // };

        
    // // 수정한 댓글 저장
    // const handleSaveEditedComment = (index) => {

    //     const updatedCommnet = {
    //       userNickname: faqState.comments[index].userNickname,
    //       comment: editedCommentText
    //     }
    
    //     const updatedComments = faqState.comments.map((comment, i) => i == index ? updatedCommnet : comment);
    //     faqActions.changeComment(updatedComments);
    
    //     setEditingComment(null); // 수정 상태 종료
    //     setEditedCommentText(""); // 수정된 텍스트 초기화
    // };

    // // 댓글 삭제 함수
    // const handleDeleteComment = (index) => {
    //     const updatedComments = faqState.comments.filter((_, i) => i !== index);
    //     faqActions.changeComment(updatedComments);
    //   };

    return (
        <div className={postst.post_comments}>

            <div className={postst.post_commentbar}>
                <p className={postst.post_commentbar_cell1}>댓글</p>
                <p className={postst.post_commentbar_cell2}></p>
                <p className={postst.post_commentbar_cell3}>댓글수</p>
            </div>

            <div className={postst.post_commentbox}>
                <div className={postst.post_commentbar_header}>
                    <p className={postst.post_commentbar_header1}>닉네임</p>
                    <p className={postst.post_commentbar_header2}>내용</p>
                    <p className={postst.post_commentbar_header3}>작성일</p>
                </div>
                <ul>

                </ul>
            </div>
            {/* <textarea name="" id=""></textarea>
            <Button/> */}
        </div>
    )
}

export default Comment;