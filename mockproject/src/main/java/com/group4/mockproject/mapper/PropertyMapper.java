package com.group4.mockproject.mapper;

import com.group4.mockproject.dto.request.CreateProperty;
import com.group4.mockproject.model.Property;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.Banner;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PropertyMapper {

    private final ModelMapper modelMapper;

    public Property toEntity(CreateProperty request) {
        return modelMapper.map(request, Property.class);
    }

}
