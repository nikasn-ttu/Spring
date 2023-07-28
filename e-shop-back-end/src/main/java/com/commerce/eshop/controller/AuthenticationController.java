package com.commerce.eshop.controller;

import com.commerce.eshop.DTO.LoginDTO;
import com.commerce.eshop.DTO.identity.RefreshTokenModel;
import com.commerce.eshop.DTO.identity.RegisterDTO;
import com.commerce.eshop.DTO.identity.JwtResponse;
import com.commerce.eshop.models.user.ApplicationUser;
import com.commerce.eshop.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;
    @PostMapping("/register")
    public ApplicationUser registerUser(@RequestBody RegisterDTO body){
        return authenticationService.registerUser(body.getUsername(), body.getPassword(),body.getFirstName(), body.getLastName(), body.getPhoneNumber());
    };

    @PostMapping("/login")
    public JwtResponse loginUser(@RequestBody LoginDTO body){
        return  authenticationService.loginUser(body.getUsername(), body.getPassword());
    }

    @PostMapping("/updateToken")
    public JwtResponse updateToken(@RequestBody RefreshTokenModel refreshTokenModel){
        return authenticationService.updateToken(refreshTokenModel.getJwt(), refreshTokenModel.getRefreshToken());
    }

}
