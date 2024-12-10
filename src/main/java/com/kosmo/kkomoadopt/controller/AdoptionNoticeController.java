package com.kosmo.kkomoadopt.controller;

import com.kosmo.kkomoadopt.dto.*;
import com.kosmo.kkomoadopt.service.AdoptionNoticeService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/adopt")
@RequiredArgsConstructor
public class AdoptionNoticeController {

    private final AdoptionNoticeService adoptionNoticeService;

    // 전체 입양공지 불러오기(12개씩)
    @GetMapping("/{pageNum}")
    public ResponseEntity<AdoptNoticeListDTO> getNotices1(@PathVariable("pageNum") int pageNum) {

        // 해당 카테고리와 페이지 번호를 기반으로 게시글 리스트 조회
        AdoptNoticeListDTO adoptNoticeListDTO = adoptionNoticeService.getListAdoptNotice1(pageNum);
        return new ResponseEntity<>(adoptNoticeListDTO, HttpStatus.OK);
    }

    // category에 따른 게시글 불러오기(12개씩)
    @GetMapping("/{noticeCategoryString}/{pageNum}")
    public ResponseEntity<AdoptNoticeListDTO> getNotices2(
            @PathVariable("noticeCategoryString") String noticeCategoryString,
            @PathVariable("pageNum") int pageNum) {

        // URL에서 받은 문자열을 NoticeCategory Enum으로 변환
        NoticeCategory noticeCategory;
        try {
            noticeCategory = NoticeCategory.valueOf(noticeCategoryString.toUpperCase());
        } catch (IllegalArgumentException e) {
            // 잘못된 카테고리 이름이 들어왔을 경우 처리
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        // 해당 카테고리와 페이지 번호를 기반으로 게시글 리스트 조회
        AdoptNoticeListDTO adoptNoticeListDTO = adoptionNoticeService.getListAdoptNotice2(noticeCategory, pageNum);
        return new ResponseEntity<>(adoptNoticeListDTO, HttpStatus.OK);
    }

    // 입양공지글 등록 (session에서 authority 확인)
    @PostMapping("/save")
    public ResponseEntity<Boolean> createNotices(
            @ModelAttribute AdoptNoticeDTO adoptNoticeDTO,
            @RequestParam("files") MultipartFile[] files,
            HttpServletRequest request) {

        // 세션에서 권한 값 가져오기
        HttpSession session = request.getSession();
        Authority authority = (Authority) session.getAttribute("authority");  // 세션에서 authority 값을 가져옴

        // authority가 ADMIN인 경우에만 글 작성 가능
        if (authority == null || !authority.name().equals("ADMIN")) {
            return new ResponseEntity<>(false, HttpStatus.FORBIDDEN); // 권한 없을 경우 403 응답
        }

        // ADMIN 권한이면 공지글 저장 처리
        Boolean result = adoptionNoticeService.saveNotice(adoptNoticeDTO, files);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
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
