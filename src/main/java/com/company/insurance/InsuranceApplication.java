package com.company.insurance;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.company.insurance.repository")
@ComponentScan(basePackages = "com.company.insurance")
public class InsuranceApplication {
	public static void main(String[] args) {
		SpringApplication.run(InsuranceApplication.class, args);
	}
}
