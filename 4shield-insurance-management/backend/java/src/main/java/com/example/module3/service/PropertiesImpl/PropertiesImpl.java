package com.example.module3.service.PropertiesImpl;


import com.example.module3.model.dto.request.PropertiesDto;
import com.example.module3.model.entity.PropertiesEntity;
import com.example.module3.repository.PropertiesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class PropertiesImpl implements PropertiesService {
    @Autowired
    private PropertiesRepository propertiesRepository;

    public PropertiesEntity createProperty(PropertiesDto propertiesDto) {
        PropertiesEntity entity = new PropertiesEntity();
        entity.setType(propertiesDto.getType());
        entity.setAddress(propertiesDto.getAddress());
        entity.setCity(propertiesDto.getCity());
        entity.setState(propertiesDto.getState());
        entity.setZipCode(propertiesDto.getZipCode());
        entity.setCountry(propertiesDto.getCountry());
        entity.setYearBuilt(propertiesDto.getYearBuilt());
        entity.setLotSizeSqft(propertiesDto.getLotSizeSqft());
        entity.setLivingAreaSqft(propertiesDto.getLivingAreaSqft());
        entity.setBedrooms(propertiesDto.getBedrooms());
        entity.setBathrooms(propertiesDto.getBathrooms());
        entity.setAttachedGarage(propertiesDto.getAttachedGarage());
        entity.setAdditionalFeatures(propertiesDto.getAdditionalFeatures());
        entity.setRecentRenovations(propertiesDto.getRecentRenovations());
        entity.setEstimatedValue(propertiesDto.getEstimatedValue());
        entity.setStatus(propertiesDto.getStatus());
        return propertiesRepository.save(entity);
    }

    // Read all
    public List<PropertiesEntity> getAllProperties() {
        return propertiesRepository.findAll();
    }

    // Read by ID
    public Optional<PropertiesEntity> getPropertyById(Long propertyId) {
        return propertiesRepository.findById(propertyId);
    }

    // Update
    public PropertiesEntity updateProperty(Long propertyId, PropertiesDto propertiesDto) {
        return propertiesRepository.findById(propertyId).map(existingEntity -> {
            existingEntity.setType(propertiesDto.getType());
            existingEntity.setAddress(propertiesDto.getAddress());
            existingEntity.setCity(propertiesDto.getCity());
            existingEntity.setState(propertiesDto.getState());
            existingEntity.setZipCode(propertiesDto.getZipCode());
            existingEntity.setCountry(propertiesDto.getCountry());
            existingEntity.setYearBuilt(propertiesDto.getYearBuilt());
            existingEntity.setLotSizeSqft(propertiesDto.getLotSizeSqft());
            existingEntity.setLivingAreaSqft(propertiesDto.getLivingAreaSqft());
            existingEntity.setBedrooms(propertiesDto.getBedrooms());
            existingEntity.setBathrooms(propertiesDto.getBathrooms());
            existingEntity.setAttachedGarage(propertiesDto.getAttachedGarage());
            existingEntity.setAdditionalFeatures(propertiesDto.getAdditionalFeatures());
            existingEntity.setRecentRenovations(propertiesDto.getRecentRenovations());
            existingEntity.setEstimatedValue(propertiesDto.getEstimatedValue());
            existingEntity.setStatus(propertiesDto.getStatus());
            return propertiesRepository.save(existingEntity);
        }).orElseThrow(() -> new RuntimeException("Property not found"));
    }

    // Delete
    public void deleteProperty(Long propertyId) {
        propertiesRepository.deleteById(propertyId);
    }
}


