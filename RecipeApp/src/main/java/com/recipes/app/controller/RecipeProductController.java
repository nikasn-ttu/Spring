package com.recipes.app.controller;

import com.recipes.app.model.RecipeProduct;
import com.recipes.app.model.dto.RecipeProductDTO;
import com.recipes.app.repository.ProductRepository;
import com.recipes.app.repository.RecipeProductRepository;
import com.recipes.app.repository.RecipeRepository;
import com.recipes.app.repository.TypeRepository;
import org.springframework.data.jdbc.core.mapping.AggregateReference;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/recipe-products/")
public class RecipeProductController {

    private final RecipeProductRepository recipeProductRepository;
    private final RecipeRepository recipeRepository;
    private final ProductRepository productRepository;
    private final TypeRepository typeRepository;



    public RecipeProductController(RecipeProductRepository recipeProductRepository, RecipeRepository recipeRepository, ProductRepository productRepository, TypeRepository typeRepository) {
        this.recipeProductRepository = recipeProductRepository;
        this.recipeRepository = recipeRepository;
        this.productRepository = productRepository;
        this.typeRepository = typeRepository;

    }

    @GetMapping("")
    public List<RecipeProductDTO> getAll(){
        Iterable<RecipeProduct> recipeProducts = recipeProductRepository.findAll();
        List<RecipeProductDTO> recipeProductDTOList = new ArrayList<>();
        for (RecipeProduct model : recipeProducts){
            RecipeProductDTO dto = new RecipeProductDTO();
            dto.setId(model.getId());
            dto.setRecipe(recipeRepository.findById(model.getRecipeId().getId()).orElse(null));
            dto.setProduct(productRepository.findById(model.getProductId().getId()).orElse(null));
            dto.setType(typeRepository.findById(model.getTypeId().getId()).orElse(null));
            recipeProductDTOList.add(dto);
        }
        return recipeProductDTOList;
    }

    @GetMapping("{id}")
    public List<RecipeProductDTO> getAll(@PathVariable UUID id){
        Iterable<RecipeProduct> recipeProducts = recipeProductRepository.findRecipeProductByRecipeId(AggregateReference.to(id));
        List<RecipeProductDTO> recipeProductDTOList = new ArrayList<>();
        for (RecipeProduct model : recipeProducts){
            RecipeProductDTO dto = new RecipeProductDTO();
            dto.setId(model.getId());
            dto.setRecipe(recipeRepository.findById(model.getRecipeId().getId()).orElse(null));
            dto.setProduct(productRepository.findById(model.getProductId().getId()).orElse(null));
            dto.setType(typeRepository.findById(model.getTypeId().getId()).orElse(null));
            recipeProductDTOList.add(dto);
        }
        return recipeProductDTOList;
    }


}
