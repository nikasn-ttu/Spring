package com.commerce.eshop.Helpers;

import com.commerce.eshop.DTO.*;
import com.commerce.eshop.models.*;

public class HelperMethods {
    public static CategoryDTO convertToCategoryDTO(Category category) {
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setId(category.getId());
        categoryDTO.setName(category.getName());
        categoryDTO.setImage(category.getImage());
        return categoryDTO;
    }

    public static ImageDTO convertToImageDTO(Image image) {
        ImageDTO imageDTO = new ImageDTO();
        imageDTO.setId(image.getId());
        imageDTO.setImage(image.getImage());
        imageDTO.setProductId(image.getProduct().getId());
        return imageDTO;
    }

    public static SizeDTO convertToSizeDTO(Size size) {
        SizeDTO sizeDTO = new SizeDTO();
        sizeDTO.setId(size.getId());
        sizeDTO.setName(size.getName());
        sizeDTO.setCandyLimit(size.getCandyLimit());
        return sizeDTO;
    }

    public static CandyDTO convertToCandyDTO(Candy candy){
        CandyDTO candyDTO = new CandyDTO();
        candyDTO.setId(candy.getId());
        candyDTO.setName(candy.getName());
        candyDTO.setImage(candy.getImage());
        candyDTO.setQuantity(candy.getQuantity());
        return candyDTO;
    }

    public static OrderRowDTO convertToOrderRowDTO(OrderRow orderRow){
        OrderRowDTO orderRowDTO = new OrderRowDTO();
        orderRowDTO.setId(orderRow.getId());
        orderRowDTO.setProduct(convertToProductDTO(orderRow.getProduct()));
        orderRowDTO.setSize(convertToSizeDTO(orderRow.getSize()));
        orderRowDTO.setCandy(convertToCandyDTO(orderRow.getCandy()));
        orderRowDTO.setQuantity(orderRow.getQuantity());
        return orderRowDTO;
    }

    public static OrderDTO convertToOrderDTO(Order order){
        OrderDTO orderDTO = new OrderDTO();
        //add user id
        orderDTO.setId(order.getId());
        orderDTO.setStatus(order.getStatus());
        orderDTO.setCreatedAt(order.getCreatedAt());
        orderDTO.setPrice(order.getPrice());
        orderDTO.setIsDone(order.getIsDone());
        orderDTO.setBankName(order.getBankName());
        orderDTO.setPaymentUrl(order.getPaymentUrl());
        orderDTO.setName(order.getName());
        orderDTO.setOrderRows(order.getOrderRows().stream().map(HelperMethods::convertToOrderRowDTO).toList());
        return orderDTO;
    }

    public static ProductSizeDTO convertToProductSizeDTO(ProductSize productSize) {
        ProductSizeDTO productSizeDTO = new ProductSizeDTO();
        productSizeDTO.setSize(convertToSizeDTO(productSize.getSize()));
        productSizeDTO.setQuantity(productSize.getQuantity());
        productSizeDTO.setEmptyPrice(productSize.getEmptyPrice());
        productSizeDTO.setFullPrice(productSize.getFullPrice());
        productSizeDTO.setProductId(productSize.getProduct().getId());
        return productSizeDTO;
    }

    public static ProductDTO convertToProductDTO(Product product) {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setId(product.getId());
        productDTO.setName(product.getName());
        productDTO.setDescription(product.getDescription());
        productDTO.setCategory(convertToCategoryDTO(product.getCategory()));
        productDTO.setImages(product.getImages().stream().map(HelperMethods::convertToImageDTO).toList());
        productDTO.setProductSizes(product.getProductSizes().stream().map(HelperMethods::convertToProductSizeDTO).toList());
        return productDTO;
    }
}
