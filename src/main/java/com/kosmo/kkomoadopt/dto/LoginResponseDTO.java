package com.kosmo.kkomoadopt.dto;
import jakarta.validation.constraints.NotNull;

public record LoginResponseDTO(
        @NotNull(message = "userId값은 null일 수 없습니다.")
        String userId,

        @NotNull(message = "email값은 null일 수 없습니다.")
        String email,

        @NotNull(message = "nickname값은 null일 수 없습니다.")
        String nickname
) {
}
