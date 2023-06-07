package com.recipes.app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
@Profile("postgres")
@Configuration
@PropertySource("classpath:application-postgres.properties")
public class PostgresConfig {


}
