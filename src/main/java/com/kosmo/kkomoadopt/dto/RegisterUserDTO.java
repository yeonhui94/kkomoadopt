package com.kosmo.kkomoadopt.dto;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record RegisterUserDTO(
        @Email(message = "올바른 이메일 주소를 입력해주세요.")
        @NotBlank(message = "이메일은 필수 입력 항목입니다.")
        String email,

        @NotBlank(message = "이름은 필수 입력 항목입니다.")
        String name,

        @NotBlank(message = "핸드폰번호는 필수 입력 항목입니다.")
        String phoneNumber,

        @NotBlank(message = "닉네임은 필수 입력 항목입니다.")
        String nickname,

        @NotBlank(message = "비밀번호는 필수 입력 항목입니다.")
        String password
) { }
