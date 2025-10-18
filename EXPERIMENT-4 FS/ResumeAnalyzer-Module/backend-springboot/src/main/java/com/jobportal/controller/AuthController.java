package main.java.com.jobportal.controller;
import org.springframework.web.bind.annotation.*;
import main.java.com.jobportal.service.UserService;
import main.java.com.jobportal.model.User;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        user.setRole("job_seeker");
        return userService.register(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        return userService.login(user.getUsername(), user.getPassword());
    }
}
