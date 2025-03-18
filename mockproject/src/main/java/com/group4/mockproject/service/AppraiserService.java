package com.group4.mockproject.service;

import com.group4.mockproject.dto.request.CreateAppraiser;
import com.group4.mockproject.exception.ResourceNotFoundException;
import com.group4.mockproject.mapper.AppraiserMapper;
import com.group4.mockproject.model.AppraisalReport;
import com.group4.mockproject.model.Appraiser;
import com.group4.mockproject.model.AppraiserRequest;
import com.group4.mockproject.model.Property;
import com.group4.mockproject.repository.AppraisalReportRepository;
import com.group4.mockproject.repository.AppraiserRequestRepository;
import com.group4.mockproject.repository.AppraiserResppository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class AppraiserService {

    private final AppraiserResppository appraiserResppository;
    private final AppraiserMapper appraiserMapper;
    private final AppraiserRequestRepository appraiserRequestRepository;
    private final AppraisalReportRepository appraisalReportRepository;

    public List<Appraiser> getAllPraisers(){
        return appraiserResppository.findAll();
    }

    public Page<AppraiserRequest> getAllAppraiserRequests(int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, sortBy));
        return appraiserRequestRepository.findAll(pageable);
    }

    public Page<AppraiserRequest> getAppraiserRequestsByRequestType(String requestType, int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, sortBy));
        return appraiserRequestRepository.findByRequestType(requestType, pageable);
    }

    public Page<AppraisalReport> getAllAppraisalReports(int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, sortBy));
        return appraisalReportRepository.findAll(pageable);
    }

    public Page<AppraisalReport> getAppraisalReportsByStatus(String status, int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, sortBy));
        return appraisalReportRepository.findByStatus(status, pageable);
    }

    public Appraiser createAppraiser(CreateAppraiser request){
        return appraiserResppository.save(appraiserMapper.toEntity(request));
    }

    public Appraiser findAppraiserById(Long appraiserId){
        return appraiserResppository.findById(appraiserId).orElseThrow(() -> new ResourceNotFoundException("Appraiser not found !"));
    }

    public Appraiser updateAppraiser(Long appraiserId, CreateAppraiser request){
        Appraiser existingProperty = findAppraiserById(appraiserId);
        Appraiser updatedAppraiser = appraiserMapper.toEntity(request);
        updatedAppraiser.setId(existingProperty.getId());
        return appraiserResppository.save(updatedAppraiser);
    }

    public void deleteAppraiserById(Long appraiserId){
        Appraiser existingProperty = findAppraiserById(appraiserId);
        appraiserResppository.delete(existingProperty);
    }
    //SC_031
    public AppraisalReport findAppraisalReportById(Long appraisalReportId) {
        return appraisalReportRepository.findById(appraisalReportId)
                .orElseThrow(() -> new ResourceNotFoundException("Appraisal report not found!"));
    }
}
