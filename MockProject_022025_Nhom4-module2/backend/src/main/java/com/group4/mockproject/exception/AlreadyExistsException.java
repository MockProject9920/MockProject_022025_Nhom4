package com.group4.mockproject.exception;

public class AlreadyExistsException extends AppException{

    public AlreadyExistsException(String message) {
        super(message, ErrorCode.ALREADY_EXISTS);
    }
}
