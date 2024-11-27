package com.kosmo.kkomoadopt.dto;

import java.time.LocalDateTime;

public record BlacklistDTO(
        LocalDateTime blackedDate,
        String blackReason
) {
}
