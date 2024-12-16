package com.kosmo.kkomoadopt.dto;

import com.kosmo.kkomoadopt.enums.VisitPurpose;
import com.kosmo.kkomoadopt.enums.VisitTime;

import java.time.LocalDate;
import java.util.List;

public record VisitRequestListDTO(
        List<Visit> visits,
        long totalElements,
        Integer pageNumber
) {

    public record Visit(
            String requestUid,
            Integer requestId,
            String phoneNum,
            LocalDate visitDate,
            VisitTime visitTime,
            VisitPurpose visitPurpose,
            String nickname
    ){}
}
