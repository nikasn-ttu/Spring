package com.recipes.app.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Recipe {
    @Id
    private UUID id;
    private String name;
    private String description;

    private LocalDateTime publishedOn;

    private LocalDateTime updatedOn;

    public Recipe(String name, String description) {
        this.name = name;
        this.description = description;
        this.publishedOn = LocalDateTime.now();
    }
}
