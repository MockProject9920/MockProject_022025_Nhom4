package com.company.insurance.mapper;

import com.company.insurance.dto.auth.CustomerDTO;
import com.company.insurance.model.auth.Customer;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface CustomerMapper {
    CustomerMapper INSTANCE = Mappers.getMapper(CustomerMapper.class);

    /**
     * Converts a CustomerDTO to a Customer entity.
     * @param customerDTO The CustomerDTO object to be converted.
     * @return The corresponding Customer entity.
     */
    Customer toEntity(CustomerDTO customerDTO);

    /**
     * Converts a Customer entity to a CustomerDTO.
     * This method maps all fields from entity to DTO.
     *
     * @param customer The Customer entity to be converted.
     * @return The corresponding CustomerDTO.
     */
    CustomerDTO toDTO(Customer customer);
}
