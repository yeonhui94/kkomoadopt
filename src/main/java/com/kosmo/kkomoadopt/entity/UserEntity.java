package com.kosmo.kkomoadopt.entity;

import com.kosmo.kkomoadopt.converter.BlacklistConverter;
import com.kosmo.kkomoadopt.converter.ScrapConverter;
import com.kosmo.kkomoadopt.dto.Authority;
import com.kosmo.kkomoadopt.dto.BlacklistDTO;
import com.kosmo.kkomoadopt.dto.Provider;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@Table(
        name = "user",
        indexes = {
                @Index(name = "idx_user_nickname", columnList = "nickname"),
        })
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "user_id", nullable = false, length = 36)
    private String userId;  // Primary Key (PK)

    // 일반 회원 가입
    @Column(nullable = false, unique = true, updatable = false)
    private String email;

    @Column
    private String name;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(length = 20, unique = true)
    private String nickname;

    @Column(nullable = false, length = 16)
    private String password;

    @Column(name = "user_create", nullable = false, updatable = false)
    private LocalDateTime userCreate;

    @Column(name = "user_img_url")
    private String userImgUrl;

    @Column(name = "profile_text", length = 200)
    private String profileText;

    @Column(name = "user_last_login", nullable = false)
    private LocalDateTime userLastLogin;

    @Column(name = "is_blacklisted", nullable = false)
    private Boolean isBlacklisted = false;

    // 네이버, 카카오 로그인 ID
    @Column(name = "social_Id", unique = true, length = 50)
    private String socialId;

    @Enumerated(EnumType.STRING)
    @Column(length = 10)
    private Provider provider;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 10)
    private Authority authority;

    @Convert(converter = BlacklistConverter.class)
    @Column(columnDefinition = "longtext")
    private List<BlacklistDTO> blacklists;

    @Convert(converter = ScrapConverter.class)
    @Column(columnDefinition = "longtext")
    private List<String> scraps;

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
                ", role='" + role + '\'' +
                ", blacklists=" + blacklists +
                ", scraps=" + scraps +
                '}';
    }
}


