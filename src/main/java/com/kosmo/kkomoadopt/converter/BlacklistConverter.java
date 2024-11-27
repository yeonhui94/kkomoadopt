package com.kosmo.kkomoadopt.converter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kosmo.kkomoadopt.dto.BlacklistDTO;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

@Converter
public class BlacklistConverter implements AttributeConverter<List<BlacklistDTO>, String> {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(List<BlacklistDTO> blacklists) {
        if (blacklists == null) {
            return null;
        }
        try {
            String json = objectMapper.writeValueAsString(blacklists);
            return json;
        } catch (JsonProcessingException e) {
            throw new IllegalArgumentException("JSON writing error", e);
        }
    }


@Override
public List<BlacklistDTO> convertToEntityAttribute(String s) {
    if (s == null || s.isEmpty()) {
        return new ArrayList<>();
    }
    try {
        List<BlacklistDTO> blacklists = objectMapper.readValue(s, objectMapper.getTypeFactory().constructCollectionType(List.class, BlacklistDTO.class));
        return blacklists;
    } catch (JsonProcessingException e) {
        throw new IllegalArgumentException("JSON reading error", e);
    }
}

}