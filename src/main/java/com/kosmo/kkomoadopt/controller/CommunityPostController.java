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

    @PostMapping
    public ResponseEntity<Boolean> createPosts(@ModelAttribute CommunityDTO communityDTO, @RequestParam("files") MultipartFile[] files) {
        Boolean result = communityPostService.savePost(communityDTO, files);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

}
