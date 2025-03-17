package com.company.insurance.exception;

/**
 * Custom exception thrown when a user with the same email already exists.
 */
public class UserAlreadyExistsException extends RuntimeException {

    /**
     * Constructs a new UserAlreadyExistsException with the specified detail message.
     *
     * @param message The detail message.
     */
    public UserAlreadyExistsException(String message) {
        super(message);
    }
}
