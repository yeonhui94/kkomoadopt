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
public class AdminEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "admin_uid", nullable = false, length = 36)
    private String adminUid;

    @Column(name = "admin_email", nullable = false)
    private String adminEmail;

    @Column(name = "admin_name")
    private String adminName;

    @Column(name = "phone_number")
    private String phoneNumber;

    private String nickname;

    @Column(nullable = false)
    private String password;

    @Column(name = "admin_create", nullable = false)
    private LocalDateTime adminCreate;

    @Column(name = "admin_last_login", nullable = false)
    private LocalDateTime adminLastLogin;

    @Column(name = "admin_img_url")
    private String adminImgUrl;

    // Admin과 연결된 입양공지 목록
    @OneToMany(mappedBy = "adminUid")
    private List<AdoptionNoticeEntity> Notices;

    // Admin과 연결된 게시물 목록
    @OneToMany(mappedBy = "adminUid")
    private List<CommunityPostEntity> CommunityPosts;

    @Override
    public String toString() {
        return "AdminEntity{" +
                "adminUid='" + adminUid + '\'' +
                ", adminEmail='" + adminEmail + '\'' +
                ", adminName='" + adminName + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", nickname='" + nickname + '\'' +
                ", password='" + password + '\'' +
                ", adminCreate=" + adminCreate +
                ", adminLastLogin=" + adminLastLogin +
                ", adminImgUrl='" + adminImgUrl + '\'' +
                ", Notices=" + Notices +
                ", CommunityPosts=" + CommunityPosts +
                '}';
    }
}
