package com.kosmo.file01.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class FileService {

    // 업로드 경로 설정: C:/temp/upload
    private final Path uploadPath = Paths.get("D:", "temp", "upload");

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

    // 다중 파일 저장
    public String[] saveFiles(MultipartFile[] files) throws IOException {
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        String[] savedFilenames = new String[files.length];

        for (int i = 0; i < files.length; i++) {
            MultipartFile file = files[i];

            // 파일명 랜덤 변경
            String originalFilename = file.getOriginalFilename();
            String fileExtension = "";

            if (originalFilename != null && originalFilename.contains(".")) {
                fileExtension = originalFilename.substring(originalFilename.lastIndexOf("."));
            }

            String randomFilename = UUID.randomUUID().toString() + fileExtension;

            Path destination = uploadPath.resolve(randomFilename);
            file.transferTo(destination);

            savedFilenames[i] = randomFilename; // 저장된 파일명 저장
        }

        return savedFilenames;
    }

    // 파일 로드
    public Path load(String filename) {
        return uploadPath.resolve(filename);
    }
}
