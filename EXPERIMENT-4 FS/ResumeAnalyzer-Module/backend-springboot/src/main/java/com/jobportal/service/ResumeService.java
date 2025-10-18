package main.java.com.jobportal.service;
import org.springframework.stereotype.Service;
import main.java.com.jobportal.repository.ResumeRepository;
import main.java.com.jobportal.model.Resume;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class ResumeService {
    @Autowired
    private ResumeRepository resumeRepo;

    public Resume save(Resume resume) {
        return resumeRepo.save(resume);
    }
}
