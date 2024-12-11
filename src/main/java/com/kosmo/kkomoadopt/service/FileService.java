package com.kosmo.kkomoadopt.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.*;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class FileService {

    // 업로드 경로 설정: C:/temp/upload
    private final Path uploadPath = Paths.get("D", "temp", "upload");

    // 단일 파일 저장
    public String saveFile(MultipartFile file) throws IOException {
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        // 파일명 랜덤 변경
        String originalFilename = file.getOriginalFilename();
        String fileExtension = "";

        if (originalFilename != null && originalFilename.contains(".")) {
            fileExtension = originalFilename.substring(originalFilename.lastIndexOf("."));
        }

        String randomFilename = UUID.randomUUID().toString() + fileExtension;

        Path destination = uploadPath.resolve(randomFilename);
        file.transferTo(destination);



        return randomFilename; // 저장된 파일명 반환
    }

//    // 다중 파일 저장
//    public String[] saveFiles(MultipartFile[] files) throws IOException {
//
//        if (!Files.exists(uploadPath)) {
//            Files.createDirectories(uploadPath);
//        }
//
//        String[] savedFilenames = new String[files.length];
//
//        for (int i = 0; i < files.length; i++) {
//            MultipartFile file = files[i];
//
//            // 파일명 랜덤 변경
//            String originalFilename = file.getOriginalFilename();
//            String fileExtension = "";
//
//            if (originalFilename != null && originalFilename.contains(".")) {
//                fileExtension = originalFilename.substring(originalFilename.lastIndexOf("."));
//            }
//
//            String randomFilename = UUID.randomUUID().toString() + fileExtension;
//
//            Path destination = uploadPath.resolve(randomFilename);
//            file.transferTo(destination);
//
//            savedFilenames[i] = randomFilename; // 저장된 파일명 저장
//        }
//
//        return savedFilenames;
//    }

    // 파일을 D:/temp/upload 폴더에 저장하고 파일 경로를 반환하는 메서드
    public String[] saveFiles(MultipartFile[] files) throws IOException {
        String uploadDir = "D:/temp/upload/"; // 업로드 폴더 경로
        File dir = new File(uploadDir);

        // 디렉토리가 없으면 생성
        if (!dir.exists()) {
            dir.mkdirs();
        }

        String[] fileNames = new String[files.length];

        for (int i = 0; i < files.length; i++) {
            MultipartFile file = files[i];
            String originalFileName = file.getOriginalFilename();

            // 파일 확장자 추출 (예: jpg, png)
            String extension = originalFileName != null ? originalFileName.substring(originalFileName.lastIndexOf(".")) : "";

            // UUID를 사용하여 고유한 파일명 생성
            String uniqueFileName = UUID.randomUUID().toString() + extension;

            // 파일 저장 경로
            Path path = Paths.get(uploadDir + uniqueFileName);

            // 파일 저장
            Files.write(path, file.getBytes());

            // 파일 경로 (URL) 반환
            fileNames[i] = "http://localhost:8080/upload/" + uniqueFileName;
        }

        return fileNames;
    }

    // 파일 로드
    public Path load(String filename) {
        return uploadPath.resolve(filename);
    }
}
