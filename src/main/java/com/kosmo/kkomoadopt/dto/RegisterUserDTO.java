package com.kosmo.kkomoadopt.dto;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record RegisterUserDTO(
        String email,
        String name,
        String phoneNumber,
        String nickname,
        String password
) {
        // 전화번호 포맷팅
//        public String formattedPhoneNumber() {
//                // 전화번호에서 숫자만 추출
//                String phone = this.phoneNumber.replaceAll("[^0-9]", "");
//
//                // 전화번호가 10자리 또는 11자리일 경우에만 포맷 적용
//                if (phone.length() == 10 || phone.length() == 11) {
//                        return phone.replaceAll("(\\d{3})(\\d{4})(\\d{4})", "$1-$2-$3");
//                } else {
//                        throw new IllegalArgumentException("전화번호 형식이 잘못되었습니다.");
//                }
//        }
}
