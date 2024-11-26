package com.kosmo.kkomoadopt.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table
public class CommentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "comment_id", nullable = false, length = 36)
    private String commentId;

    @Column(name = "comment_content")
    private String commentContent;

    @Column(name = "comment_created_at")
    private LocalDateTime commentCreatedAt;

    @Column(name = "comment_updated_at")
    private LocalDateTime commentUpdatedAt;

    @Column(name = "is_deleted", nullable = false)
    private Boolean isDeleted = false; // 댓글 삭제 여부를 나타내는 필드

    // CommunityPost는 여러 개의 댓글을 가질 수 있다
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_uid")
    private CommunityPostEntity postUid;

    // User는 여러 개의 댓글을 달 수 있다
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false) // 사용자 ID (댓글 작성자)
    private UserEntity userId;

    // Admin는 여러 개의 댓글을 관리할 수 있다
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "admin_uid", nullable = true) // 관리자는 댓글을 관리할 수 있지만 필수는 아님 (관리자가 없는 경우도 가능)
    private AdminEntity adminUid;
}
