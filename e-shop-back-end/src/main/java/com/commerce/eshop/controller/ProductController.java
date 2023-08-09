package com.commerce.eshop.controller;

import com.commerce.eshop.DTO.ProductDTO;
import com.commerce.eshop.Helpers.HelperMethods;
import com.commerce.eshop.models.Product;
import com.commerce.eshop.repository.CategoryRepository;
import com.commerce.eshop.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/")
    public List<ProductDTO> getAllProducts(){
        List<Product> products = productService.getAllProducts();
        List<ProductDTO> productDTOs = products.stream()
                .map(HelperMethods::convertToProductDTO)
                .collect(Collectors.toList());
        return productDTOs;
    }
    @GetMapping("/{categoryId}")
    public List<Product> getListOfProductsBelongsToCategory(@PathVariable UUID categoryId){
        return productService.getListOfProductsBelongsToCategory(categoryId);
    }

}
