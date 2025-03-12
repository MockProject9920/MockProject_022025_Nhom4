package com.example.module3.model.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "transactions", schema = "bds", catalog = "")
public class TransactionsEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "transaction_id")
    private Long transactionId;
    @Basic
    @Column(name = "policy_contract_id")
    private Long policyContractId;
    @Basic
    @Column(name = "claim_id")
    private Long claimId;
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

    public Long getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(Long transactionId) {
        this.transactionId = transactionId;
    }

    public Long getPolicyContractId() {
        return policyContractId;
    }

    public void setPolicyContractId(Long policyContractId) {
        this.policyContractId = policyContractId;
    }

    public Long getClaimId() {
        return claimId;
    }

    public void setClaimId(Long claimId) {
        this.claimId = claimId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Date getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(Date transactionDate) {
        this.transactionDate = transactionDate;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TransactionsEntity that = (TransactionsEntity) o;
        return Objects.equals(transactionId, that.transactionId) && Objects.equals(policyContractId, that.policyContractId) && Objects.equals(claimId, that.claimId) && Objects.equals(type, that.type) && Objects.equals(transactionDate, that.transactionDate) && Objects.equals(amount, that.amount) && Objects.equals(method, that.method) && Objects.equals(status, that.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(transactionId, policyContractId, claimId, type, transactionDate, amount, method, status);
    }
}
