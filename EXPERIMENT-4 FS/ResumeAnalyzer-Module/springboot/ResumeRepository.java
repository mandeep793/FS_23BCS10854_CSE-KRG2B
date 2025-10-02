package com.skillsync.repository;

import com.skillsync.model.Resume;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ResumeRepository extends MongoRepository<Resume,String> {}
