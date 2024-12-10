package com.kosmo.kkomoadopt.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public record AdoptNoticeListDTO(
        List<Notice> adoptNoticeList,
        long totalCnt,
        long currentPageNum
){
    public record Notice(
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
            Integer noticeViewCount,
            String adoptionAuthor
    ) {
    }
}