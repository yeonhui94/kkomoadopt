package com.kosmo.kkomoadopt.dto;

import com.kosmo.kkomoadopt.enums.VisitPurpose;

import java.time.LocalDate;

public record VisitRequestMypageDTO(
        String requestUid,
        Integer requestId,
        String phoneNum,
        LocalDate visitDate,
        VisitPurpose visitPurpose,
        String userId
) {
}
