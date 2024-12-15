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
@RequestMapping("/api/community/posts")
@RequiredArgsConstructor
public class CommunityPostController {

    private final CommunityPostService communityPostService;

    @GetMapping
    public ResponseEntity<List<CommunityListDTO>> getPostByCategory(@RequestParam(name = "category") String projectCategory){
        try{
            List<CommunityListDTO> communities = communityPostService.getCommunityListByCategory(projectCategory);
            return ResponseEntity.ok(communities);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }


//    @PostMapping
//    public ResponseEntity<Boolean> createPosts(@ModelAttribute CommunityDTO communityDTO, @RequestParam("files") MultipartFile[] files) {
//        Boolean result = communityPostService.savePost(communityDTO, files);
//        return new ResponseEntity<>(result, HttpStatus.CREATED);
//    }


    // 게시물 생성 API
    @PostMapping("/newposts")
    public ResponseEntity<String> createPost(@RequestBody CommunityDTO communityDTO) {

        // CommunityDTO에서 받은 데이터를 CommunityPostEntity로 변환
        boolean isPostCreated = communityPostService.savePost(communityDTO);

        if (isPostCreated) {
            return ResponseEntity.ok("게시물이 성공적으로 작성되었습니다.");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("게시물 작성에 실패했습니다.");
        }
    }


    @GetMapping("/{postUid}")
    public ResponseEntity<CommunityListDTO> getPostByUid(@PathVariable(name = "postUid") String postUid){
        CommunityListDTO post = communityPostService.getCommunityPostUid(postUid);
        return ResponseEntity.ok(post);
    }



//    @GetMapping("/{postUid}")
//    public ResponseEntity<CommunityListDTO> getPostByUid(@PathVariable String postUid){
//        CommunityListDTO post = communityPostService.getCommunityPostWithComments(postUid);
//        return ResponseEntity.ok(post);
//    }




}
