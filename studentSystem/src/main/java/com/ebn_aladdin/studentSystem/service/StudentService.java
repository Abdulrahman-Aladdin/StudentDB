package com.ebn_aladdin.studentSystem.service;

import com.ebn_aladdin.studentSystem.model.Student;
import org.springframework.stereotype.Service;

public interface StudentService {
    public Student saveStudent(Student student);
    public Iterable<Student> getAllStudents();
}
