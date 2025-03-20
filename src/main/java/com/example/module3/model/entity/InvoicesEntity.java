package com.example.module3.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Objects;

@Setter
@Getter
@Entity
@Table(name = "invoices", schema = "bds", catalog = "")
public class InvoicesEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "invoice_id")
    private Long invoiceId;

    @ManyToOne
    @JoinColumn(name = "transaction_id")
    private TransactionsEntity transaction;

    @Basic
    @Column(name = "amount")
    private BigDecimal amount;
    @Basic
    @Column(name = "status")
    private String status;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        InvoicesEntity that = (InvoicesEntity) o;
        return Objects.equals(invoiceId, that.invoiceId) && Objects.equals(transaction.getTransactionId(), that.transaction.getTransactionId()) && Objects.equals(amount, that.amount) && Objects.equals(status, that.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(invoiceId, transaction.getTransactionId(), amount, status);
    }
}