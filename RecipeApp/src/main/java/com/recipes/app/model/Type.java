package com.recipes.app.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Type {
    @Id
    private UUID id;
    private String name;

    public Type(String name) {
        this.name = name;
    }
}
