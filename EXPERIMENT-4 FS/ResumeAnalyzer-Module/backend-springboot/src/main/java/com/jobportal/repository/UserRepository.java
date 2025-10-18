package main.java.com.jobportal.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import main.java.com.jobportal.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
