package com.kosmo.kkomoadopt.entity;

import com.kosmo.kkomoadopt.converter.UrlConverter;
import com.kosmo.kkomoadopt.enums.QnAState;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "QnA")
public class QnAEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "qna_uid", nullable = false, length = 36)
    private String qnaUid;

    @Column(name = "qna_id", nullable = false, unique = true)
    private Integer qnaId;

    @Column(name = "qna_title")
    private String qnaTitle;

    @Column(name = "qna_created_at", nullable = false, updatable = false)
    private LocalDateTime qnaCreatedAt;

    @Column(name = "qna_view_count")
    private Integer qnaViewCount = 0; // 초기값

    @Column(name = "qna_password", length = 6)
    private Integer qnaPassword;

    @Lob
    @Column(name = "qna_content", columnDefinition = "text")
    private String qnaContent;

    @Convert(converter = UrlConverter.class)
    @Column(name = "qna_request_file", columnDefinition = "text")
    private List<String> qnaRequestFile;

    @Lob
    @Column(name = "qna_answer", columnDefinition = "text")
    private String qnaAnswer;

    @Convert(converter = UrlConverter.class)
    @Column(name = "qna_answer_file", columnDefinition = "text")
    private List<String> qnaAnswerFile;

    @Enumerated(EnumType.STRING)
    @Column(name = "qna_state", length = 10)
    private QnAState qnaState;

    // qna 작성자
    @Column(name = "user_id", nullable = false)
    private String userId; // FK

    // qna 답변자(ADMIN 고정)
    @Column(name = "answer_author")
    private String answerAuthor;

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
