package main.java.com.jobportal.model;
import javax.persistence.*;

@Entity
public class Resume {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String filename;
    private String url; 
    @ManyToOne
    private User user;
}
