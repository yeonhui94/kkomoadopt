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
) {
        // 전화번호 포맷팅
        public String formattedPhoneNumber() {
                // 전화번호에서 숫자만 추출
                String phone = this.phoneNumber.replaceAll("[^0-9]", "");

                // 전화번호가 10자리 또는 11자리일 경우에만 포맷 적용
                if (phone.length() == 10 || phone.length() == 11) {
                        return phone.replaceAll("(\\d{3})(\\d{4})(\\d{4})", "$1-$2-$3");
                } else {
                        throw new IllegalArgumentException("전화번호 형식이 잘못되었습니다.");
                }
        }
}
