package com.recipes.app.repository;

import com.recipes.app.model.Type;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface TypeRepository extends CrudRepository<Type, UUID> {
}
