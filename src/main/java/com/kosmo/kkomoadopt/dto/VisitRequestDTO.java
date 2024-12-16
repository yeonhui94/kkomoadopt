package com.kosmo.kkomoadopt.dto;

import com.kosmo.kkomoadopt.enums.VisitPurpose;
import com.kosmo.kkomoadopt.enums.VisitTime;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record VisitRequestDTO(
        String requestUid,
        Integer requestId,
        String phoneNum,
        LocalDate visitDate,
        VisitTime visitTime,
        VisitPurpose visitPurpose,
        String visitContent,
        LocalDateTime visitCreatedAt,
        String userId
) {
}
