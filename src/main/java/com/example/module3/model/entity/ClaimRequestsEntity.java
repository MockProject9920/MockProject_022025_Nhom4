package com.example.module3.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "claim_requests")
public class ClaimRequestsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private CustomerEntity customer;

    @ManyToOne
    @JoinColumn(name = "policy_contract_id", nullable = false)
    private PolicyContractsEntity policyContract;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UsersEntity user;
}