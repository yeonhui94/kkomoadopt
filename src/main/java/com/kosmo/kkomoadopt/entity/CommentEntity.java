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

    @Column(name = "comment_content")
    private String commentContent;

    @Column(name = "comment_created_at", nullable = false, updatable = false)
    private LocalDateTime commentCreatedAt;

    @Column(name = "comment_updated_at", nullable = false)
    private LocalDateTime commentUpdatedAt;

    @Column(name = "is_deleted", nullable = false)
    private Boolean isDeleted = false; // 댓글 삭제 여부를 나타내는 필드

    // communitypost의 post uid
    @Column(name = "post_uid", nullable = false)
    private String postUid;

    // comment 작성자 nickname
    @Column(name = "comment_author", nullable = false)
    private String commentAuthor;

    @Override
    public String toString() {
        return "CommentEntity{" +
                "commentId='" + commentId + '\'' +
                ", commentContent='" + commentContent + '\'' +
                ", commentCreatedAt=" + commentCreatedAt +
                ", commentUpdatedAt=" + commentUpdatedAt +
                ", isDeleted=" + isDeleted +
                ", postUid='" + postUid + '\'' +
                ", commentAuthor='" + commentAuthor + '\'' +
                '}';
    }
}
