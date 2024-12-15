import Button from "../../../components/Button/Button";
import postst from "../Commu_post.module.css";
import { useState, useEffect } from "react";
import { Form } from "react-router-dom";


const Comment = ({ postDetail }) => {  // 부모 컴포넌트에서 전달받은 postDetail을 props로 사용
    const user = JSON.parse(sessionStorage.getItem('user'));

    const [newComment, setNewComment] = useState(""); // 새 댓글 입력 상태
    const [editingComment, setEditingComment] = useState(null); // 수정 중인 댓글의 인덱스 상태
    const [editedCommentText, setEditedCommentText] = useState(""); // 수정된 댓글 내용

    // 더 이상 하드코딩된 더미 데이터 대신 postDetail을 기반으로 댓글을 처리
    const [report_comments, setReportComments] = useState([]);

    useEffect(() => {
        console.log(postDetail.comments);
    }, [postDetail])

    // 댓글 추가 함수
    const handleAddComment = () => {
        if (newComment.trim()) { // 댓글이 비어 있지 않으면
            const newCommentObject = {
                nickname: user ? user.nickname : "익명", // 유저가 있으면 유저 닉네임, 없으면 익명
                content: newComment, // 작성된 댓글
                date: new Date(),
            };
            // 댓글 배열을 상태에 반영
            setReportComments([...report_comments, newCommentObject]);
            setNewComment(""); // 댓글 입력창 초기화
        }
    };

    // 댓글 수정 시작 함수 (로그인한 유저의 닉네임과 동일할 경우에만 수정)
    const handleEditComment = (index) => {
        if (!user) {
            alert("로그인 후 댓글을 수정할 수 있습니다."); // 로그인하지 않은 사용자에 대한 알림
            return;
        }

        if (report_comments[index].nickname === user.nickname) {
            setEditingComment(index); // 수정할 댓글의 인덱스 설정
            setEditedCommentText(report_comments[index].content); // 기존 댓글 내용으로 수정 텍스트 초기화
        } else {
            alert("본인의 댓글만 수정할 수 있습니다."); // 댓글 작성자가 아닐 때 경고
        }
    };

    // 수정한 댓글 저장
    const handleSaveEditedComment = (index) => {
        const updatedComment = {
            ...report_comments[index], // 기존 댓글 내용 그대로 유지
            content: editedCommentText, // 수정된 댓글 내용
        };

        const updatedComments = report_comments.map((comment, i) =>
            i === index ? updatedComment : comment
        );
        setReportComments(updatedComments);

        setEditingComment(null); // 수정 상태 종료
        setEditedCommentText(""); // 수정된 텍스트 초기화
    };

    // 댓글 삭제 함수
    const handleDeleteComment = (index) => {
        if (!user) {
            alert("로그인 후 댓글을 삭제할 수 있습니다."); // 로그인하지 않은 사용자에 대한 알림
            return;
        }

        if (report_comments[index].nickname === user.nickname) {
            const updatedComments = report_comments.filter((_, i) => i !== index);
            setReportComments(updatedComments); // 댓글 삭제 후 상태 갱신
        } else {
            alert("본인의 댓글만 삭제할 수 있습니다."); // 댓글 작성자가 아닐 때 경고
        }
    };

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
                {Array.isArray(postDetail.comments) && postDetail.comments.length > 0 ? (
                    <ul>
                        {postDetail.comments.map((comment, index) => (
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
                                                            value={editedCommentText}
                                                            onChange={(e) => setEditedCommentText(e.target.value)}
                                                        />
                                                        <button onClick={() => handleSaveEditedComment(index)}>저장</button>
                                                    </>
                                                ) : (
                                                    comment.commentContent.replace(/\n/g, "<br />")

                                                ),
                                        }}

                                    >
                                    </p>
                                    <p className={postst.comment_list_item_text3}>
                                        {comment.commentCreatedAt}
                                    </p>
                                </div>
                                {comment.nickname === user?.nickname && editingComment !== index && (
                                    <div className={postst.comment_list_item_buttons}>
                                        <Button
                                            onClick={() => handleDeleteComment(index)}
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
                                            onClick={() => handleEditComment(index)}
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
                    )
                    : (
                        <p>댓글이 없습니다.</p>
                    )
                }

                <div className={postst.post_commentinput}>
                    <div className={postst.post_commentinput_head}>
                        <div className={postst.post_commentinput_headblank1}></div>
                        <p className={postst.post_commentinput_headtext}>댓글쓰기</p>
                        <div className={postst.post_commentinput_headblank2}></div>
                    </div>
                    <Form>
                        <textarea
                            value={newComment}
                            className={postst.post_commentinput_body}
                            placeholder="댓글을 작성해주세요"
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                    </Form>
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
                            onClick={handleAddComment}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;
