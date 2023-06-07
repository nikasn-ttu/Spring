package com.recipes.app.Helper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.util.StreamUtils;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

@Component
public class SchemaInitializer {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public SchemaInitializer(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void createTables() {
        String schemaSql = "schema-postgres.sql"; // Path to your schema SQL file
        ClassPathResource resource = new ClassPathResource(schemaSql);

        try {
            String sql = StreamUtils.copyToString(resource.getInputStream(), StandardCharsets.UTF_8);
            jdbcTemplate.execute(sql);
        } catch (IOException e) {
            // Handle exception
        }
    }
}
