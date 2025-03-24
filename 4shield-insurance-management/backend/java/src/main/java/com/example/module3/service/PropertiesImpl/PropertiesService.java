package com.example.module3.service.PropertiesImpl;

import com.example.module3.model.dto.request.PropertiesDto;
import com.example.module3.model.entity.PropertiesEntity;

import java.util.List;
import java.util.Optional;

public interface PropertiesService {
     PropertiesEntity createProperty(PropertiesDto propertiesDto);
     List<PropertiesEntity> getAllProperties();
     Optional<PropertiesEntity> getPropertyById(Long propertyId);
     PropertiesEntity updateProperty(Long propertyId, PropertiesDto propertiesDto);
     void deleteProperty(Long propertyId);
}
