package com.kosmo.kkomoadopt.controller;

import com.kosmo.kkomoadopt.dto.CommentDTO;
import com.kosmo.kkomoadopt.dto.VisitRequestDTO;
import com.kosmo.kkomoadopt.entity.CommunityPostEntity;
import com.kosmo.kkomoadopt.entity.VisitRequestEntity;
import com.kosmo.kkomoadopt.enums.Authority;
import com.kosmo.kkomoadopt.service.VisitRequestService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/visit")
@RequiredArgsConstructor
public class VisitRequestController {

    private final VisitRequestService visitRequestService;

    @PostMapping("/request")
    public ResponseEntity<String> createVisitRequest(
            @RequestBody VisitRequestDTO visitRequestDTO,
            HttpServletRequest request) {

        // 세션에서 'userId'와 'authority' 정보 가져오기
        HttpSession session = request.getSession();
        String userId = (String) session.getAttribute("userId");
        Authority authority = (Authority) session.getAttribute("authority");

        // 'userId'가 세션에 없으면 로그인되지 않은 상태
        if (userId == null || userId.trim().isEmpty()) {
            return new ResponseEntity<>("로그인이 필요합니다.", HttpStatus.UNAUTHORIZED); // 401 Unauthorized
        }

        // 권한 확인: "USER" 권한을 가진 사용자만 방문 신청 가능
        if (authority == null || !authority.equals(Authority.USER)) {
            return new ResponseEntity<>("권한이 없습니다.", HttpStatus.FORBIDDEN); // 403 Forbidden
        }

        // 방문 신청 처리
        Boolean result = visitRequestService.saveRequests(visitRequestDTO, userId);

        if (result) {
            return new ResponseEntity<>("방문 신청이 완료되었습니다.", HttpStatus.CREATED); // 201 Created
        } else {
            return new ResponseEntity<>("방문 신청에 실패했습니다.", HttpStatus.INTERNAL_SERVER_ERROR); // 500 Internal Server Error
        }
    }



}
