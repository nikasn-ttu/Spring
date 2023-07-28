package com.commerce.eshop.models;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.UUID;

@Embeddable
public class ProductSizeId implements Serializable {
    @Column(name = "product_id")
    private UUID productId;

    @Column(name = "size_id")
    private UUID sizeId;
}
