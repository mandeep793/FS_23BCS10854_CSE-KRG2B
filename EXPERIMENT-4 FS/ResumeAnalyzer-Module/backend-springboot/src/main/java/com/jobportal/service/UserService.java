package main.java.com.jobportal.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import main.java.com.jobportal.repository.UserRepository;
import main.java.com.jobportal.model.User;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepo;

    public User register(User user) {
        return userRepo.save(user);
    }

    public User login(String username, String password) {
        User u = userRepo.findByUsername(username);
        if (u != null && u.getPassword().equals(password)) return u;
        return null;
    }
}
