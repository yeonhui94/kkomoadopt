package com.kosmo.kkomoadopt.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@Table
public class ScrapEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "scrap_id", nullable = false, length = 36)
    private String scrapId;

    @Column(name = "scrap_create_at")
    private LocalDateTime scrapCreatedAt;

    // Scrap은 여러 AdoptionNotice를 가질 수 있음 (1:N 관계)
    @OneToMany(mappedBy = "scrapEntity", fetch = FetchType.LAZY)
    private List<AdoptionNoticeEntity> adoptionNotices;  // 여러 AdoptionNotice를 담을 리스트
}
