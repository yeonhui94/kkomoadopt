package com.kosmo.kkomoadopt.dto;

import com.kosmo.kkomoadopt.enums.AdoptStatus;
import com.kosmo.kkomoadopt.enums.NoticeCategory;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public record AdoptNoticeDTO(
        String noticeUid,
        NoticeCategory noticeCategory,
        String noticeTitle,
        AdoptStatus adoptStatus,
        String noticeContent,
        String animalType,
        String announcementNum,
        Long uniqueNum,
        LocalDate euthanasiaDate,
        String adoptionAuthor,
        Integer noticeViewCount,
        LocalDateTime noticeCreatedAt,
        List<String> noticeImgUrl
){ }