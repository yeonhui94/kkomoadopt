package com.kosmo.kkomoadopt.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table
public class CommunityPostEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "post_uid", nullable = false, length = 36)
    private String postUid;

    @Column(name = "post_id")
    private Integer postId;

    // 아이를 찾습니다, 입양후기, 사고팝니다, 신고합니다
    @Column(name = "post_category")
    private String postCategory;

    @Column(name = "post_title")
    private String postTitle;

    @Column(name = "post_content")
    private String postContent;

    @Column(name = "post_created_at", nullable = false)
    private LocalDateTime postCreatedAt;

    @Column(name = "post_updated_at", nullable = false)
    private LocalDateTime postUpdatedAt;

    @Column(name = "post_img_url")
    private String postImgUrl;

    @Column(name = "is_deleted", nullable = false)
    private Boolean isDeleted;

    @Column(name = "delete_reason", length = 10)
    private String deleteReason;

    // Many CommunityPost가 하나의 User에 속함
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity userId;

    // Many CommunityPost가 하나의 Admin에 의해 관리됨
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "admin_uid", nullable = false)
    private AdminEntity adminUid;

    @Override
    public String toString() {
        return "CommunityPostEntity{" +
                "postUid='" + postUid + '\'' +
                ", postId=" + postId +
                ", postCategory='" + postCategory + '\'' +
                ", postTitle='" + postTitle + '\'' +
                ", postContent='" + postContent + '\'' +
                ", postCreatedAt=" + postCreatedAt +
                ", postUpdatedAt=" + postUpdatedAt +
                ", postImgUrl='" + postImgUrl + '\'' +
                ", isDeleted=" + isDeleted +
                ", deleteReason='" + deleteReason + '\'' +
                ", userId=" + userId +
                ", adminUid=" + adminUid +
                '}';
    }
}

