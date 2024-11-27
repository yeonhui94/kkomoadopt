package com.kosmo.kkomoadopt.converter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.util.List;

@Converter
public class ScrapConverter implements AttributeConverter<List<String>, String> {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(List<String> scraps) {
        if (scraps == null) {
            return null;
        }
        try {
            return objectMapper.writeValueAsString(scraps);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<String> convertToEntityAttribute(String s) {
        try {
            return objectMapper.readValue(s, List.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

}