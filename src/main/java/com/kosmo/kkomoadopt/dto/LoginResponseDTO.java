package com.kosmo.kkomoadopt.dto;
import com.kosmo.kkomoadopt.enums.Authority;

public record LoginResponseDTO(
        Authority authority,
        String nickname
) {
}
