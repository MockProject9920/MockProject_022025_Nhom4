package com.company.insurance.model.auth;
import com.company.insurance.model.customer.Customer;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 100)
    private String email;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, length = 50)
    private String role;

    @Column(name = "member_since", nullable = false)
    private LocalDate memberSince;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private com.company.insurance.model.customer.Customer customer;
}

