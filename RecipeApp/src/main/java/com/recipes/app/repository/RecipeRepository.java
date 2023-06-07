package com.recipes.app.repository;

import com.recipes.app.model.Recipe;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface RecipeRepository extends CrudRepository<Recipe, UUID> {
}
