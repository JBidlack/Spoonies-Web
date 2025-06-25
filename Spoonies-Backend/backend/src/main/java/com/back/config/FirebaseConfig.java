package com.back.config;

import java.io.FileInputStream;
import java.io.IOException;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.annotation.PostConstruct;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;


@Configuration
public class FirebaseConfig{

    @PostConstruct
    public void initFirebase() throws IOException{
        FileInputStream account = new FileInputStream("Spoonies-Backend\\backend\\src\\main\\resources\\spoonies-a1f59-firebase-adminsdk-fbsvc-af74f077fc.json");

        FirebaseOptions options = FirebaseOptions.builder()
            .setCredentials(GoogleCredentials.fromStream(account))
            .build();

        if (FirebaseApp.getApps().isEmpty()){
            FirebaseApp.initializeApp(options);
        }
    }


}
// @Configuration
// public class FirebaseConfig extends OncePerRequestFilter{

//     @Override
//     protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//             throws ServletException, IOException {
//         String token = extractJwtFromRequest(request);
        
//         if (token != null){
//             try{
//                 FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(token);
//                 String userId = decodedToken.getUid();
//                 Authentication auth = new UsernamePasswordAuthenticationToken(userId, null, null);
//                 SecurityContextHolder.getContext().setAuthentication(auth);

//             }
//             catch(FirebaseAuthException fb){
//                 response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid Firebase Token.");
//                 return;
//             }
//         }
//         filterChain.doFilter(request, response);
//     }

//     private String extractJwtFromRequest(HttpServletRequest request){
//         String bearerToken = request.getHeader("Authorization");
//         if(bearerToken != null && bearerToken.startsWith("Bearer ")){
//             return bearerToken.substring(7);
//         }
//         return null;
//     }    

    
    
// }
