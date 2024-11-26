package com.kosmo.kkomoadopt.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table
public class BlacklistEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "black_id", nullable = false, length = 36)
    private String blackId;

    @Column(name = "blacked_date")
    private LocalDateTime blackedDate;

    @Column(name = "black_reason")
    private String blackReason;

    // 1:1 관계로 UserEntity와 연결
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)  // 외래 키
    private UserEntity userId;  // 블랙리스트에 올라간 사용자

    // admin이 관리할 수 있게 설정
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "admin_uid", nullable = false)  // 외래 키
    private AdminEntity adminUid;  // 관리자를 관리하는 필드
}
