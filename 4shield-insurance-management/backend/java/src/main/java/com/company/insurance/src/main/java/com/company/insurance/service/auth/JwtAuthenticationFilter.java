package com.company.insurance.service.auth;

import com.company.insurance.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CustomCustomerDetailsService customUserDetailsService;

    @Autowired
    private ApplicationContext applicationContext; // Inject ApplicationContext to get HandlerExceptionResolver

    /**
     * Filters each incoming request to check for a valid JWT token.
     * If valid, the user is authenticated and the request proceeds.
     * If invalid, an exception is caught and handled by the HandlerExceptionResolver.
     */
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws IOException, ServletException {

        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String email;

        try {
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                filterChain.doFilter(request, response);
                return;
            }

            // Extract JWT token from the Authorization header
            jwt = authHeader.substring(7);
            email = jwtUtil.extractUsername(jwt);

            if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                UserDetails userDetails = customUserDetailsService.loadUserByUsername(email);

                // Validate the token
                if (jwtUtil.validateToken(jwt, userDetails)) {
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                            userDetails,
                            null,
                            userDetails.getAuthorities()
                    );

                    SecurityContextHolder.getContext().setAuthentication(authToken);
                }
            }
            filterChain.doFilter(request, response);

        } catch (Exception e) {
            // Resolve the exception using the HandlerExceptionResolver from ApplicationContext
            HandlerExceptionResolver handlerExceptionResolver = applicationContext.getBean(HandlerExceptionResolver.class);
            handlerExceptionResolver.resolveException(request, response, null, e);
        }
    }
}
