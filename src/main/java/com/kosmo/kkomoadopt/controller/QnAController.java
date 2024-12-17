package com.kosmo.kkomoadopt.controller;
import com.kosmo.kkomoadopt.dto.*;
import com.kosmo.kkomoadopt.enums.Authority;
import com.kosmo.kkomoadopt.enums.NoticeCategory;
import com.kosmo.kkomoadopt.service.QnAService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/qna")
@RequiredArgsConstructor
public class QnAController {

    private final QnAService qnAService;

    // 마이페이지에서 qna 전체 가져오기
    @GetMapping("mypage")
    public ResponseEntity<List<QnAMypageDTO>> getMypageAll(){

        List<QnAMypageDTO> result = qnAService.getMypageQnaList();

        // 상태 코드 200 OK와 함께 반환
        return ResponseEntity.ok(result);
    }

    @PostMapping("/save")
    public ResponseEntity<?> createNotices(
            @ModelAttribute QnADTO qnADTO,
            @RequestParam(value = "files", required = false) MultipartFile[] files, // 파일 필수 아님
            HttpServletRequest request) {

        // 세션에서 권한 값 가져오기
        HttpSession session = request.getSession();
        Authority authority = (Authority) session.getAttribute("authority");
        String sessionUserId = (String) session.getAttribute("userId"); // 현재 로그인한 사용자 ID
        // 권한 체크
        if (authority == null || !authority.equals(Authority.USER)) {
            return new ResponseEntity<>("권한이 없습니다.", HttpStatus.FORBIDDEN);
        }
        // QnA 저장
        boolean result = qnAService.saveQnA(qnADTO, files, sessionUserId); // files가 null이어도 처리 가능하도록 서비스 수정 필요
        // 결과 반환
        if (result) {
            return new ResponseEntity<>("QnA 작성이 완료되었습니다.", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("QnA 작성에 실패했습니다.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //QnA  답변(update) (관리자의 답변)
    @PutMapping("/update")
    public ResponseEntity<String> updateQna(
            @RequestBody QnADTO qnADTO, @RequestParam(value = "files", required = false) MultipartFile[] files,
            HttpServletRequest request) {

        // 세션에서 권한 값과 사용자 ID를 가져옴
        HttpSession session = request.getSession();
        Authority authority = (Authority) session.getAttribute("authority");
        String sessionUserId = (String) session.getAttribute("userId"); // 현재 로그인한 사용자 ID

        // 권한 확인: ADMIN만 접근 가능
        if (authority == null || (!authority.name().equals("ADMIN"))) {
            return new ResponseEntity<>("권한이 없습니다.", HttpStatus.FORBIDDEN);
        }
        //QnA 업데이트 로직 호출
        boolean updated = qnAService.updateQna(qnADTO, authority.name(), sessionUserId);
        if (updated) {
            return new ResponseEntity<>("QnA 업데이트 성공", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("QnA 업데이트 실패", HttpStatus.FORBIDDEN);
        }

    }

    // QnA 삭제 로직(USER 중에 자신이 쓴 QnA만 삭제가능)
    @DeleteMapping("/delete/{qnaUid}")
    public ResponseEntity<String> deleteQna(
            @PathVariable(name = "qnaUid") String qnaUid,
            @SessionAttribute("userId") String userId,
            HttpServletRequest request) {

        // 1. 세션에서 권한 값과 사용자 ID를 가져옴
        HttpSession session = request.getSession();
        Authority authority = (Authority) session.getAttribute("authority");
        String sessionUserId = (String) session.getAttribute("userId"); // 현재 로그인한 사용자 ID

        // 2. 권한 확인: USER만 QnA 삭제 가능
        if (authority == null || !authority.name().equals("USER")) {
            return new ResponseEntity<>("권한이 없습니다.", HttpStatus.FORBIDDEN);
        }



        // 4. 본인이 작성한 QnA인지 확인 (1번 로직이 여기에 위치)
        boolean isAuthor = qnAService.isQnaAuthor(qnaUid, sessionUserId);
        if (!isAuthor) {
            return new ResponseEntity<>("본인이 작성한 글만 삭제할 수 있습니다.", HttpStatus.FORBIDDEN);
        }

        // 5. QnA 삭제 로직 호출
        boolean isDeleted = qnAService.deleteQnAByQnaUid(qnaUid, userId);

        // 6. 삭제 결과에 따라 적절한 응답 반환
        if (isDeleted) {
            return new ResponseEntity<>("QnA 삭제 완료", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("QnA 삭제 실패", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<Page<QnAListDTO>> getQnaList(@RequestParam(name = "page", defaultValue = "1") int page,   // 페이지 번호 (디폴트: 0)
                                                       @RequestParam(name = "sortBy", defaultValue = "qnaId") String sortBy,  // 정렬 기준 (디폴트: "name")
                                                       @RequestParam(name = "sortOrder", defaultValue = "desc") String sortOrder)  {
        try {

            Sort sort = Sort.by("desc".equals(sortOrder)?Sort.Order.desc(sortBy):Sort.Order.asc(sortBy));  // 기본 정렬은 오름차순

            Pageable pageable = PageRequest.of(page-1,10,sort);

            Page<QnAListDTO> qnaList = qnAService.getQnaList(pageable);  // 페이지네이e션 없이 모든 데이터를 가져옴
            return ResponseEntity.ok(qnaList);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    
    // QnA 상세페이지 가져오기
    @GetMapping("/{qnaUid}")
    public ResponseEntity<QnAListDTO> getQnaPostUid(@PathVariable(name = "qnaUid") String qnaUid) {
        QnAListDTO qna = qnAService.getQnaPostUid(qnaUid);
        return ResponseEntity.ok(qna);
    }

}