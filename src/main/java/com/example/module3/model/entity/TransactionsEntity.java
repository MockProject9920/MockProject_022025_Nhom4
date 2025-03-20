package com.example.module3.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.Objects;

@Setter
@Getter
@Entity
@Table(name = "transactions", schema = "bds", catalog = "")
public class TransactionsEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "transaction_id")
    private Long transactionId;

    @ManyToOne
    @JoinColumn(name = "policy_contract_id")
    private PolicyContractsEntity policyContract;

    @ManyToOne
    @JoinColumn(name = "claim_id")
    private ClaimsEntity claim;

    @Basic
    @Column(name = "type")
    private String type;
    @Basic
    @Column(name = "transaction_date")
    private Date transactionDate;
    @Basic
    @Column(name = "amount")
    private BigDecimal amount;
    @Basic
    @Column(name = "method")
    private String method;
    @Basic
    @Column(name = "status")
    private String status;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TransactionsEntity that = (TransactionsEntity) o;
        return Objects.equals(transactionId, that.transactionId) && Objects.equals(policyContract, that.policyContract) && Objects.equals(claim, that.claim) && Objects.equals(type, that.type) && Objects.equals(transactionDate, that.transactionDate) && Objects.equals(amount, that.amount) && Objects.equals(method, that.method) && Objects.equals(status, that.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(transactionId, policyContract, claim, type, transactionDate, amount, method, status);
    }
}