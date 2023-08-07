package com.commerce.eshop.DTO.identity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JwtResponse {
    private String jwt;
    private String refreshToken;
    private String errorMessage;
}
