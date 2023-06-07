package com.recipes.app.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.jdbc.core.mapping.AggregateReference;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class RecipeProduct {
    @Id
    private UUID id;

    private AggregateReference<Recipe, UUID> recipeId;

    private AggregateReference<Product, UUID> productId;

    private AggregateReference<Type, UUID> typeId;
    private Double amount;

    public RecipeProduct(AggregateReference<Recipe, UUID> recipeId, AggregateReference<Product, UUID> productId, AggregateReference<Type, UUID> typeId, Double amount) {
        this.recipeId = recipeId;
        this.productId = productId;
        this.typeId = typeId;
        this.amount = amount;
    }
}
