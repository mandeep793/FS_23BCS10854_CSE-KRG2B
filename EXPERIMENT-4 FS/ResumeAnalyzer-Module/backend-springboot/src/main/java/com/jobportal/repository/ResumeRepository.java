package main.java.com.jobportal.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import main.java.com.jobportal.model.Resume;

public interface ResumeRepository extends JpaRepository<Resume, Long> {
}
