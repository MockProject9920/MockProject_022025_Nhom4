package com.company.insurance.validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.time.LocalDate;
import java.time.Period;

public class AgeValidator implements ConstraintValidator<ValidAge, LocalDate> {

    private static final int MINIMUM_AGE = 18;

    /**
     * Validates whether the given date of birth meets the minimum age requirement.
     *
     * @param dateOfBirth The date of birth to validate.
     * @param context The context in which the constraint is evaluated.
     * @return {@code true} if the age calculated from the date of birth is greater than or equal
     *         to the minimum required age (18 years); {@code false} otherwise.
     *
     * Note: If the dateOfBirth is null, this method will return {@code true} to allow null values.
     * To enforce non-null, use the @NotNull annotation in the DTO.
     */
    @Override
    public boolean isValid(LocalDate dateOfBirth, ConstraintValidatorContext context) {
        if (dateOfBirth == null) {
            return true;
        }

        LocalDate today = LocalDate.now();
        int age = Period.between(dateOfBirth, today).getYears();

        return age >= MINIMUM_AGE;
    }
}
