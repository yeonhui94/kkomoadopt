package com.kosmo.kkomoadopt.converter;

import com.kosmo.kkomoadopt.dto.AdoptStatus;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class AdoptStatusConverter implements AttributeConverter<AdoptStatus, String> {

    @Override
    public String convertToDatabaseColumn(AdoptStatus adoptStatus) {
        if (adoptStatus == null) {
            return null; // null인 경우 데이터베이스에 null을 저장
        }
        // Enum의 name을 반환 (String 값으로 변환)
        return adoptStatus.name(); // AdoptStatus Enum의 name() 값을 반환
    }

    @Override
    public AdoptStatus convertToEntityAttribute(String dbData) {
        if (dbData == null || dbData.isEmpty()) {
            return null; // dbData가 null 또는 비어있을 경우 null 반환
        }
        // dbData가 AdoptStatus Enum의 name과 일치하는 값을 찾음
        try {
            return AdoptStatus.valueOf(dbData); // String 값을 Enum으로 변환
        } catch (IllegalArgumentException e) {
            // dbData가 유효한 AdoptStatus 값이 아니면 예외 처리
            throw new IllegalArgumentException("Invalid PostCategory value: " + dbData);
        }
    }
}



