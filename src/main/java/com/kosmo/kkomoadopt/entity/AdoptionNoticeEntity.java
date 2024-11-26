package com.kosmo.kkomoadopt.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(
        name = "adoption_notice",
        indexes = {
                @Index(name = "idx_adoption_notice_announcement_num", columnList = "announcement_num"),
        })
public class AdoptionNoticeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "notice_uid", nullable = false, length = 36)
    private String noticeUid;

    @Column(name = "notice_id", nullable = false)
    private Integer noticeId;
    
    // 강아지, 고양이, 기타 3개중 하나
    @Column(name = "notice_category", nullable = false)
    private String noticeCategory;

    @Column(name = "notice_title")
    private String noticeTitle;

    @Column(name = "notice_view_count")
    private Integer noticeViewCount;

    @Column(name = "animal_type")
    private String animalType;

    // 입양가능, 예약중, 입양불가 3개중 하나
    @Column(name = "adoption_status")
    private String adoptionStatus;

    @Column(name = "announcement_num", length = 10)
    private String announcementNum;

    @Column(name = "unique_num", length = 15)
    private Integer uniqueNum;

    @Column(name = "notice_img_url")
    private String noticeImgUrl;

    @Column(name = "euthanasia_date")
    private LocalDate euthanasiaDate;

    @Column(name = "notice_content")
    private String noticeContent;

    @Column(name = "notice_created_at")
    private LocalDateTime noticeCreatedAt;

    @Column(name = "notice_updated_at")
    private LocalDateTime noticeUpdatedAt;

    //
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "scrap_id", nullable = false)  // ScrapEntity와의 관계를 설정하는 외래 키
    private ScrapEntity scrapEntity;  // 하나의 Scrap에 여러 AdoptionNotice가 속할 수 있음
    
    // 입양불가 상태의 사유
    @Column
    private String reason;

    // Many 입양공지가 하나의 Admin에 속함
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "admin_uid", nullable = false)
    @Column(name = "admin_uid", nullable = false, length = 36)
    private AdminEntity adminUid;

    @Override
    public String toString() {
        return "AdoptionNoticeEntity{" +
                "noticeUid='" + noticeUid + '\'' +
                ", noticeId=" + noticeId +
                ", noticeCategory='" + noticeCategory + '\'' +
                ", noticeTitle='" + noticeTitle + '\'' +
                ", noticeViewCount=" + noticeViewCount +
                ", animalType='" + animalType + '\'' +
                ", adoptionStatus='" + adoptionStatus + '\'' +
                ", announcementNum='" + announcementNum + '\'' +
                ", uniqueNum=" + uniqueNum +
                ", noticeImgUrl='" + noticeImgUrl + '\'' +
                ", euthanasiaDate=" + euthanasiaDate +
                ", noticeContent='" + noticeContent + '\'' +
                ", noticeCreatedAt=" + noticeCreatedAt +
                ", noticeUpdatedAt=" + noticeUpdatedAt +
                ", reason='" + reason + '\'' +
                ", adminUid=" + adminUid +
                '}';
    }
}
