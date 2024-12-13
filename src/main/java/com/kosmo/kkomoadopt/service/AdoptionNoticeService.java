package com.kosmo.kkomoadopt.service;

import com.kosmo.kkomoadopt.dto.*;
import com.kosmo.kkomoadopt.entity.AdoptionNoticeEntity;
import com.kosmo.kkomoadopt.entity.UserEntity;
import com.kosmo.kkomoadopt.enums.AdoptStatus;
import com.kosmo.kkomoadopt.enums.NoticeCategory;
import com.kosmo.kkomoadopt.repository.AdoptionNoticeRepository;
import com.kosmo.kkomoadopt.repository.UserRepository;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class AdoptionNoticeService {

    private final AdoptionNoticeRepository adoptionNoticeRepository;
    private final FileService fileService;
    private final UserRepository userRepository;

    // post save 메서드
    public boolean saveNotice(AdoptNoticeDTO adoptNoticeDTO, MultipartFile[] files)  {

        AdoptionNoticeEntity adoptionNoticeEntity = new AdoptionNoticeEntity();

        // nickname을 통해 UserEntity를 찾기
        String nickname = adoptNoticeDTO.adoptionAuthor();
        UserEntity userEntity = userRepository.findByNickname(nickname);

        // nickname에 해당하는 UserEntity가 없을 경우 처리
        if (userEntity == null) {
            // 예외 처리 또는 로깅
            throw new RuntimeException("User with the nickname " + nickname + " not found");
        }

        // 엔티티 설정
        adoptionNoticeEntity.setAdoptionAuthor(userEntity.getNickname());
        adoptionNoticeEntity.setNoticeCategory(adoptNoticeDTO.noticeCategory());
        adoptionNoticeEntity.setNoticeContent(adoptNoticeDTO.noticeContent());
        adoptionNoticeEntity.setNoticeTitle(adoptNoticeDTO.noticeTitle());
        adoptionNoticeEntity.setAdoptStatus(AdoptStatus.ADOPTABLE);
        adoptionNoticeEntity.setAnnouncementNum(adoptNoticeDTO.announcementNum());
        adoptionNoticeEntity.setUniqueNum(adoptNoticeDTO.uniqueNum());
        adoptionNoticeEntity.setEuthanasiaDate(adoptNoticeDTO.euthanasiaDate());
        adoptionNoticeEntity.setAnimalType(adoptNoticeDTO.animalType());
        adoptionNoticeEntity.setNoticeCreatedAt(LocalDateTime.now()); // 기본값 설정
        adoptionNoticeEntity.setNoticeUpdatedAt(LocalDateTime.now()); // 기본값 설정
        adoptionNoticeEntity.setImpossibleReason(""); // 기본값 설정

        String[] fileNames = null;
        try {
            fileNames = fileService.saveFiles(files);
        }catch (IOException e) {
            e.printStackTrace();
        }

        if(fileNames != null) {
            adoptionNoticeEntity.setNoticeImgUrl( Arrays.stream(fileNames).toList());
        }
        adoptionNoticeEntity =  adoptionNoticeRepository.save(adoptionNoticeEntity);

        if(adoptionNoticeEntity != null) {
            return true;
        } else {
            return false;
        }
    }

    // 전체 게시물 가져오기
    public AdoptNoticeListDTO getNotices(Pageable pageable) {
        Page<AdoptionNoticeEntity> adoptionNoticePage = adoptionNoticeRepository.findAll(pageable);

        // 결과를 DTO로 변환
        List<AdoptNoticeListDTO.Notice> notices = adoptionNoticePage.getContent().stream()
                .map(this::convertToNoticeDTO)
                .collect(Collectors.toList());

        // DTO를 리턴
        return new AdoptNoticeListDTO(notices, adoptionNoticePage.getTotalElements(), adoptionNoticePage.getNumber());
    }

    // 카테고리로 입양 공고 가져오기
    public AdoptNoticeListDTO getNoticesByCategory(NoticeCategory noticeCategory, Pageable pageable) {
        Page<AdoptionNoticeEntity> adoptionNoticePage = adoptionNoticeRepository.findByCategory(noticeCategory, pageable);

        // 결과를 DTO로 변환
        List<AdoptNoticeListDTO.Notice> notices = adoptionNoticePage.getContent().stream()
                .map(this::convertToNoticeDTO)
                .collect(Collectors.toList());

        // DTO를 리턴
        return new AdoptNoticeListDTO(notices, adoptionNoticePage.getTotalElements(), adoptionNoticePage.getNumber());
    }

    // 검색어로 입양 공고 조회
    public AdoptNoticeListDTO searchNotices(String searchTerm, Pageable pageable) {
        Page<AdoptionNoticeEntity> adoptionNoticePage = adoptionNoticeRepository.findBySearchTerm(searchTerm, pageable);

        // 결과를 DTO로 변환
        List<AdoptNoticeListDTO.Notice> notices = adoptionNoticePage.getContent().stream()
                .map(this::convertToNoticeDTO)
                .collect(Collectors.toList());

        return new AdoptNoticeListDTO(notices, adoptionNoticePage.getTotalElements(), adoptionNoticePage.getNumber() + 1);
    }

    // DTO 변환 함수
    private AdoptNoticeListDTO.Notice convertToNoticeDTO(AdoptionNoticeEntity entity) {
        return new AdoptNoticeListDTO.Notice(
                entity.getNoticeUid(),
                entity.getNoticeCategory(),
                entity.getNoticeTitle(),
                entity.getNoticeContent(),
                entity.getAnimalType(),
                entity.getAdoptStatus(),
                entity.getAnnouncementNum(),
                entity.getUniqueNum(),
                entity.getNoticeCreatedAt(),
                entity.getNoticeImgUrl(),
                entity.getEuthanasiaDate(),
                entity.getImpossibleReason(),
                entity.getNoticeViewCount(),
                entity.getAdoptionAuthor()
        );
    }
//    // 전체 게시물 12개씩 가져오기
//    public AdoptNoticeListDTO getListAdoptNotice1(int pageNum, String order) {
//        // 기본적으로 noticeCreatedAt DESC (최신순)으로 설정
//        String orderByClause = "a.noticeCreatedAt DESC";
//
//        // order 값에 따라 정렬 기준 변경
//        if ("공고마감순".equals(order)) {
//            orderByClause = "a.euthanasiaDate DESC";  // 공고 마감순 (euthanasiaDate 내림차순)
//        } else if ("오래된순".equals(order)) {
//            orderByClause = "a.noticeCreatedAt ASC";  // 오래된 순 (noticeCreatedAt 오름차순)
//        } else if ("최신순".equals(order)) {
//            orderByClause = "a.noticeCreatedAt DESC";  // 최신순 (noticeCreatedAt 내림차순)
//        } else if ("조회수높은순".equals(order)) {
//            orderByClause = "a.noticeViewCount DESC";  // 조회수 높은 순 (noticeViewCount 내림차순)
//        } else if ("조회수낮은순".equals(order)) {
//            orderByClause = "a.noticeViewCount ASC";  // 조회수 낮은 순 (noticeViewCount 오름차순)
//        }
//
//        List<AdoptionNoticeEntity> adoptionNoticeEntities = em.createQuery(
//                        "SELECT a FROM AdoptionNoticeEntity a ORDER BY " + orderByClause, AdoptionNoticeEntity.class)
//                .setFirstResult((pageNum - 1) * 12)  // 페이지네이션
//                .setMaxResults(12)  // 한 페이지에 10개씩
//                .getResultList();
//
//        // 게시글 정보를 AdoptNoticeDTO.Notice 형식으로 변환
//        List<AdoptNoticeListDTO.Notice> noticeDtos = new ArrayList<>();
//        for (AdoptionNoticeEntity notice : adoptionNoticeEntities) {
//            String userId = notice.getAdoptionAuthor();
//            UserEntity user = userRepository.findById(userId).orElse(null);
//            String nickname = (user != null) ? user.getNickname() : "닉네임과 일치하는 사용자 없음";
//
//            // AdoptNoticeDTO.Notice 변환
//            AdoptNoticeListDTO.Notice noticeDto = new AdoptNoticeListDTO.Notice(
//                    notice.getNoticeUid(),
//                    notice.getNoticeCategory(),
//                    notice.getNoticeTitle(),
//                    notice.getNoticeContent(),
//                    notice.getAnimalType(),
//                    notice.getAdoptStatus(),
//                    notice.getAnnouncementNum(),
//                    notice.getUniqueNum(),
//                    notice.getNoticeCreatedAt(),
//                    notice.getNoticeImgUrl(),
//                    notice.getEuthanasiaDate(),
//                    notice.getImpossibleReason(),
//                    notice.getNoticeViewCount(),
//                    notice.getAdoptionAuthor()
//            );
//            noticeDtos.add(noticeDto);
//        }
//        // 전체 게시글 수 가져오기
//        long totalCnt = (long)em.createQuery("SELECT count(a) FROM AdoptionNoticeEntity a")
//                .getSingleResult();
//
//        // 결과를 AdoptNoticeDTO에 담아서 반환
//        return new AdoptNoticeListDTO(noticeDtos, totalCnt, pageNum);
//    }
//
//    // category 별 게시물 12개씩 가져오기
//    public AdoptNoticeListDTO getListAdoptNotice2(NoticeCategory noticeCategory, int pageNum) {
//        // 사용자 닉네임 가져오기
//        List<AdoptionNoticeEntity> adoptionNoticeEntities = em.createQuery(
//                        "select a from AdoptionNoticeEntity a where a.noticeCategory = :category ORDER BY a.noticeCreatedAt", AdoptionNoticeEntity.class)
//                .setParameter("category", noticeCategory)  // category를 바인딩
//                .setFirstResult((pageNum - 1) * 12)  // 페이지네이션
//                .setMaxResults(12)  // 한 페이지에 10개씩
//                .getResultList();
//
//        // 게시글 정보를 AdoptNoticeDTO.Notice 형식으로 변환
//        List<AdoptNoticeListDTO.Notice> noticeDtos = new ArrayList<>();
//        for (AdoptionNoticeEntity notice : adoptionNoticeEntities) {
//            String userId = notice.getAdoptionAuthor();
//            UserEntity user = userRepository.findById(userId).orElse(null);
//            String nickname = (user != null) ? user.getNickname() : "닉네임과 일치하는 사용자 없음";
//
//            // AdoptNoticeDTO.Notice 변환
//            AdoptNoticeListDTO.Notice noticeDto = new AdoptNoticeListDTO.Notice(
//                    notice.getNoticeUid(),
//                    notice.getNoticeCategory(),
//                    notice.getNoticeTitle(),
//                    notice.getNoticeContent(),
//                    notice.getAnimalType(),
//                    notice.getAdoptStatus(),
//                    notice.getAnnouncementNum(),
//                    notice.getUniqueNum(),
//                    notice.getNoticeCreatedAt(),
//                    notice.getNoticeImgUrl(),
//                    notice.getEuthanasiaDate(),
//                    notice.getImpossibleReason(),
//                    notice.getNoticeViewCount(),
//                    notice.getAdoptionAuthor()
//            );
//            noticeDtos.add(noticeDto);
//        }
//        // 전체 게시글 수 가져오기
//        long totalCnt = em.createQuery("select count(a) from AdoptionNoticeEntity a where a.noticeCategory = :category", Long.class)
//                .setParameter("category", noticeCategory)  // category를 바인딩
//                .getSingleResult();
//
//        // 결과를 AdoptNoticeDTO에 담아서 반환
//        return new AdoptNoticeListDTO(noticeDtos, totalCnt, pageNum);
//    }

    // 입양공지글 업데이트(announcementNum 기준)
    public boolean updateAdoptNotice(AdoptNoticeDTO adoptNoticeDTO, MultipartFile[] files) {
        // noticeUid를 가져와서 공지사항을 DB에서 찾기
        String noticeUid = adoptNoticeDTO.noticeUid(); // noticeUid로 검색

        // noticeUid로 공지사항 찾기
        Optional<AdoptionNoticeEntity> adoptionNoticeOptional = adoptionNoticeRepository.findByNoticeUid(noticeUid);

        if (adoptionNoticeOptional.isEmpty()) {
            return false; // 공지사항이 없으면 업데이트 실패
        }
        // 공지사항이 존재하는 경우
        AdoptionNoticeEntity adoptionNoticeEntity = adoptionNoticeOptional.get();

        // 공지사항 정보 업데이트
        adoptionNoticeEntity.setNoticeTitle(adoptNoticeDTO.noticeTitle());
        adoptionNoticeEntity.setNoticeContent(adoptNoticeDTO.noticeContent());
        adoptionNoticeEntity.setAnimalType(adoptNoticeDTO.animalType());
        adoptionNoticeEntity.setNoticeCategory(adoptNoticeDTO.noticeCategory());
        adoptionNoticeEntity.setAdoptionAuthor(adoptNoticeDTO.adoptionAuthor());
        adoptionNoticeEntity.setUniqueNum(adoptNoticeDTO.uniqueNum());
        adoptionNoticeEntity.setNoticeViewCount(adoptNoticeDTO.noticeViewCount());
        adoptionNoticeEntity.setEuthanasiaDate(adoptNoticeDTO.euthanasiaDate());

        // 이미지 파일이 제공되면 처리
        if (files != null && files.length > 0) {
            String[] fileNames = null;
            try {
                // 파일 저장 및 파일 이름 배열 반환
                fileNames = fileService.saveFiles(files);
            } catch (IOException e) {
                e.printStackTrace();
            }

            // 파일 이름이 반환되었으면, 이미지 URL을 공지사항에 설정
            if (fileNames != null) {
                List<String> fileUrls = Arrays.stream(fileNames).toList();
                adoptionNoticeEntity.setNoticeImgUrl(fileUrls);
            }
        }
        // noticeUpdatedAt을 현재 시간으로 갱신
        adoptionNoticeEntity.setNoticeUpdatedAt(LocalDateTime.now());

        // 수정된 공지사항 저장
        adoptionNoticeRepository.save(adoptionNoticeEntity);
        return true; // 업데이트 성공
    }

    // Service에서 삭제 처리 메서드
    @Transactional
    public boolean deleteAdoptionNoticeByPostUid(String noticeUid) {
        // 실제 삭제 로직 (Repository 사용)
        return adoptionNoticeRepository.deleteByNoticeUid(noticeUid) > 0;
    }

    // 안락사 날짜 이후 상태 자동 변경 메서드
    public void updateStatusIfEuthanasiaPassed() {
        // 안락사 날짜가 지난 공지사항들을 가져옴
        List<AdoptionNoticeEntity> adoptionNoticeEntities = adoptionNoticeRepository.findAll();

        for (AdoptionNoticeEntity notice : adoptionNoticeEntities) {
            // 안락사 날짜가 지나면 상태를 NOTADOPT로 변경
            if (notice.getEuthanasiaDate().isBefore(LocalDate.now()) && !notice.getAdoptStatus().equals(AdoptStatus.NOTADOPT)) {
                // 상태 업데이트
                notice.setAdoptStatus(AdoptStatus.NOTADOPT);
                adoptionNoticeRepository.save(notice); // 업데이트된 엔티티 저장
            }
        }
    }

    // @Scheduled를 이용하여 자동으로 상태 업데이트
    @Scheduled(cron = "0 0 0 * * ?")  // 자정마다 실행
    public void scheduledStatusUpdate() {
        updateStatusIfEuthanasiaPassed();
    }

    // 안락사 날짜가 지나고 NOTADOPT 상태인 공지사항 자동 삭제
    public void deleteExpiredNotAdoptNotices() {
        // NOTADOPT 상태이고, 안락사 날짜 이후 30일이 지난 공지사항 가져오기
        List<AdoptionNoticeEntity> expiredNotAdoptNotices = adoptionNoticeRepository.findAll();

        for (AdoptionNoticeEntity notice : expiredNotAdoptNotices) {
            // 상태가 NOTADOPT이고, 안락사 날짜 + 30일이 지난 공지사항을 삭제
            if (notice.getAdoptStatus() == AdoptStatus.NOTADOPT
                    && notice.getEuthanasiaDate().plusDays(30).isBefore(LocalDate.now())) {
                // 삭제
                adoptionNoticeRepository.delete(notice);
            }
        }
    }

    // @Scheduled를 이용하여 자동으로 삭제 작업을 수행
    @Scheduled(cron = "0 0 0 * * ?")  // 자정마다 실행
    public void scheduledDeleteExpiredNotAdoptNotices() {
        deleteExpiredNotAdoptNotices();
    }
}
