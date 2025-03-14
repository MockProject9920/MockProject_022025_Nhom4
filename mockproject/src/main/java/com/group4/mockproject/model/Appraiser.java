package com.group4.mockproject.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "appraisers")
@Data
public class Appraiser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Column(name = "email", nullable = false, unique = true, length = 100)
    private String email;

    @Column(name = "phone", nullable = false, length = 20)
    private String phone;

    @Column(name = "status", nullable = false, length = 50)
    private String status;

    @Column(name = "type", nullable = false, length = 50)
    private String type;

    @Column(name = "company_name", length = 100)
    private String companyName;

    @Column(name = "tax_number", length = 50)
    private String taxNumber;

    @Column(name = "experience", nullable = false)
    private Integer experience;

    @Column(name = "address", columnDefinition = "TEXT")
    private String address;
}
