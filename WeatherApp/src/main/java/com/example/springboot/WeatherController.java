package com.example.springboot;

import DTO.Root;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;


import java.io.IOException;
@RestController
public class WeatherController {
    private final RestTemplate restTemplate;
    private final String api;

    public WeatherController(RestTemplate restTemplate, @Qualifier("API") String api) {
        this.restTemplate = restTemplate;
        this.api = api;
    }


    @GetMapping("/")
        public Root getWeatherData() throws IOException {
            ResponseEntity<String> response = restTemplate.getForEntity(api, String.class);
            ObjectMapper mapper = new ObjectMapper();
            Root root = mapper.readValue(response.getBody(), Root.class);

        return root;
        }


}