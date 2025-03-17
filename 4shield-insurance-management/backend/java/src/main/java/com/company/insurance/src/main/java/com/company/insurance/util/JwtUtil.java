package com.company.insurance.util;

import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;


@Service
public class JwtUtil {

    @Value("${app.jwt.secret}")
    private String secret;

    @Value("${app.jwt.expiration}")
    private long jwtExpiration;

    /**
     * Extracts the username (email) from the JWT token.
     *
     * @param token The JWT token to extract information from
     * @return The email of the user stored in the token
     */
    public String extractUsername(String token) {
        return extractAllClaims(token).getSubject();
    }

    /**
     * Checks if the token has expired.
     *
     * @param token The JWT token to check
     * @return True if the token is expired, otherwise false
     */
    public boolean isTokenExpired(String token) {
        return extractAllClaims(token).getExpiration().before(new Date());
    }

    /**
     * Generates a JWT token for a given user.
     *
     * @param userDetails The UserDetails object containing user information.
     * @return The generated JWT token.
     */
    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();

        // Thêm role vào payload của Token
        claims.put("role", userDetails.getAuthorities().iterator().next().getAuthority());

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpiration))
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }

    /**
     * Validates the token against user details.
     *
     * @param token       The JWT token to validate
     * @param userDetails The user details to compare against
     * @return True if the token is valid, otherwise false
     */
    public boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }



    /**
     * Extracts all claims from a JWT token.
     *
     * @param token The JWT token to extract claims from
     * @return The claims contained in the token
     */
    private Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(secret).build().parseClaimsJws(token).getBody();
    }
}
