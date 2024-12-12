package com.kosmo.kkomoadopt.dto;

public record QnADTO(
        String userId,
        String qnaTitle,
        String qnaContent,
        Integer qnaPassword
) {
}
