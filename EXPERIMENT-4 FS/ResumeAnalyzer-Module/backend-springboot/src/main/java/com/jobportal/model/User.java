package main.java.com.jobportal.model;
import javax.persistence.*;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username; 
    private String password;
    private String role;

    // Getters and setters...
}
