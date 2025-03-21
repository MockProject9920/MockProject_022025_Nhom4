package com.example.module3.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "payment_tracking")
public class PaymentTrackingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "policy_contract_id", nullable = false)
    private PolicyContractsEntity policyContract;

    @ManyToOne
    @JoinColumn(name = "claim_id")
    private ClaimsEntity claim;

    @Column(name = "due_date", nullable = false)
    private LocalDate dueDate;

    @Column(name = "amount", nullable = false, precision = 38, scale = 2)
    private BigDecimal amount;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "reminder_sent", nullable = false)
    private Boolean reminderSent;
}