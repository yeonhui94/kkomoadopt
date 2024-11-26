package com.kosmo.kkomoadopt.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "user_id", nullable = false, updatable = false, length = 36)
    private String userId;  // Primary Key (PK)

    // 일반 회원 가입
    @Column
    private String email;

    @Column
    private String name;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(length = 20)
    private String nickname;

    @Column(nullable = false, length = 16)
    private String password;

    @Column(name = "user_create", nullable = false)
    private LocalDateTime userCreate;

    @Column(name = "user_img_url")
    private String userImgUrl;

    @Column(name = "profile_text", length = 200)
    private String profileText;

    @Column(name = "user_last_login", nullable = false)
    private LocalDateTime userLastLogin;

    @Column(name = "is_blacklisted", nullable = false)
    private Boolean isBlacklisted;

    @Column(name = "social_Id", unique = true, length = 50)
    private String socialId;

    @Column(length = 10)
    private String provider;

    @OneToOne(mappedBy = "user")  // BlacklistEntity와의 관계
    private BlacklistEntity blacklistEntity;  // 블랙리스트 관련 정보

    @Override
    public String toString() {
        return "UserEntity{" +
                "userId='" + userId + '\'' +
                ", email='" + email + '\'' +
                ", name='" + name + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", nickname='" + nickname + '\'' +
                ", password='" + password + '\'' +
                ", userCreate=" + userCreate +
                ", userImgUrl='" + userImgUrl + '\'' +
                ", profileText='" + profileText + '\'' +
                ", userLastLogin=" + userLastLogin +
                ", isBlacklisted=" + isBlacklisted +
                ", socialId='" + socialId + '\'' +
                ", provider='" + provider + '\'' +
                '}';
    }
}


