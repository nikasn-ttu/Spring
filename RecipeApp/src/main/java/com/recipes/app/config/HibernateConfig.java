package com.recipes.app.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;
@Profile("hibernate | default")
@Configuration
@PropertySource("classpath:application-h2.properties")
public class HibernateConfig {
}
