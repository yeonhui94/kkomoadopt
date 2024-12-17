package com.kosmo.kkomoadopt.converter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import java.util.List;

@Converter
public class UrlConverter implements AttributeConverter<List<String>, String> {
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(List<String> url) {
        if (url == null) {
            return null;  // null 처리: null일 경우 데이터베이스에 null로 저장
        }
        try {
            return objectMapper.writeValueAsString(url);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Error converting List<String> to String", e);
        }
    }

    @Override
    public List<String> convertToEntityAttribute(String u) {
        if (u == null) {
            return null;  // null 처리: null일 경우 List로 변환 시 null 반환
        }
        try {
            // TypeReference 사용하여 정확한 타입 지정
            return objectMapper.readValue(u, new TypeReference<List<String>>() {});
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Error converting String to List<String>", e);
        }
    }
}
