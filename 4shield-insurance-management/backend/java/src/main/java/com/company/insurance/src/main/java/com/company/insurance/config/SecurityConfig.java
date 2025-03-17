package com.company.insurance.config;

import com.company.insurance.service.auth.JwtAuthenticationFilter;
import com.company.insurance.service.auth.CustomCustomerDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final CustomCustomerDetailsService customCustomerDetailsService;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    public SecurityConfig(CustomCustomerDetailsService customCustomerDetailsService, JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.customCustomerDetailsService = customCustomerDetailsService;
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    /**
     * Configures and provides the SecurityFilterChain bean.
     *
     * This method defines the security configuration for handling HTTP requests.
     * It disables CSRF protection because JWT-based authentication is used, which is immune to CSRF attacks.
     * The configuration permits all requests to certain public endpoints (like login, register, and Swagger docs).
     *
     * The `/api/customer/**` endpoint requires authentication, meaning a valid JWT token must be provided.
     * All other requests are also authenticated by default.
     *
     * The JwtAuthenticationFilter is added to the filter chain before the UsernamePasswordAuthenticationFilter
     * to intercept requests and validate tokens.
     *
     * @param http The HttpSecurity object used to build security configurations.
     * @return A fully configured SecurityFilterChain instance.
     * @throws Exception If an error occurs during the configuration.
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(
                                "/api/auth/register",
                                "/api/auth/login",
                                "/swagger-ui/**",
                                "/swagger-ui.html",
                                "/v3/api-docs/**"
                        ).permitAll() // Allow public access to these endpoints
                        .requestMatchers("/api/customer/**").authenticated() // Require authentication for customer endpoints
                        .anyRequest().authenticated() // Authenticate all other requests
                )
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class); // Add JWT filter before UsernamePasswordAuthenticationFilter

        return http.build();
    }

    /**
     * Configures CORS settings for the application to allow communication between frontend and backend.
     *
     * This method allows HTTP requests from a specified origin (e.g., localhost:3000) to access
     * the backend APIs. It supports various HTTP methods (GET, POST, PUT, DELETE) and allows
     * all headers. Credentials (such as cookies or Authorization headers) are also permitted.
     *
     * @return A WebMvcConfigurer instance with configured CORS settings.
     */
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000")
                        .allowedMethods("GET", "POST", "PUT", "DELETE")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }

    /**
     * Configures and provides an AuthenticationProvider bean.
     *
     * This AuthenticationProvider is a DaoAuthenticationProvider which uses
     * the customCustomerDetailsService to load user-specific data and the
     * custom PasswordEncoder (using SHA-256) to verify password matches.
     *
     * It integrates with the authentication process by delegating the user
     * data lookup and password validation to the provided services.
     *
     * @return A fully configured DaoAuthenticationProvider instance.
     */
    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(customCustomerDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }


    /**
     * Provides a custom PasswordEncoder bean using SHA-256 hashing algorithm.
     *
     * This encoder hashes the raw password using the SHA-256 algorithm and
     * encodes the resulting byte array to a Base64 string. It also provides
     * a matching mechanism by comparing the encoded password with the hashed
     * value of the provided raw password.
     *
     * @return A PasswordEncoder instance configured to use SHA-256 hashing.
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new PasswordEncoder() {
            @Override
            public String encode(CharSequence rawPassword) {
                try {
                    MessageDigest md = MessageDigest.getInstance("SHA-256");
                    byte[] hashedPassword = md.digest(rawPassword.toString().getBytes());
                    return Base64.getEncoder().encodeToString(hashedPassword);
                } catch (NoSuchAlgorithmException e) {
                    throw new RuntimeException("Error occurred while hashing the password", e);
                }
            }

            @Override
            public boolean matches(CharSequence rawPassword, String encodedPassword) {
                return encode(rawPassword).equals(encodedPassword);
            }
        };
    }


    /**
     * Provides the AuthenticationManager bean required by Spring Security.
     *
     * This method retrieves the default AuthenticationManager from the provided
     * AuthenticationConfiguration. The AuthenticationManager is responsible for
     * handling authentication requests and validating user credentials.
     *
     * @param config The AuthenticationConfiguration containing the authentication settings.
     * @return The configured AuthenticationManager bean.
     * @throws Exception If there is an issue during configuration.
     */
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}
