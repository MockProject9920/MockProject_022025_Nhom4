package com.example.module3.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "holiday")
public class HolidayEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "holiday_id")
    private Integer holidayId;

    @Column(name = "holiday_name", nullable = false, length = 100)
    private String holidayName;

    @Column(name = "holiday_date", nullable = false, length = 100)
    private String holidayDate;

    @Column(name = "holiday_type", nullable = false, length = 50)
    private String holidayType;

    @Column(name = "state_name", length = 50)
    private String stateName;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "approval_authority", length = 100)
    private String approvalAuthority;

    @Column(name = "establishment_process", length = 255)
    private String establishmentProcess;

    @Column(name = "government_offices", length = 100)
    private String governmentOffices;

    @Column(name = "businesses", length = 100)
    private String businesses;

    @Column(name = "schools", length = 100)
    private String schools;

    @Column(name = "common_activities", columnDefinition = "TEXT")
    private String commonActivities;
}