package com.recipes.app.model.dto;

import com.recipes.app.model.Product;
import com.recipes.app.model.Recipe;
import com.recipes.app.model.Type;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RecipeProductDTO {
    private UUID id;
    private Recipe recipe;
    private Product product;
    private Type type;
}
