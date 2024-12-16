package com.kosmo.kkomoadopt.entity;

import com.kosmo.kkomoadopt.converter.AuthorityConverter;
import com.kosmo.kkomoadopt.converter.BlacklistConverter;
import com.kosmo.kkomoadopt.converter.ScrapConverter;
import com.kosmo.kkomoadopt.enums.Authority;
import com.kosmo.kkomoadopt.dto.BlacklistDTO;
import com.kosmo.kkomoadopt.enums.Provider;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
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
    @Column(updatable = false)
    private String email;

    @Column
    private String name;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(length = 20)
    private String nickname;

    @Column(nullable = false, columnDefinition = "text")
    private String password;

    @Column(name = "user_create", nullable = false, updatable = false)
    private LocalDateTime userCreate = LocalDateTime.now(); // 기본값으로 현재 시간 설정

    @Column(name = "user_img_url")
    private String userImgUrl = "5123e3f8-12c3-42d3-9fad-5cbc808e0793.jpg";

    @Lob
    @Column(name = "profile_text", length = 200, columnDefinition = "text")
    private String profileText;

    @Column(name = "user_last_login", nullable = false)
    private LocalDateTime userLastLogin = LocalDateTime.now();  // 기본값으로 현재 시간 설정

    @Column(name = "is_blacklisted", nullable = false)
    private Boolean isBlacklisted = false; // 기본값은 false

    // 네이버, 카카오 로그인 ID
    @Column(name = "social_Id", length = 50)
    private String socialId;

    @Enumerated(EnumType.STRING)
    @Column(length = 10)
    private Provider provider;

//    @Enumerated(EnumType.STRING)
    @Convert(converter = AuthorityConverter.class)
    @Column(nullable = false, length = 10)
    private Authority authority = Authority.USER;  // 기본값 설정

    @Convert(converter = BlacklistConverter.class)
    @Column(columnDefinition = "text")
    private List<BlacklistDTO> blacklists = new ArrayList<>();  // 기본값 설정

    @Convert(converter = ScrapConverter.class)
    @Column(columnDefinition = "longtext")
    private List<String> scraps;

    @Transient
    private Long writeCount;

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
                ", provider=" + provider +
                ", authority=" + authority +
                ", blacklists=" + blacklists +
                ", scraps=" + scraps +
                '}';
    }
}


