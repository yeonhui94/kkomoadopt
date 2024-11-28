package com.kosmo.file01.controller;

import com.kosmo.file01.service.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.ServletContext;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;

@Controller
@RequiredArgsConstructor
public class FileController {

    private final FileService fileService;
    private final ServletContext servletContext;

    // 단일 파일 업로드 페이지 이동
    @GetMapping("/single/upload")
    public String singleUploadPage() {
        return "single_upload";
    }

    // 다중 파일 업로드 페이지 이동
    @GetMapping("/multi/upload")
    public String multiUploadPage() {
        return "multi_upload";
    }

    // 단일 파일 업로드 처리
    @PostMapping("/uploadFile")
    @ResponseBody
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            String savedFilename = fileService.saveFile(file);
            return ResponseEntity.ok("파일 업로드 성공: " + savedFilename);
        } catch (IOException e) {
            return ResponseEntity.badRequest().body("파일 업로드 실패: " + e.getMessage());
        }
    }

    // 다중 파일 업로드 처리
    @PostMapping("/uploadFiles")
    @ResponseBody
    public ResponseEntity<?> uploadFiles(@RequestParam("files") MultipartFile[] files) {
        try {
            String[] savedFilenames = fileService.saveFiles(files);
            return ResponseEntity.ok("파일 업로드 성공: " + String.join(", ", savedFilenames));
        } catch (IOException e) {
            return ResponseEntity.badRequest().body("파일 업로드 실패: " + e.getMessage());
        }
    }

    // 일반 파일 다운로드
    @GetMapping("/download/{filename}")
    @ResponseBody
    public ResponseEntity<Resource> downloadFile(@PathVariable("filename") String filename) {
        try {
            Path file = fileService.load(filename);
            Resource resource = new UrlResource(file.toUri());

            if (!resource.exists()) {
                return ResponseEntity.notFound().build();
            }

            String contentType = servletContext.getMimeType(resource.getFile().getAbsolutePath());

            if (contentType == null) {
                contentType = "application/octet-stream";
            }

            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                    .body(resource);

        } catch (MalformedURLException e) {
            return ResponseEntity.badRequest().build();
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    // 이미지 표시 페이지로 리디렉션
    @GetMapping("/image/{filename}")
    public String redirectToImagePage(@PathVariable("filename") String filename) {
        return "redirect:/display_image.html?filename=" + filename;
    }

    // 이미지 파일 로드
    @GetMapping("/images/{filename}")
    @ResponseBody
    public ResponseEntity<Resource> loadImage(@PathVariable("filename") String filename) {
        try {
            Path file = fileService.load(filename);
            Resource resource = new UrlResource(file.toUri());

            if (!resource.exists()) {
                return ResponseEntity.notFound().build();
            }

            String contentType = servletContext.getMimeType(resource.getFile().getAbsolutePath());

            if (contentType == null) {
                contentType = "application/octet-stream";
            }

            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .body(resource);

        } catch (MalformedURLException e) {
            return ResponseEntity.badRequest().build();
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
