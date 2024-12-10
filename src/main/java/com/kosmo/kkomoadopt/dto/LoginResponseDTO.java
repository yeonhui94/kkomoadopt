package com.kosmo.kkomoadopt.dto;
import jakarta.validation.constraints.NotNull;

public record LoginResponseDTO(
        Authority authority,
        String nickname
) {
}
