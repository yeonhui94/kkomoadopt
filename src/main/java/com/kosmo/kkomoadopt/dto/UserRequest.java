package com.kosmo.kkomoadopt.dto;

public class UserRequest{

    private String name;
    private String phoneNumber;

    // 기본 생성자
    public UserRequest() {}

    // getter와 setter
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

}
