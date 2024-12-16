package com.kosmo.kkomoadopt.dto;

import com.kosmo.kkomoadopt.enums.AdoptStatus;
import com.kosmo.kkomoadopt.enums.NoticeCategory;

import java.time.LocalDate;
import java.util.List;

public record AdoptMypageDTO(
        String noticeUid,
        String noticeTitle,
        String announcementNum,
        List<String> noticeImgUrl,
        LocalDate euthanasiaDate,
        NoticeCategory noticeCategory
) {
}
