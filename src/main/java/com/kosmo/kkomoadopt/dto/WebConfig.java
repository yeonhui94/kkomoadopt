package com.kosmo.kkomoadopt.dto;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // React 개발 서버 주소 허용
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")  // React 개발 서버 주소
                .allowedMethods("GET", "POST", "PUT", "DELETE");  // 허용할 HTTP 메서드 설정
    }
}