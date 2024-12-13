package com.kosmo.kkomoadopt.entity;

import com.kosmo.kkomoadopt.converter.UrlConverter;
import com.kosmo.kkomoadopt.enums.QnAState;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static com.kosmo.kkomoadopt.enums.QnAState.ANSWAIT;

@Entity
@Getter
@Setter
@Table(name = "QnA")
public class QnAEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "qna_uid", nullable = false, length = 36)
    private String qnaUid;
    // 글 고유번호
    @Column(name = "qna_id", nullable = false, unique = true)
    private Integer qnaId;
    // 글 번호
    @Column(name = "qna_title")
    private String qnaTitle;
    // 상담 제목
    @Column(name = "qna_created_at", nullable = false, updatable = false)
    private LocalDateTime qnaCreatedAt;
    // 글 작성 날짜
    @Column(name = "qna_view_count")
    private Integer qnaViewCount = 0; // 초기값
    // 글 조회수
    @Column(name = "qna_password", length = 6)
    private Integer qnaPassword;
    // 글 비밀번호
    @Lob
    @Column(name = "qna_content", columnDefinition = "text")
    private String qnaContent;
    // 글 내용
    @Convert(converter = UrlConverter.class)
    @Column(name = "qna_request_file", columnDefinition = "text")
    private List<String> qnaRequestFile = new ArrayList<>();
    // 글 첨부파일
    @Lob
    @Column(name = "qna_answer", columnDefinition = "text")
    private String qnaAnswer;
    // 글 답변
    @Convert(converter = UrlConverter.class)
    @Column(name = "qna_answer_file", columnDefinition = "text")
    private List<String> qnaAnswerFile = new ArrayList<>();
    // 글 답변 파일
    @Enumerated(EnumType.STRING)
    @Column(name = "qna_state", length = 10)
    private QnAState qnaState = ANSWAIT;
    // 답변상태
    // qna 작성자
    @Column(name = "user_id", nullable = false)
    private String userId; // FK
    // 글 작성자
    // qna 답변자(ADMIN 고정)
    @Column(name = "answer_author")
    private String answerAuthor;
    // 글 답변자(관리자)
    @Override
    public String toString() {
        return "QnAEntity{" +
                "qnaUid='" + qnaUid + '\'' +
                ", qnaId=" + qnaId +
                ", qnaTitle='" + qnaTitle + '\'' +
                ", qnaCreatedAt=" + qnaCreatedAt +
                ", qnaViewCount=" + qnaViewCount +
                ", qnaPassword=" + qnaPassword +
                ", qnaContent='" + qnaContent + '\'' +
                ", qnaRequestFile=" + qnaRequestFile +
                ", qnaAnswer='" + qnaAnswer + '\'' +
                ", qnaAnswerFile=" + qnaAnswerFile +
                ", qnaState=" + qnaState +
                ", userId='" + userId + '\'' +
                ", answerAuthor='" + answerAuthor + '\'' +
                '}';
    }
}
