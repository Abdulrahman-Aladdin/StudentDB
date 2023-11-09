package com.ebn_aladdin.studentSystem.service;

import com.ebn_aladdin.studentSystem.model.Student;
import com.ebn_aladdin.studentSystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    StudentRepository studentRepository;
    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public Iterable<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}
