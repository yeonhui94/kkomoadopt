package com.kosmo.kkomoadopt.dto;

import com.kosmo.kkomoadopt.enums.VisitPurpose;
import com.kosmo.kkomoadopt.enums.VisitTime;

import java.time.LocalDate;

public record VisitRequestDTO(
        String requestUid,
        String userId,
        String phoneNum,
        LocalDate visitDate,
        VisitTime visitTime,
        VisitPurpose visitPurpose,
        String visitContent
) {
}
