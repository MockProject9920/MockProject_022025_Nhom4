package com.group4.mockproject.exception;

public class ResourceNotFoundException extends AppException{
    public ResourceNotFoundException(String message){
        super(message, ErrorCode.RESOURCE_NOT_FOUND);
    }
}
