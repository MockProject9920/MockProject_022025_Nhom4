package com.company.insurance.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

/**
 * GlobalExceptionHandler is a centralized exception handling class for the application.
 * It uses @RestControllerAdvice to catch and handle exceptions thrown by controllers globally.
 */
@RestControllerAdvice
public class GlobalExceptionHandler {

    /**
     * Handles UserAlreadyExistsException.
     *
     * @param ex The exception thrown when an email is already in use.
     * @return ResponseEntity containing the error message and HTTP status code 409 (Conflict).
     */
    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<Map<String, String>> handleUserAlreadyExistsException(UserAlreadyExistsException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", ex.getMessage());
        return ResponseEntity.status(HttpStatus.CONFLICT).body(error);
    }

    /**
     * Handles MethodArgumentNotValidException (Validation errors from @Valid or @Validated).
     *
     * @param ex The exception thrown when validation fails.
     * @return ResponseEntity containing field-specific error messages and HTTP status code 400 (Bad Request).
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();

        ex.getBindingResult().getFieldErrors().forEach(error ->
                errors.put(error.getField(), error.getDefaultMessage())
        );

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
    }

    /**
     * Handles all other general exceptions that are not explicitly handled by other methods.
     *
     * @param ex The generic exception thrown within the application.
     * @return ResponseEntity containing the error message and HTTP status code 500 (Internal Server Error).
     */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, String>> handleGeneralException(Exception ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", ex.getMessage());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }
}
