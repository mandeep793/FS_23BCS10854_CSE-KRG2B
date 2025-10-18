package main.java.com.jobportal.controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import main.java.com.jobportal.service.ResumeService;
import main.java.com.jobportal.model.Resume;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api/resume")
public class ResumeController {
    @Autowired
    private ResumeService resumeService;

    @PostMapping("/upload")
    public String uploadResume(@RequestParam("file") MultipartFile file) {
        // Store local or send file bytes to Flask microservice
        // For now, just ack (implement storage/integration later)
        return "Uploaded: " + file.getOriginalFilename();
    }
}
