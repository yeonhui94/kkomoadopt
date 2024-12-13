package com.kosmo.kkomoadopt.controller;

import com.kosmo.kkomoadopt.dto.CommunityListDTO;
import com.kosmo.kkomoadopt.dto.CommunityDTO;
import com.kosmo.kkomoadopt.enums.PostCategory;
import com.kosmo.kkomoadopt.service.CommunityPostService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.List;

@RestController
@RequestMapping("/api/post")
@RequiredArgsConstructor
public class CommunityPostController {

    private final CommunityPostService communityPostService;

//    @GetMapping()
//    public ResponseEntity<List<CommunityListDTO>>  getPostByCategory()

    // category에 따른 게시글 불러오기(12개씩)
    @GetMapping("/list12/{postCategoryString}/{pageNum}")
    public ResponseEntity<CommunityListDTO> getPosts2(
            @PathVariable("postCategoryString") String postCategoryString,
            @PathVariable("pageNum") int pageNum) {

        // URL에서 받은 문자열을 PostCategory Enum으로 변환
        PostCategory postCategory;
        try {
            postCategory = PostCategory.valueOf(postCategoryString.toUpperCase());
        } catch (IllegalArgumentException e) {
            // 잘못된 카테고리 이름이 들어왔을 경우 처리
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        // 해당 카테고리와 페이지 번호를 기반으로 게시글 리스트 조회
        CommunityListDTO communityListDTO = communityPostService.getListCommunity1(postCategory, pageNum);
        return new ResponseEntity<>(communityListDTO, HttpStatus.OK);
    }

    // category에 따른 게시글 불러오기(10개씩)
    @GetMapping("/list10/{postCategoryString}/{pageNum}")
    public ResponseEntity<CommunityListDTO> getPosts1(
            @PathVariable("postCategoryString") String postCategoryString,
            @PathVariable("pageNum") int pageNum) {

        // URL에서 받은 문자열을 PostCategory Enum으로 변환
        PostCategory postCategory;
        try {
            postCategory = PostCategory.valueOf(postCategoryString.toUpperCase());
        } catch (IllegalArgumentException e) {
            // 잘못된 카테고리 이름이 들어왔을 경우 처리
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        // 해당 카테고리와 페이지 번호를 기반으로 게시글 리스트 조회
        CommunityListDTO communityListDTO = communityPostService.getListCommunity2(postCategory, pageNum);
        return new ResponseEntity<>(communityListDTO, HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<Boolean> createPosts(@ModelAttribute CommunityDTO communityDTO, @RequestParam("files") MultipartFile[] files) {
        Boolean result = communityPostService.savePost(communityDTO, files);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

}
