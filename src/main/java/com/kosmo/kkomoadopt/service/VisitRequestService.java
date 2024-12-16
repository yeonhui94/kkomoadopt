package com.kosmo.kkomoadopt.service;

import com.kosmo.kkomoadopt.dto.VisitRequestDTO;
import com.kosmo.kkomoadopt.entity.CommunityPostEntity;
import com.kosmo.kkomoadopt.entity.VisitRequestEntity;
import com.kosmo.kkomoadopt.repository.VisitRequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.SessionAttribute;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class VisitRequestService {

    private final VisitRequestRepository visitRequestRepository;

    // 방문 신청 저장
    public Boolean saveRequests(VisitRequestDTO visitRequestDTO, @SessionAttribute("userId") String userId) {
        // 신청 정보를 저장
        VisitRequestEntity visitRequestEntity = new VisitRequestEntity();

        // requestId 설정 (DB에서 maxRequestId를 조회하여 자동 증가)
        Integer maxRequestId = visitRequestRepository.findMaxRequestId();
        visitRequestEntity.setRequestId(maxRequestId == null ? 1 : maxRequestId + 1); // 첫 번째 게시물의 ID는 1

        visitRequestEntity.setVisitDate(visitRequestDTO.visitDate());
        visitRequestEntity.setVisitContent(visitRequestDTO.visitContent());
        visitRequestEntity.setPhoneNum(visitRequestDTO.phoneNum());
        visitRequestEntity.setVisitTime(visitRequestDTO.visitTime());
        visitRequestEntity.setVisitPurpose(visitRequestDTO.visitPurpose());
        visitRequestEntity.setVisitCreatedAt(LocalDateTime.now()); // 기본값
        visitRequestEntity.setUserId(userId); // 사용자 ID (세션에서 받아온 ID)

        // 방문 신청 정보 DB에 저장
        try {
            visitRequestRepository.save(visitRequestEntity);
            return true;  // 성공적으로 저장되면 true 반환
        } catch (Exception e) {
            // 예외 처리: DB 저장 실패 시
            e.printStackTrace();
            return false;  // 실패 시 false 반환
        }
    }
}
