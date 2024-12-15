package com.kosmo.kkomoadopt.dto;

import com.kosmo.kkomoadopt.enums.AdoptStatus;
import com.kosmo.kkomoadopt.enums.NoticeCategory;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public record AdoptNoticeListDTO(
        List<Notice> notices,      // 공고 리스트
        long totalElements,        // 총 공고 수
        int pageNumber,
        List<String> scrapList) {          // 현재 페이지 번호

    public record Notice(
            String noticeUid,
            NoticeCategory noticeCategory,
            String noticeTitle,
            String noticeContent,
            String animalType,
            AdoptStatus adoptStatus,
            String announcementNum,
            Long uniqueNum,
            LocalDateTime noticeCreatedAt,
            List<String> noticeImgUrl,
            LocalDate euthanasiaDate,
            String impossibleReason,
            int noticeViewCount,

            String adoptionAuthor) {}
}