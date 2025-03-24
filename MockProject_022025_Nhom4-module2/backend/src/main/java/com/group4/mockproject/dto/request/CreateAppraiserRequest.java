package com.group4.mockproject.dto.request;

import com.group4.mockproject.model.AppraiserRequestStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.sql.Timestamp;

@Data
public class CreateAppraiserRequest {
    private Long appraiserId;

    private Long userId;

    private String requestType;

    private Long propertyId;

    private Long customerId;

    private Integer number;

    private Timestamp createdAt;

    private String assignedTo;

    @NotNull(message = "status is required!")
    private AppraiserRequestStatus appraiserRequestStatus;


}
