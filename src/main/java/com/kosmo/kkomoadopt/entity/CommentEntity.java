package com.kosmo.kkomoadopt.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "comment")
public class CommentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "comment_id", nullable = false, length = 36)
    private String commentId;

    @Lob
    @Column(name = "comment_content", columnDefinition = "text")
    private String commentContent;

    @Column(name = "comment_created_at", nullable = false, updatable = false)
    private LocalDateTime commentCreatedAt;

    @Column(name = "comment_updated_at", nullable = false)
    private LocalDateTime commentUpdatedAt;

    @Column(name = "is_deleted", nullable = false)
    private Boolean isDeleted = false; // 댓글 삭제 여부를 나타내는 필드

    // communitypost의 post id
    @Column(name = "post_uid", nullable = false)
    private String postUid; // FK

    // comment 작성자
    @Column(name = "user_id", nullable = false)
    private String userId; // FK

    @Override
    public String toString() {
        return "CommentEntity{" +
                "commentId='" + commentId + '\'' +
                ", commentContent='" + commentContent + '\'' +
                ", commentCreatedAt=" + commentCreatedAt +
                ", commentUpdatedAt=" + commentUpdatedAt +
                ", isDeleted=" + isDeleted +
                ", postUid='" + postUid + '\'' +
                ", userId='" + userId + '\'' +
                '}';
    }
}
