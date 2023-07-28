package com.commerce.eshop.services;

import com.commerce.eshop.DTO.identity.JwtResponse;
import com.commerce.eshop.models.user.ApplicationUser;
import com.commerce.eshop.models.user.RefreshToken;
import com.commerce.eshop.models.user.Role;
import com.commerce.eshop.repository.RoleRepository;
import com.commerce.eshop.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.*;

@Service
@Transactional
public class AuthenticationService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;


    public ApplicationUser registerUser(String username, String password, String firstName, String lastName, String phoneNumber){
        String encodedPassword = passwordEncoder.encode(password);
        Role userRole = roleRepository.findByAuthority("USER").get();
        Set<Role> roles = new HashSet<>();
        roles.add(userRole);
        return userRepository.save(new ApplicationUser(UUID.randomUUID(),username, encodedPassword,roles, firstName, lastName, phoneNumber));

    }

    public JwtResponse loginUser(String username, String password){
        try{
            Authentication auth = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(username, password));
            List<RefreshToken> usersListOfRefreshTokens = tokenService.getUserListOfRefreshTokens((ApplicationUser) auth.getPrincipal());
            for (RefreshToken refreshToken:
                 usersListOfRefreshTokens) {
                if(refreshToken.getExpirationTs().isBefore(Instant.now()) &&
                        (
                                refreshToken.getPreviousRefreshToken() == null ||
                                refreshToken.getPreviousExpirationTs().isBefore(Instant.now())))
                {
                    tokenService.deleteRefreshToken(refreshToken);
                }
            }
            RefreshToken refreshToken = new RefreshToken();
            refreshToken.setApplicationUser((ApplicationUser) auth.getPrincipal());
            RefreshToken savedRefreshToken = tokenService.saveRefreshToken(refreshToken);
            String token = tokenService.generateJwt(auth);
            JwtResponse jwtResponse = new JwtResponse(token, savedRefreshToken.getRefreshToken());
            return jwtResponse;
        }catch (AuthenticationException e){
            return new JwtResponse();
        }
    }

    public JwtResponse updateToken(String jwt, String refreshToken){
        JwtResponse jwtResponse = tokenService.updateJwtTokenByRefreshToken(jwt, refreshToken);
        return jwtResponse;
    }



}
