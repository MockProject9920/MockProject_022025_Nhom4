package com.group4.mockproject.service;

import com.group4.mockproject.dto.request.CreateProperty;
import com.group4.mockproject.exception.ResourceNotFoundException;
import com.group4.mockproject.mapper.PropertyMapper;
import com.group4.mockproject.model.Property;
import com.group4.mockproject.repository.PropertyRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PropertyService {
    @Autowired
    private final PropertyRepository propertyRepository;

    @Autowired
    private final PropertyMapper propertyMapper;

    public List<Property> getAllProperties(){
        return propertyRepository.findAll();
    }

    public Property createProperty(CreateProperty request){
        return propertyRepository.save(propertyMapper.toEntity(request));
    }

    public Property getPropertyById(Long propertyId){
        return propertyRepository.findById(propertyId).orElseThrow(() -> new ResourceNotFoundException("Property not found!"));
    }

    public Property updateProperty(Long propertyId, CreateProperty request){
        Property existingProperty = getPropertyById(propertyId);
        Property updatedProperty = propertyMapper.toEntity(request);
        updatedProperty.setId(existingProperty.getId());
        return propertyRepository.save(updatedProperty);
    }

    public void deletePropertyById(Long propertyId){
        Property existingProperty = getPropertyById(propertyId);
        propertyRepository.delete(existingProperty);
    }
}
