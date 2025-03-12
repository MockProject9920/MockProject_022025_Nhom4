package com.example.module3.model.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "appraisers", schema = "bds", catalog = "")
public class AppraisersEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "appraiser_id")
    private Long appraiserId;
    @Basic
    @Column(name = "policy_contract_id")
    private Long policyContractId;
    @Basic
    @Column(name = "name")
    private String name;
    @Basic
    @Column(name = "email")
    private String email;
    @Basic
    @Column(name = "phone")
    private String phone;
    @Basic
    @Column(name = "status")
    private String status;
    @Basic
    @Column(name = "type")
    private String type;
    @Basic
    @Column(name = "company_name")
    private String companyName;
    @Basic
    @Column(name = "tax_number")
    private String taxNumber;
    @Basic
    @Column(name = "experience")
    private int experience;
    @Basic
    @Column(name = "address")
    private String address;

    public Long getAppraiserId() {
        return appraiserId;
    }

    public void setAppraiserId(Long appraiserId) {
        this.appraiserId = appraiserId;
    }

    public Long getPolicyContractId() {
        return policyContractId;
    }

    public void setPolicyContractId(Long policyContractId) {
        this.policyContractId = policyContractId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getTaxNumber() {
        return taxNumber;
    }

    public void setTaxNumber(String taxNumber) {
        this.taxNumber = taxNumber;
    }

    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AppraisersEntity that = (AppraisersEntity) o;
        return experience == that.experience && Objects.equals(appraiserId, that.appraiserId) && Objects.equals(policyContractId, that.policyContractId) && Objects.equals(name, that.name) && Objects.equals(email, that.email) && Objects.equals(phone, that.phone) && Objects.equals(status, that.status) && Objects.equals(type, that.type) && Objects.equals(companyName, that.companyName) && Objects.equals(taxNumber, that.taxNumber) && Objects.equals(address, that.address);
    }

    @Override
    public int hashCode() {
        return Objects.hash(appraiserId, policyContractId, name, email, phone, status, type, companyName, taxNumber, experience, address);
    }
}
