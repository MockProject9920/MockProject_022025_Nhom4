package com.group4.mockproject.service;

import com.group4.mockproject.dto.request.CreateAppraiser;
import com.group4.mockproject.exception.ResourceNotFoundException;
import com.group4.mockproject.mapper.AppraiserMapper;
import com.group4.mockproject.model.Appraiser;
import com.group4.mockproject.model.Property;
import com.group4.mockproject.repository.AppraiserResppository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class AppraiserService {

    private final AppraiserResppository appraiserResppository;
    private final AppraiserMapper appraiserMapper;

    public List<Appraiser> getAllPraisers(){
        return appraiserResppository.findAll();
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
}
