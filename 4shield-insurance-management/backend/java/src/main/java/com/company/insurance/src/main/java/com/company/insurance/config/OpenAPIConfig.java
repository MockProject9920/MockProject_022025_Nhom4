package com.company.insurance.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenAPIConfig {

    /**
     * Configures and provides the OpenAPI bean for API documentation.
     *
     * This method sets up the OpenAPI documentation for the FourShield Insurance API,
     * making use of the Swagger UI for easy interaction and testing of the available endpoints.
     *
     * It defines the API's title, version, and description, which will be displayed in the Swagger UI interface.
     *
     * @return An OpenAPI object containing the documentation information.
     */
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("FourShield Insurance API")
                        .version("1.0")
                        .description("API Documentation for FourShield Insurance"));
    }

}
