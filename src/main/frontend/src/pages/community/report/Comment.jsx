import Button from "../../../components/Button/Button";
import postst from "../Commu_post.module.css";
import { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import { useStore } from "../../../stores/CommentStore2/useStore";
import { useParams } from "react-router-dom";

const Comment = ({ postDetail, postActions, comments, isAdded, setIsAdded, user }) => {  // 부모 컴포넌트에서 전달받은 postDetail을 props로 사용
    const [inputValue, setInputValue] = useState(""); // Input -> 수정 / 답변
    const [editingComment, setEditingComment] = useState(null); // 수정 중인 댓글의 인덱스 상태
    const [editedCommentText, setEditedCommentText] = useState(""); // 수정된 댓글 내용
    const { state, actions } = useStore();
    const { postUid } = useParams();

    // 문의등록
    const handleConfirmClick = async () => {
        if (inputValue.trim()) {
            const data = {
                commentContent: inputValue,
                postUid: postUid
            };
            await actions.createComment(data);

            setInputValue(""); // 입력 값 초기화
            setIsAdded(true)
        }
    };

    useEffect(() => {
        const currentComment = Array.isArray(comments) ? comments : [];
        const updatedComment = [...currentComment, inputValue];


        if (isAdded) {
            postActions.updateAllFields(prev => {
                return { ...prev, comments: updatedComment };
            });
        }

    }, [isAdded])

    // const  handleSubmitComment = async () => {
    //     if (newComment.trim()) {
    //         const newCommentObject = {
    //             nickname: user.nickname,
    //             content: newComment,
    //             date: new Date(),
    //             postId: postDetail.postId,
    //         };

    //         try {
    //             console.log("댓글 등록 요청 데이터:", newCommentObject);
    //             const result = await createComment(newCommentObject);
    //             console.log("댓글 등록 성공:", result);

    //             // 부모 컴포넌트의 댓글 목록을 업데이트
    //             handleAddComment(newCommentObject); // 부모에서 처리하도록 전달

    //             setNewComment(""); // 댓글 입력창 초기화
    //         } catch (error) {
    //             console.error("댓글 등록 실패:", error);
    //             alert("댓글 등록에 실패했습니다! 다시 시도해주세요.");
    //         }
    //     }
    // };



    // useEffect(() => {
    //     // qnaState가 배열이 아니거나 null/undefined인 경우 빈 배열로 초기화
    //     const currentCommentState = Array.isArray(postDetail.comments) ? postDetail.comments : [];

    //     // 새로운 inputValue를 추가한 배열 생성
    //     const updatedQnaState = [...currentCommentState, newComment];
    //     actions.(updatedQnaState);
    //     qnaState.setIsAdded(true);
    //   }, [state]);


    // 댓글 수정 및 삭제 처리 함수는 그대로 두거나 수정할 수 있음
    // const handleEditComment = (index) => {
    //     if (!user) {
    //         alert("로그인 후 댓글을 수정할 수 있습니다.");
    //         return;
    //     }

    //     if (postDetail.comments[index].nickname === user.nickname) {
    //         setEditingComment(index);
    //         setEditedCommentText(postDetail.comments[index].content);
    //     } else {
    //         alert("본인의 댓글만 수정할 수 있습니다.");
    //     }
    // };

    // const handleSaveEditedComment = (index) => {
    //     const updatedComment = {
    //         ...postDetail.comments[index],
    //         content: editedCommentText,
    //     };

    //     const updatedComments = postDetail.comments.map((comment, i) =>
    //         i === index ? updatedComment : comment
    //     );

    //     onAddComment(updatedComment); // 부모 컴포넌트의 상태 업데이트
    //     setEditingComment(null);
    //     setEditedCommentText("");
    // };

    return (
        <div className={postst.post_comments}>
            <div className={postst.post_commentbar}>
                <p className={postst.post_commentbar_cell1}>댓글</p>
                <p className={postst.post_commentbar_cell2}></p>
                <p className={postst.post_commentbar_cell3}>댓글수</p>
            </div>
            <div className={postst.post_commentbox}>
                <div className={postst.post_commentbox_header}>
                    <p className={postst.post_commentbox_header1}>닉네임</p>
                    <p className={postst.post_commentbox_header2}>내용</p>
                    <p className={postst.post_commentbox_header3}>작성일</p>
                </div>
                {Array.isArray(comments) && comments.length > 0 ? (
                    <ul>
                        {comments.map((comment, index) => (
                            <li key={index} className={postst.comment_list_item}>
                                <div className={postst.comment_list_item_text}>
                                    <p className={postst.comment_list_item_text1}>
                                        {comment?.nickname || comment.nickname}
                                    </p>
                                    <p
                                        className={postst.comment_list_item_text2}
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                editingComment === index ? (
                                                    <>
                                                        <textarea
                                                            value={inputValue}
                                                            onChange={(e) => setInputValue(e.target.value)}
                                                        />
                                                        {/* <button onClick={() => handleConfirmClick(index)}>저장</button> */}
                                                    </>
                                                ) : (
                                                    (comment.commentContent || "").replace(/\n/g, "<br />")
                                                ),
                                        }}
                                    ></p>
                                    <p className={postst.comment_list_item_text3}>
                                        {comment.date}
                                    </p>
                                </div>
                                {comment.nickname === user?.nickname && editingComment !== index && (
                                    <div className={postst.comment_list_item_buttons}>
                                        <Button
                                            // onClick={() => handleDeleteComment(index)}
                                            text={"삭제"}
                                            width={"60px"}
                                            height={"30px"}
                                            verticalPadding={"0px"}
                                            horizontalPadding={"10px"}
                                            color={"var(--main-color)"}
                                            bg1color={"var(--main-color)"}
                                            marginBottom={"10px"}
                                            marginRight={"30px"}
                                        />
                                        <Button
                                            // onClick={() => handleEditComment(index)}
                                            text={"수정"}
                                            width={"60px"}
                                            height={"30px"}
                                            verticalPadding={"0px"}
                                            horizontalPadding={"10px"}
                                            color={"#444"}
                                            bg1color={"var(--mainpage-dark)"}
                                            marginBottom={"10px"}
                                            marginRight={"30px"}
                                        />
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>댓글이 없습니다.</p>
                )}

                <div className={postst.post_commentinput}>
                    <div className={postst.post_commentinput_head}>
                        <div className={postst.post_commentinput_headblank1}></div>
                        <p className={postst.post_commentinput_headtext}>댓글쓰기</p>
                        <div className={postst.post_commentinput_headblank2}></div>
                    </div>
                    <Form onSubmit={(e) => { e.preventDefault() }}>
                        <textarea
                            value={inputValue}
                            className={postst.post_commentinput_body}
                            placeholder="댓글을 작성해주세요"
                            onChange={(e) => setInputValue(e.target.value)}
                        />

                        <div className={postst.post_commentinput_buttons}>
                            <Button
                                text={"등록"}
                                width={"60px"}
                                height={"30px"}
                                verticalPadding={"0px"}
                                horizontalPadding={"10px"}
                                color={"var(--main-color)"}
                                bg1color={"var(--main-color)"}
                                marginBottom={"10px"}
                                marginRight={"10px"}
                                onClick={handleConfirmClick}
                            />

                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Comment;
