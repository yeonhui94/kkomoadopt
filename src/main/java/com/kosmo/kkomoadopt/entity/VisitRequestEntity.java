package com.kosmo.kkomoadopt.entity;

import com.kosmo.kkomoadopt.enums.VisitPurpose;
import com.kosmo.kkomoadopt.enums.VisitTime;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "visit_request")
public class VisitRequestEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "request_uid", nullable = false, length = 36)
    private String requestUid;

    @Column(name = "request_id", nullable = false, unique = true)
    private Integer requestId;

    @Column(name = "phone_num", length = 20)
    private String phoneNum;

    @Column(name = "visit_date")
    private LocalDate visitDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "visit_time")
    private VisitTime visitTime;

    @Enumerated(EnumType.STRING)
    @Column(name = "visit_purpose", length = 10)
    private VisitPurpose visitPurpose;

    @Lob
    @Column(name = "visit_content", columnDefinition = "text")
    private String visitContent;

    @Column(name = "visit_created_at", nullable = false, updatable = false)
    private LocalDateTime visitCreatedAt;

    // visitRequest 작성자
    @Column(name = "user_id", nullable = false)
    private String userId; // FK

    @Override
    public String toString() {
        return "VisitRequestEntity{" +
                "requestUid='" + requestUid + '\'' +
                ", requestId=" + requestId +
                ", phoneNum='" + phoneNum + '\'' +
                ", visitDate=" + visitDate +
                ", visitTime=" + visitTime +
                ", visitPurpose=" + visitPurpose +
                ", visitContent='" + visitContent + '\'' +
                ", visitCreatedAt=" + visitCreatedAt +
                ", userId='" + userId + '\'' +
                '}';
    }
}
