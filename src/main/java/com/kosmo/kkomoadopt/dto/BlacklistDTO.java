package com.kosmo.kkomoadopt.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;

public record BlacklistDTO(
        LocalDateTime blackedDate,
        String blackReason
) {
}
