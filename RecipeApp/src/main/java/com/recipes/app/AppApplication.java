package com.recipes.app;

import com.recipes.app.Helper.SchemaInitializer;
import com.recipes.app.model.Product;
import com.recipes.app.model.Recipe;
import com.recipes.app.model.RecipeProduct;
import com.recipes.app.model.Type;
import com.recipes.app.repository.ProductRepository;
import com.recipes.app.repository.RecipeProductRepository;
import com.recipes.app.repository.RecipeRepository;
import com.recipes.app.repository.TypeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.jdbc.core.mapping.AggregateReference;

import java.util.List;
import java.util.UUID;

@SpringBootApplication
@PropertySource("classpath:application-postgres.properties")
public class AppApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppApplication.class, args);
	}

	@Bean
	CommandLineRunner run(RecipeRepository recipe, ProductRepository product, TypeRepository type,
						  RecipeProductRepository recipeProduct, SchemaInitializer init, Environment env){
		return args -> {
			List<String> activeProfiles = List.of(env.getActiveProfiles());
			if(activeProfiles.contains("postgres")){
				init.createTables();
			}
			recipe.save(new Recipe("My first recipe of mashed potatoes", null));
			AggregateReference<Recipe, UUID> recipeId = AggregateReference.to(recipe.save(new Recipe("My first recipe of mashed potatoes", null)).getId());
			type.save(new Type("kg"));
			type.save(new Type("l"));
			type.save(new Type("g"));
			type.save(new Type("ml"));
			List<Type> listOfTypes = (List<Type>) type.findAll();
			Type selectedType1 = null;
			Type selectedType2 = null;
			for (Type typeOfProduct : listOfTypes) {
				if(typeOfProduct.getName().equals("kg")){
					selectedType1 = typeOfProduct;
				}
				if(typeOfProduct.getName().equals("ml")){
					selectedType2 = typeOfProduct;
				}
			}
			AggregateReference<Type, UUID> kgId = AggregateReference.to(selectedType1.getId());
			AggregateReference<Type, UUID> mlId = AggregateReference.to(selectedType2.getId());
			AggregateReference<Product, UUID> potatoId = AggregateReference.to(product.save(new Product("Potato", null)).getId());
			AggregateReference<Product, UUID> milkId = AggregateReference.to(product.save(new Product("Milk", "2% of fat")).getId());
			recipeProduct.save(new RecipeProduct(recipeId,potatoId,kgId,1.5));
			recipeProduct.save(new RecipeProduct(recipeId,milkId,mlId,400.0));



		};
	}

}
