package com.kosmo.kkomoadopt.controller;

import com.kosmo.kkomoadopt.dto.*;
import com.kosmo.kkomoadopt.enums.Authority;
import com.kosmo.kkomoadopt.enums.NoticeCategory;
import com.kosmo.kkomoadopt.service.AdoptionNoticeService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/adopt")
@RequiredArgsConstructor
public class AdoptionNoticeController {

    @Autowired
    private final AdoptionNoticeService adoptionNoticeService;

    // 마이페이지에서 입양 글 전체 가져오기
    @GetMapping("/mypage")
    public ResponseEntity<List<AdoptMypageDTO>> getMypageAll(){

        List<AdoptMypageDTO> result = adoptionNoticeService.getMypageAllList();

        // 상태 코드 200 OK와 함께 반환
        return ResponseEntity.ok(result);
    }

    // 입양공지 조건별 검색(8개) 관리자페이지
    @GetMapping("/list8")
    public ResponseEntity<AdoptNoticeListDTO> getAdminAdoptLists(
            @RequestParam(name = "page", defaultValue = "1") int page,   // 페이지 번호 (디폴트: 0)
            @RequestParam(name = "noticeCategory") NoticeCategory noticeCategory,  // 카테고리 (선택 사항)
            @RequestParam(name = "sortBy", defaultValue = "ADOPTABLE") String sortBy,  // 정렬 기준 (디폴트: "name")
            HttpServletRequest request) {  // 정렬 순서 (디폴트: "asc")

        // 페이지와 정렬 설정
        Sort sort = Sort.by(Sort.Order.asc(sortBy));  // 기본 정렬은 오름차순

        // size를 고정값 12로 설정
        int size = 8;

        Pageable pageable = PageRequest.of(page, size, sort);

        AdoptNoticeListDTO result;
        // 카테고리 필터링 처리
        if (NoticeCategory.ALL.equals(noticeCategory)) {
            result = adoptionNoticeService.getNotices(pageable);  // 카테고리 없이 전체 아이템 반환
        } else {
            result = adoptionNoticeService.getNoticesByCategory(noticeCategory, pageable);
        }

        result = adoptionNoticeService.getUserScrapMappingList(result,request);

        // 상태 코드 200 OK와 함께 반환
        return ResponseEntity.ok(result);
    }

    // 입양공지 조건별 검색(12개) 메인페이지
    @GetMapping("/list")
    public ResponseEntity<AdoptNoticeListDTO> getLists(
            @RequestParam(name = "page", defaultValue = "1") int page,   // 페이지 번호 (디폴트: 0)
            @RequestParam(name = "noticeCategory") NoticeCategory noticeCategory,  // 카테고리 (선택 사항)
            @RequestParam(name = "sortBy", defaultValue = "euthanasiaDate") String sortBy,  // 정렬 기준 (디폴트: "name")
            @RequestParam(name = "sortOrder", defaultValue = "desc") String sortOrder,
            @RequestParam(name = "euthanasiaDate", required = false) LocalDate euthanasiaDate, // 입양 종료일 (선택 사항)
            HttpServletRequest request) {  // 정렬 순서 (디폴트: "asc")

        // 현재 날짜 가져오기
        LocalDate today = LocalDate.now();

        // 페이지와 정렬 설정
        Sort sort = Sort.by(Sort.Order.asc(sortBy));  // 기본 정렬은 오름차순
        if ("desc".equalsIgnoreCase(sortOrder)) {
            sort = Sort.by(Sort.Order.desc(sortBy));
        }

        // size를 고정값 12로 설정
        int size = 12;

        Pageable pageable = PageRequest.of(page, size, sort);

        AdoptNoticeListDTO result;
        // 카테고리 필터링 처리
        if (NoticeCategory.ALL.equals(noticeCategory)) {
                // euthanasiaDate가 오늘일 때
                result = adoptionNoticeService.getNoticesDateNow(today, pageable);  // 종료일을 직접 받았을 때
        } else {
                // 카테고리가 특정 값일 때
                // euthanasiaDate가 오늘일 때
                result = adoptionNoticeService.getNoticesByCategoryDateNow(noticeCategory, today, pageable);  // 카테고리 + 종료일 필터링
        }
        result = adoptionNoticeService.getUserScrapMappingList(result,request);

        // 상태 코드 200 OK와 함께 반환
        return ResponseEntity.ok(result);
    }

    // 검색어로 공고 조회
    @GetMapping("/search")
    public ResponseEntity<AdoptNoticeListDTO> searchNotices(
            @RequestParam(name = "page", defaultValue = "1") int page,   // 페이지 번호 (디폴트: 0)
            @RequestParam(name = "noticeCategory") NoticeCategory noticeCategory,  // 카테고리 (선택 사항)
            @RequestParam(name = "search") String search,  // 카테고리 (선택 사항)
            @RequestParam(name = "sortBy", defaultValue = "euthanasiaDate") String sortBy,  // 정렬 기준 (디폴트: "name")
            @RequestParam(name = "sortOrder", defaultValue = "desc") String sortOrder,
            @RequestParam(name = "euthanasiaDate", required = false) LocalDate euthanasiaDate, // 입양 종료일 (선택 사항)
            HttpServletRequest request) {  // 정렬 순서 (디폴트: "asc")

        // 현재 날짜 가져오기
        LocalDate today = LocalDate.now();

        // 페이지와 정렬 설정
        Sort sort = Sort.by(Sort.Order.asc(sortBy));  // 기본 정렬은 오름차순
        if ("desc".equalsIgnoreCase(sortOrder)) {
            sort = Sort.by(Sort.Order.desc(sortBy));
        }
        Pageable pageable = PageRequest.of(page - 1, 12,sort);
        AdoptNoticeListDTO result = adoptionNoticeService.searchNoticesDateNow(search,noticeCategory, pageable, today);

        result = adoptionNoticeService.getUserScrapMappingList(result,request);

        return ResponseEntity.ok(result);
    }

    // 입양 공고 상세페이지
    @GetMapping("/{announcementNum}")
    public ResponseEntity<AdoptNoticeDTO> getAnnouncementNum(@PathVariable("announcementNum") String announcementNum){
        AdoptNoticeDTO adoptNoticeDTO = adoptionNoticeService.getAnnouncementNum(announcementNum);
        return ResponseEntity.ok(adoptNoticeDTO);
    }

    // 입양공지글 등록 (session에서 authority 확인)
    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> createNotices(
            @ModelAttribute AdoptNoticeDTO adoptNoticeDTO,
            @RequestParam(name="files", required = false) MultipartFile[] files,
            HttpServletRequest request) {

//        // 세션에서 권한 값 가져오기
//        HttpSession session = request.getSession();
//        Authority authority = (Authority) session.getAttribute("authority");  // 세션에서 authority 값을 가져옴
//
//        // authority가 ADMIN인 경우에만 글 작성 가능
//        if (authority == null || !authority.name().equals("ADMIN")) {
//            return new ResponseEntity<>(false, HttpStatus.FORBIDDEN); // 권한 없을 경우 403 응답
//        }
        Boolean result = adoptionNoticeService.saveNotice(adoptNoticeDTO, files);
        // 응답 객체를 Map으로 만들어서 반환
        Map<String, Object> response = new HashMap<>();
        response.put("success", result);  // 'success' 속성을 추가
        System.out.println("Response: " + response); // 로그 출력

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PostMapping("/update")
    public ResponseEntity<String> updateNotice(
            @ModelAttribute AdoptNoticeDTO adoptNoticeDTO,
            @RequestParam("files") MultipartFile[] files,
            HttpServletRequest request) {

        // 세션에서 권한 값 가져오기
        HttpSession session = request.getSession();
        Authority authority = (Authority) session.getAttribute("authority");  // 세션에서 authority 값을 가져옴

        // authority가 ADMIN인 경우에만 글 작성 가능
        if (authority == null || !authority.name().equals("ADMIN")) {
            return new ResponseEntity<>("권한이 없습니다.", HttpStatus.FORBIDDEN);
        }

        // 입양공지 업데이트
        boolean updated = adoptionNoticeService.updateAdoptNotice(adoptNoticeDTO, files);

        if (updated) {
            return new ResponseEntity<>("입양공지 업데이트 성공", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("입양공지 업데이트 실패", HttpStatus.BAD_REQUEST);
        }
    }

    // 삭제 로직
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteAdoptionNotice(@RequestBody AdoptNoticeDTO adoptNoticeDTO) {
        // DTO에서 postUid를 가져와 삭제 처리
        String postUid = adoptNoticeDTO.noticeUid();  // 레코드에서는 getter 메서드가 자동으로 생성됩니다.

        // 삭제 처리
        boolean isDeleted = adoptionNoticeService.deleteAdoptionNoticeByPostUid(postUid);

        if (isDeleted) {
            return new ResponseEntity<>("게시글 삭제 완료", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("게시글 삭제 실패", HttpStatus.NOT_FOUND);
        }
    }
}
