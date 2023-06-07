package com.example.springboot;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
@ComponentScan(basePackages = "com.example.springboot")
public class Config {
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
    @Bean(name = "API")
    public String myApi(){
        return "http://api.weatherapi.com/v1/forecast.json?key=ec177e20e04f4ed0a97141001232004&q=Estonia&days=7&aqi=no&alerts=no";
    }
}
