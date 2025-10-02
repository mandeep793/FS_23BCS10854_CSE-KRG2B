package com.skillsync.controller;

import com.skillsync.model.Resume;
import com.skillsync.repository.ResumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/resume")
public class ResumeAnalyzerController {

    @Autowired
    private ResumeRepository resumeRepository;

    @PostMapping("/analyze")
    public ResponseEntity<?> analyzeResume(@RequestParam("resume") MultipartFile resume,
                                           @RequestParam("jobDescription") String jobDescription) throws IOException {

        String pythonUrl = "http://localhost:5000/analyze";

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("resume", resume.getResource());
        body.add("job_description", jobDescription);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        HttpEntity<MultiValueMap<String,Object>> requestEntity = new HttpEntity<>(body, headers);
        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<Map> response = restTemplate.postForEntity(pythonUrl, requestEntity, Map.class);
        Map<String, Object> result = response.getBody();

        Resume resumeEntity = new Resume();
        resumeEntity.setUserId("dummyUser");
        resumeEntity.setResumeText((String) result.get("resumeText"));
        resumeEntity.setJobDescription(jobDescription);
        resumeEntity.setMatchScore((Double) result.get("matchScore"));
        resumeEntity.setMissingSkills((List<String>) result.get("missingSkills"));

        resumeRepository.save(resumeEntity);
        return ResponseEntity.ok(result);
    }
}
