package com.kosmo.kkomoadopt.service;

import com.kosmo.kkomoadopt.dto.*;
import com.kosmo.kkomoadopt.entity.AdoptionNoticeEntity;
import com.kosmo.kkomoadopt.entity.CommunityPostEntity;
import com.kosmo.kkomoadopt.entity.UserEntity;
import com.kosmo.kkomoadopt.entity.VisitRequestEntity;
import com.kosmo.kkomoadopt.repository.UserRepository;
import com.kosmo.kkomoadopt.repository.VisitRequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.SessionAttribute;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class VisitRequestService {

    @Autowired
    private final VisitRequestRepository visitRequestRePository;
    @Autowired
    private final UserRepository userRepository;

    // 전체 게시물 가져오기(페이지별)
    public VisitRequestListDTO getRequests(Pageable pageable) {
        Page<VisitRequestEntity> visitRequestPage = visitRequestRePository.findAll(pageable);

        // userId 목록을 수집
        List<String> userIds = visitRequestPage.getContent().stream()
                .map(VisitRequestEntity::getUserId)  // 방문 요청에서 userId만 추출
                .distinct()  // 중복 제거
                .collect(Collectors.toList());

        // 여러 userId에 대한 UserEntity를 한 번에 조회
        List<UserEntity> users = userRepository.findByUserIdIn(userIds);

        // userId -> 닉네임 매핑
        Map<String, String> userNicknameMap = users.stream()
                .collect(Collectors.toMap(UserEntity::getUserId, UserEntity::getNickname));

        // 결과를 DTO로 변환
        List<VisitRequestListDTO.Visit> requests = visitRequestPage.getContent().stream()
                .map(entity -> convertToVisitRequestListDTO(entity, userNicknameMap))
                .collect(Collectors.toList());

        // DTO를 리턴
        return new VisitRequestListDTO(
                requests,
                visitRequestPage.getTotalElements(),
                visitRequestPage.getNumber());
    }

    // VisitRequestListDTO 변환 함수 (닉네임을 이미 매핑된 맵에서 가져옴)
    private VisitRequestListDTO.Visit convertToVisitRequestListDTO(VisitRequestEntity entity, Map<String, String> userNicknameMap) {

        String nickname = userNicknameMap.getOrDefault(entity.getUserId(), "Nickname not found");

        return new VisitRequestListDTO.Visit(
                entity.getRequestUid(),
                entity.getRequestId(),
                entity.getPhoneNum(),
                entity.getVisitDate(),
                entity.getVisitTime(),
                entity.getVisitPurpose(),
                nickname
        );
    }

    // 방문 신청 저장
    public Boolean saveRequests(VisitRequestDTO visitRequestDTO, @SessionAttribute("userId") String userId) {
        // 신청 정보를 저장
        VisitRequestEntity visitRequestEntity = new VisitRequestEntity();

        // requestId 설정 (DB에서 maxRequestId를 조회하여 자동 증가)
        Integer maxRequestId = visitRequestRePository.findMaxRequestId();
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
            visitRequestRePository.save(visitRequestEntity);
            return true;  // 성공적으로 저장되면 true 반환
        } catch (Exception e) {
            // 예외 처리: DB 저장 실패 시
            e.printStackTrace();
            return false;  // 실패 시 false 반환
        }
    }

    // VisitRequestMypageDTO 변환 함수
    private VisitRequestMypageDTO convertToVisitRequestDTO(VisitRequestEntity entity) {
        return new VisitRequestMypageDTO(
                entity.getRequestUid(),
                entity.getRequestId(),
                entity.getPhoneNum(),
                entity.getVisitDate(),
                entity.getVisitPurpose(),
                entity.getUserId()
        );
    }

    // 마이페이지 VisitRequest 전체 데이터 불러오기
    public List<VisitRequestMypageDTO> getMypageVisitRequestList(){
        List<VisitRequestEntity> visitRequestEntities = visitRequestRePository.findAll();

        // VisitRequestEntity 객체를 VisitRequestMypageDTO 변환
        return visitRequestEntities.stream()
                .map(this::convertToVisitRequestDTO)  // convertToVisitRequestDTO 변환
                .collect(Collectors.toList());  // List로 수집
    }
}
