package com.kosmo.kkomoadopt.entity;

import com.kosmo.kkomoadopt.converter.AdoptStatusConverter;
import com.kosmo.kkomoadopt.converter.NoticeCategoryConverter;
import com.kosmo.kkomoadopt.converter.UrlConverter;
import com.kosmo.kkomoadopt.enums.AdoptStatus;
import com.kosmo.kkomoadopt.enums.NoticeCategory;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@Table(
        name = "adoption_notice",
        indexes = {
                @Index(name = "idx_adoption_notice_announcement_num", columnList = "announcement_num"),
                @Index(name = "idx_adoption_notice_animal_type", columnList = "animal_type")
        })
public class AdoptionNoticeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "notice_uid", nullable = false, length = 36)
    private String noticeUid;

//    @Enumerated(EnumType.STRING)
//    @Convert(converter = NoticeCategoryConverter.class)
    @Column(name = "notice_category", nullable = false)
    @Enumerated(EnumType.STRING)
    private NoticeCategory noticeCategory;

    @Column(name = "notice_title")
    private String noticeTitle;

    @Column(name = "notice_view_count")
    private Integer noticeViewCount = 0; // 기본값 설정

    @Column(name = "animal_type")
    private String animalType;

//    @Enumerated(EnumType.STRING)
    @Convert(converter = AdoptStatusConverter.class)
    @Column(name = "adopt_status", nullable = false)
    private AdoptStatus adoptStatus;

    @Column(name = "announcement_num", length = 10)
    private String announcementNum;

    @Column(name = "unique_num", length = 15)
    private Long uniqueNum;

    @Convert(converter = UrlConverter.class)
    @Column(name = "notice_img_url", columnDefinition = "text")
    private List<String> noticeImgUrl;

    @Column(name = "euthanasia_date")
    private LocalDate euthanasiaDate;

    @Lob
    @Column(name = "notice_content", columnDefinition = "text")
    private String noticeContent;

    @Column(name = "notice_created_at", updatable = false, nullable = false)
    private LocalDateTime noticeCreatedAt;

    @Column(name = "notice_updated_at", nullable = false)
    private LocalDateTime noticeUpdatedAt;
    
    // 입양불가 상태의 사유
    @Column(name = "impossible_reason")
    private String impossibleReason;

    // 입양공지 작성자(nickname)
    @Column(name = "adoption_author", nullable = false)
    private String adoptionAuthor = "관리자";

    @Transient
    private boolean isScraped;

    @Override
    public String toString() {
        return "AdoptionNoticeEntity{" +
                "noticeUid='" + noticeUid + '\'' +
                ", noticeCategory=" + noticeCategory +
                ", noticeTitle='" + noticeTitle + '\'' +
                ", noticeViewCount=" + noticeViewCount +
                ", animalType='" + animalType + '\'' +
                ", adoptStatus=" + adoptStatus +
                ", announcementNum='" + announcementNum + '\'' +
                ", uniqueNum=" + uniqueNum +
                ", noticeImgUrl=" + noticeImgUrl +
                ", euthanasiaDate=" + euthanasiaDate +
                ", noticeContent='" + noticeContent + '\'' +
                ", noticeCreatedAt=" + noticeCreatedAt +
                ", noticeUpdatedAt=" + noticeUpdatedAt +
                ", impossibleReason='" + impossibleReason + '\'' +
                ", adoptionAuthor='" + adoptionAuthor + '\'' +
                '}';
    }
}
