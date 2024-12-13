package com.kosmo.kkomoadopt.controller;

import com.kosmo.kkomoadopt.dto.CommentDTO;
import com.kosmo.kkomoadopt.dto.CommunityDTO;
import com.kosmo.kkomoadopt.entity.CommentEntity;
import com.kosmo.kkomoadopt.enums.Authority;
import com.kosmo.kkomoadopt.service.CommentService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/comment")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    //댓글 저장
    @PostMapping("/save")
    public ResponseEntity<Boolean> createComment(@RequestBody CommentDTO commentDTO) {
        Boolean result = commentService.saveComment(commentDTO);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    //댓글 업데이트 (수정)
    @PostMapping("/update")
    public ResponseEntity<String> updateComment(
            @RequestBody CommentDTO commentDTO, HttpServletRequest request) {

        // 세션에서 권한 값과 사용자 ID를 가져옴
        HttpSession session = request.getSession();
        Authority authority = (Authority) session.getAttribute("authority");
        String sessionUserId = (String) session.getAttribute("userId"); // 현재 로그인한 사용자 ID

        // 권한 확인: USER 또는 ADMIN만 접근 가능
        if (authority == null || (!authority.name().equals("USER") && !authority.name().equals("ADMIN"))) {
            return new ResponseEntity<>("권한이 없습니다.", HttpStatus.FORBIDDEN);
        }

        // 댓글 업데이트 로직 호출
        boolean updated = commentService.updateComment(commentDTO, authority.name(), sessionUserId);

        if (updated) {
            return new ResponseEntity<>("댓글 업데이트 성공", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("댓글 업데이트 실패", HttpStatus.FORBIDDEN);
        }
    }



    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteComment(@RequestBody CommentDTO commentDTO, HttpServletRequest request) {

        // 1. 세션에서 권한 값과 사용자 ID를 가져옴
        HttpSession session = request.getSession();
        Authority authority = (Authority) session.getAttribute("authority");
        String sessionUserId = (String) session.getAttribute("userId"); // 현재 로그인한 사용자 ID

        // 2. 권한 확인: USER만 댓글 삭제 가능
        if (authority == null || !authority.name().equals("USER")) {
            return new ResponseEntity<>("권한이 없습니다.", HttpStatus.FORBIDDEN);
        }

        // 3. 댓글 ID를 DTO에서 가져옴
        String commentId = commentDTO.commentId();

        // 4. 본인이 작성한 댓글인지 확인 (1번 로직이 여기에 위치)
        boolean isAuthor = commentService.isCommentAuthor(commentId, sessionUserId);
        if (!isAuthor) {
            return new ResponseEntity<>("본인이 작성한 댓글만 삭제할 수 있습니다.", HttpStatus.FORBIDDEN);
        }

        // 5. 댓글 삭제 로직 호출
        boolean isDeleted = commentService.deleteCommentByCommentId(commentId);

        // 6. 삭제 결과에 따라 적절한 응답 반환
        if (isDeleted) {
            return new ResponseEntity<>("댓글 삭제 완료", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("댓글 삭제 실패", HttpStatus.NOT_FOUND);
        }
    }

}
