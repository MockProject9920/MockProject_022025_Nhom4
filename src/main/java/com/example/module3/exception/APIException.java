package com.example.module3.exception;

import org.springframework.http.HttpStatus;

public class APIException extends RuntimeException {
    HttpStatus status;
    String message;
    public APIException(HttpStatus status, String message){
        this.status = status;
        this.message = message;
    }
    @Override
    public String getMessage() {
        return message;
    }
}
