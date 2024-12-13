CREATE TABLE IF NOT EXISTS `user` (
	`user_id` VARCHAR(36) NOT NULL COLLATE 'utf8mb3_general_ci',
	`authority` ENUM('ADMIN','USER') NOT NULL COLLATE 'utf8mb3_general_ci',
	`blacklists` TEXT NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`email` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`is_blacklisted` BIT(1) NOT NULL,
	`name` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`nickname` VARCHAR(20) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`password` VARCHAR(16) NOT NULL COLLATE 'utf8mb3_general_ci',
	`phone_number` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`profile_text` TEXT NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`provider` ENUM('KAKAO','NAVER','NORMAL') NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`scraps` LONGTEXT NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`social_id` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`user_create` DATETIME(6) NOT NULL,
	`user_img_url` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`user_last_login` DATETIME(6) NOT NULL,
	PRIMARY KEY (`user_id`) USING BTREE,
	INDEX `idx_user_nickname` (`nickname`) USING BTREE
)
COLLATE='utf8mb3_general_ci'
ENGINE=InnoDB
;


CREATE TABLE IF NOT EXISTS `adoption_notice` (
	`notice_uid` VARCHAR(36) NOT NULL COLLATE 'utf8mb3_general_ci',
	`adopt_status` ENUM('ADOPTABLE','NOTADOPT','RESERVATION') NOT NULL COLLATE 'utf8mb3_general_ci',
	`adoption_author` VARCHAR(255) NOT NULL COLLATE 'utf8mb3_general_ci',
	`animal_type` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`announcement_num` VARCHAR(10) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`euthanasia_date` DATE NULL DEFAULT NULL,
	`impossible_reason` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`notice_category` ENUM('CAT','DOG','OTHERS') NOT NULL COLLATE 'utf8mb3_general_ci',
	`notice_content` TEXT NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`notice_created_at` DATETIME(6) NOT NULL,
	`notice_img_url` TEXT NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`notice_title` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`notice_updated_at` DATETIME(6) NOT NULL,
	`notice_view_count` INT(11) NULL DEFAULT NULL,
	`unique_num` BIGINT(20) NULL DEFAULT NULL,
	PRIMARY KEY (`notice_uid`) USING BTREE,
	INDEX `idx_adoption_notice_announcement_num` (`announcement_num`) USING BTREE,
	INDEX `idx_adoption_notice_animal_type` (`animal_type`) USING BTREE,
	INDEX `fk_adoption_notice_author` (`adoption_author`) USING BTREE,
	CONSTRAINT `fk_adoption_notice_author` FOREIGN KEY (`adoption_author`) REFERENCES `user` (`nickname`) ON UPDATE CASCADE ON DELETE CASCADE
)
COLLATE='utf8mb3_general_ci'
ENGINE=InnoDB
;

CREATE TABLE IF NOT EXISTS `community_post` (
	`post_uid` VARCHAR(36) NOT NULL COLLATE 'utf8mb3_general_ci',
	`delete_reason` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`is_deleted` BIT(1) NOT NULL,
	`post_category` ENUM('ANNOUNCEMENT','ADOPTREVIEW','BUYANDSELL','FINDCHILD','REPORT') NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`post_content` TEXT NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`post_created_at` DATETIME(6) NOT NULL,
	`post_id` INT(11) NULL DEFAULT NULL,
	`post_img_url` TEXT NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`post_title` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`post_updated_at` DATETIME(6) NOT NULL,
	`post_view_count` INT(11) NOT NULL,
	`user_id` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	PRIMARY KEY (`post_uid`) USING BTREE,
	UNIQUE INDEX `UK5djt4w7q6wk68ryo6xb716dp0` (`post_id`) USING BTREE,
	INDEX `fk_postuser_id` (`user_id`) USING BTREE,
	CONSTRAINT `fk_postuser_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON UPDATE CASCADE ON DELETE CASCADE
)
COLLATE='utf8mb3_general_ci'
ENGINE=InnoDB
;

CREATE TABLE `comment` (
	`comment_id` VARCHAR(36) NOT NULL COLLATE 'utf8mb3_general_ci',
	`comment_content` TEXT NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`comment_created_at` DATETIME(6) NOT NULL,
	`comment_updated_at` DATETIME(6) NOT NULL,
	`is_deleted` BIT(1) NOT NULL,
	`post_uid` VARCHAR(255) NOT NULL COLLATE 'utf8mb3_general_ci',
	`user_id` VARCHAR(255) NOT NULL COLLATE 'utf8mb3_general_ci',
	`comment_del_reason` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	PRIMARY KEY (`comment_id`) USING BTREE,
	INDEX `fk_comment_post_uid` (`post_uid`) USING BTREE,
	INDEX `fk_user_id` (`user_id`) USING BTREE,
	CONSTRAINT `fk_comment_post_uid` FOREIGN KEY (`post_uid`) REFERENCES `community_post` (`post_uid`) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON UPDATE CASCADE ON DELETE CASCADE
)
COLLATE='utf8mb3_general_ci'
ENGINE=InnoDB
;



CREATE TABLE `qna` (
	`qna_uid` VARCHAR(36) NOT NULL COLLATE 'utf8mb3_general_ci',
	`answer_author` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`qna_answer` TEXT NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`qna_answer_file` TEXT NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`qna_content` TEXT NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`qna_created_at` DATETIME(6) NOT NULL,
	`qna_id` INT(11) NOT NULL,
	`qna_password` INT(11) NULL DEFAULT NULL,
	`qna_request_file` TEXT NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`qna_state` ENUM('ANSCOMPLETE','ANSWAIT') NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`qna_title` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`qna_view_count` INT(11) NULL DEFAULT NULL,
	`user_id` VARCHAR(255) NOT NULL COLLATE 'utf8mb3_general_ci',
	PRIMARY KEY (`qna_uid`) USING BTREE,
	UNIQUE INDEX `UKfip1fmygipgc2icse6kviw0y5` (`qna_id`) USING BTREE,
	INDEX `fk_qna_user_id` (`user_id`) USING BTREE,
	INDEX `fk_qna_answer_author` (`answer_author`) USING BTREE,
	CONSTRAINT `fk_qna_answer_author` FOREIGN KEY (`answer_author`) REFERENCES `user` (`nickname`) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT `fk_qna_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON UPDATE CASCADE ON DELETE CASCADE
)
COLLATE='utf8mb3_general_ci'
ENGINE=InnoDB
;


CREATE TABLE IF NOT EXISTS `visit_request` (
	`request_uid` VARCHAR(36) NOT NULL COLLATE 'utf8mb3_general_ci',
	`phone_num` VARCHAR(20) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`request_id` INT(11) NOT NULL,
	`visit_content` TEXT NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`visit_created_at` DATETIME(6) NOT NULL,
	`visit_date` DATE NULL DEFAULT NULL,
	`visit_purpose` ENUM('ADOPT','DONATE','OTHER','SERVICE','VISIT') NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`visit_time` ENUM('TIME1','TIME2','TIME3','TIME4','TIME5','TIME6') NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`user_id` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	PRIMARY KEY (`request_uid`) USING BTREE,
	UNIQUE INDEX `UKi1lbm0qkbj6bsk39jnn7cc524` (`request_id`) USING BTREE,
	INDEX `fk_visit_request_uesr_id` (`user_id`) USING BTREE,
	CONSTRAINT `fk_visit_request_uesr_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON UPDATE RESTRICT ON DELETE RESTRICT
)
COLLATE='utf8mb3_general_ci'
ENGINE=InnoDB
;


