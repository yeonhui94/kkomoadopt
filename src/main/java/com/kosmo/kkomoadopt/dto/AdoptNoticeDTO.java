package com.kosmo.kkomoadopt.dto;

import java.time.LocalDate;

public record AdoptNoticeDTO(
        String noticeUid,
        NoticeCategory noticeCategory,
        String noticeTitle,
        String adoptStatus,
        String noticeContent,
        String animalType,
        String announcementNum,
        Long uniqueNum,
        LocalDate euthanasiaDate,
        String adoptionAuthor,
        Integer noticeViewCount
){ }