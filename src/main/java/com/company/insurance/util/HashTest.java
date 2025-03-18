package com.company.insurance.util;

import java.security.MessageDigest;
public class HashTest {
    public static void main(String[] args) {
        String password = "yourpassword";
        System.out.println("SHA-256: " + hashSHA256(password));
    }

    public static String hashSHA256(String password) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(password.getBytes("UTF-8"));
            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                hexString.append(String.format("%02x", b));
            }
            return hexString.toString();
        } catch (Exception e) {
            throw new RuntimeException("Error hashing password", e);
        }
    }
}
