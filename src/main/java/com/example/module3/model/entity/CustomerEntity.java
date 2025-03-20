package com.example.module3.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "customers", schema = "bds")
@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CustomerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "phone", nullable = false, unique = true)
    private String phone;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "date_of_birth")
    private java.sql.Date dateOfBirth;

    @Column(name = "gender", length = 10)
    private String gender;

    @Column(name = "house_number", length = 100)
    private String houseNumber;

    @Column(name = "zipcode", length = 20)
    private String zipcode;

    @Column(name = "id_number", length = 50)
    private String idNumber;
}