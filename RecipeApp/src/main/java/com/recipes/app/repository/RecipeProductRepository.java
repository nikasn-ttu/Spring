package com.recipes.app.repository;

import com.recipes.app.model.Recipe;
import com.recipes.app.model.RecipeProduct;
import org.springframework.data.jdbc.core.mapping.AggregateReference;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface RecipeProductRepository extends CrudRepository<RecipeProduct, UUID> {
    Iterable<RecipeProduct> findRecipeProductByRecipeId(AggregateReference<Recipe, UUID> recipeId);
}
