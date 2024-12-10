package com.kosmo.kkomoadopt.converter;

import com.kosmo.kkomoadopt.enums.Authority;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class AuthorityConverter implements AttributeConverter<Authority, String> {

    @Override
    public String convertToDatabaseColumn(Authority authority) {
        if (authority == null) {
            return null; // null인 경우 데이터베이스에 null을 저장
        }
        // Enum의 name을 반환 (String 값으로 변환)
        return authority.name(); // Authority Enum의 name() 값을 반환
    }

    @Override
    public Authority convertToEntityAttribute(String dbData) {
        if (dbData == null || dbData.isEmpty()) {
            return null; // dbData가 null 또는 비어있을 경우 null 반환
        }
        // dbData가 Authority Enum의 name과 일치하는 값을 찾음
        try {
            return Authority.valueOf(dbData); // String 값을 Enum으로 변환
        } catch (IllegalArgumentException e) {
            // dbData가 유효한 Authority 값이 아니면 예외 처리
            throw new IllegalArgumentException("Invalid PostCategory value: " + dbData);
        }
    }
}









