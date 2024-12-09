package com.kosmo.kkomoadopt.dto;

import com.kosmo.kkomoadopt.enums.AdoptStatus;
import com.kosmo.kkomoadopt.enums.NoticeCategory;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public record AdoptNoticeListDTO(
        List<Notice> adoptNoticeList,
        long totalCnt,
        int pageNum
){
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
            Integer noticeViewCount,
            String adoptionAuthor
    ) {
    }
}