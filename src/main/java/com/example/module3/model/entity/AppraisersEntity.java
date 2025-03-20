package com.example.module3.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "appraisers")
public class AppraisersEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false, length = 255)
    private String name;

    @Column(name = "email", nullable = false, length = 255)
    private String email;

    @Column(name = "phone", nullable = false, length = 255)
    private String phone;

    @Column(name = "status", nullable = false, length = 255)
    private String status;

    @Column(name = "type", nullable = false, length = 255)
    private String type;

    @Column(name = "company_name", length = 255)
    private String companyName;

    @Column(name = "tax_number", length = 255)
    private String taxNumber;

    @Column(name = "experience")
    private Integer experience;

    @Column(name = "address", length = 255)
    private String address;
}