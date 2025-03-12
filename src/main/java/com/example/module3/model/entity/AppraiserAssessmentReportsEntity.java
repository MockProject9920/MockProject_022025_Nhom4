package com.example.module3.model.entity;

import jakarta.persistence.*;

import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "appraiser_assessment_reports", schema = "bds", catalog = "")
public class AppraiserAssessmentReportsEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;
    @Basic
    @Column(name = "appraiser_id")
    private Long appraiserId;
    @Basic
    @Column(name = "status")
    private String status;
    @Basic
    @Column(name = "number")
    private int number;
    @Basic
    @Column(name = "type")
    private String type;
    @Basic
    @Column(name = "report_details")
    private String reportDetails;
    @Basic
    @Column(name = "assessment_date")
    private Date assessmentDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAppraiserId() {
        return appraiserId;
    }

    public void setAppraiserId(Long appraiserId) {
        this.appraiserId = appraiserId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getReportDetails() {
        return reportDetails;
    }

    public void setReportDetails(String reportDetails) {
        this.reportDetails = reportDetails;
    }

    public Date getAssessmentDate() {
        return assessmentDate;
    }

    public void setAssessmentDate(Date assessmentDate) {
        this.assessmentDate = assessmentDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AppraiserAssessmentReportsEntity that = (AppraiserAssessmentReportsEntity) o;
        return number == that.number && Objects.equals(id, that.id) && Objects.equals(appraiserId, that.appraiserId) && Objects.equals(status, that.status) && Objects.equals(type, that.type) && Objects.equals(reportDetails, that.reportDetails) && Objects.equals(assessmentDate, that.assessmentDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, appraiserId, status, number, type, reportDetails, assessmentDate);
    }
}
