package com.group4.mockproject.mapper;

import com.group4.mockproject.dto.request.CreateAppraiser;
import com.group4.mockproject.dto.request.CreateProperty;
import com.group4.mockproject.model.Appraiser;
import com.group4.mockproject.model.Property;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AppraiserMapper {
    private final ModelMapper modelMapper;

    public Appraiser toEntity(CreateAppraiser request) {
        return modelMapper.map(request, Appraiser.class);
    }
}
