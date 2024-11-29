package com.kosmo.kkomoadopt.converter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.kosmo.kkomoadopt.dto.BlacklistDTO;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.io.IOException;
import java.util.List;

@Converter
public class BlacklistConverter implements AttributeConverter<List<BlacklistDTO>, String> {

    private final ObjectMapper objectMapper;

    // 생성자에서 ObjectMapper를 초기화하고 JavaTimeModule을 등록
    public BlacklistConverter() {
        this.objectMapper = new ObjectMapper();
        this.objectMapper.registerModule(new JavaTimeModule());  // LocalDateTime 처리
    }

    @Override
    public String convertToDatabaseColumn(List<BlacklistDTO> attribute) {
        try {
            if (attribute == null) {
                return null; // null 처리 (예: DB에 null 저장)
            }
            // List<BlacklistDTO>를 JSON 문자열로 변환
            return objectMapper.writeValueAsString(attribute);
        } catch (IOException e) {
            throw new IllegalArgumentException("Error converting List<BlacklistDTO> to JSON", e);
        }
    }

    @Override
    public List<BlacklistDTO> convertToEntityAttribute(String dbData) {
        try {
            if (dbData == null) {
                return null;  // null 처리 (예: DB에서 null 값 처리)
            }
            // JSON 문자열을 List<BlacklistDTO>로 변환
            return objectMapper.readValue(dbData, objectMapper.getTypeFactory().constructCollectionType(List.class, BlacklistDTO.class));
        } catch (IOException e) {
            throw new IllegalArgumentException("Error converting JSON to List<BlacklistDTO>", e);
        }
    }
}