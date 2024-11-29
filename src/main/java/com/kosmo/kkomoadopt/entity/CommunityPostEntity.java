package com.kosmo.kkomoadopt.entity;

import com.kosmo.kkomoadopt.dto.PostCategory;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.w3c.dom.Text;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "community_post")
public class CommunityPostEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "post_uid", nullable = false, length = 36)
    private String postUid;

    @Column(name = "post_id")
    private Integer postId;

    @Enumerated(EnumType.STRING)
    @Column(name = "post_category")
    private PostCategory postCategory;

    @Column(name = "post_title")
    private String postTitle;

    @Lob
    @Column(name = "post_content")
    private String postContent;

    @Column(name = "post_created_at", nullable = false, updatable = false)
    private LocalDateTime postCreatedAt;

    @Column(name = "post_updated_at", nullable = false)
    private LocalDateTime postUpdatedAt;

    @Column(name = "post_img_url")
    private String postImgUrl;

    @Column(name = "is_deleted", nullable = false)
    private Boolean isDeleted;

    @Column(name = "delete_reason", length = 10)
    private String deleteReason;

    // community 작성자 nickname
    @Column(name = "community_author", nullable = false)
    private String communityAuthor;

    @Column(name = "post_view_count", nullable = false)
    private Integer postViewCount = 0;

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
                ", communityAuthor='" + communityAuthor + '\'' +
                '}';
    }
}

