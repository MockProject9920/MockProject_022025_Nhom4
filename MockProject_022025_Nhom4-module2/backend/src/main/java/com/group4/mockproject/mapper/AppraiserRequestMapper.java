package com.group4.mockproject.mapper;

import com.group4.mockproject.dto.request.CreateAppraiserRequest;
import com.group4.mockproject.model.AppraiserRequest;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AppraiserRequestMapper {
    private final ModelMapper modelMapper;

    public AppraiserRequest toEntity(CreateAppraiserRequest request) {
        AppraiserRequest appraiserRequest = new AppraiserRequest();

        appraiserRequest.setUserId(request.getUserId());
        appraiserRequest.setPropertyId(request.getPropertyId());
        appraiserRequest.setCustomerId(request.getCustomerId());
        appraiserRequest.setRequestType(request.getRequestType());
        appraiserRequest.setNumber(request.getNumber());
        appraiserRequest.setCreatedAt(request.getCreatedAt());
        appraiserRequest.setAssignedTo(request.getAssignedTo());
        appraiserRequest.setAppraiserRequestStatus(request.getAppraiserRequestStatus());

        return appraiserRequest;
    }

    // Cập nhật chỉ các field từ request vào existingRequest
    public void updateEntity(CreateAppraiserRequest request, AppraiserRequest existingRequest) {
        existingRequest.setUserId(request.getUserId());
        existingRequest.setPropertyId(request.getPropertyId());
        existingRequest.setCustomerId(request.getCustomerId());
        existingRequest.setRequestType(request.getRequestType());
        existingRequest.setNumber(request.getNumber());
        existingRequest.setCreatedAt(request.getCreatedAt());
        existingRequest.setAssignedTo(request.getAssignedTo());
        existingRequest.setAppraiserRequestStatus(request.getAppraiserRequestStatus());
    }
}
