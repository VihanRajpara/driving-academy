package com.academy.login.controller;

import com.academy.Auth.JwtService;
import com.academy.EncryptionService;
import com.academy.login.modal.LoginReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    EncryptionService encryptionService;

    @Autowired
    JwtService jwtService;

    @PostMapping("/entry")
    public ResponseEntity<?> getLogin(@RequestBody LoginReq obj) {
        try {
            System.out.println("entering in login :: "+obj);

            // 1. Validate request body
            if (obj.getUsername() == null || obj.getUsername().isBlank() || obj.getPassword() == null || obj.getPassword().isBlank()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username and password are required");
            }

            // 2. Query user by loginId (username)
            String sql = "SELECT * FROM academyDB.users WHERE loginId = '"+obj.getUsername()+"'";
            System.out.println("my sql ::" + sql);

            List<Map<String, Object>> users = jdbcTemplate.queryForList(sql);

            System.out.println("users :::" + users);
            // 3. If no user found
            if (users.isEmpty()) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username");
            }

            // 4. Get first user row
            Map<String, Object> userRow = users.get(0);

            // Change "password" to your actual column name if different
            String dbPassword = (String) userRow.get("password");

            // 5. Compare passwords (simple equals — in real life use hashing!)
            if (!obj.getPassword().equals(dbPassword)) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
            }

            // 6. Success - build a small JSON response

            Map<String, Object> response = new HashMap<>();


            Map<String, Object> user = new HashMap<>();
            user.put("username", userRow.get("loginId"));
            user.put("name", userRow.get("username"));
            user.put("email", userRow.get("email"));
            user.put("number", userRow.get("number"));


            String token = jwtService.generateToken((String) userRow.get("loginId"));
            response.put("user", user);
            response.put("token", token);

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            System.err.println("Error while login ::" + e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong while processing login");
        }
    }


}
