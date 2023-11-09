package com.ebn_aladdin.studentSystem.controller;

import com.ebn_aladdin.studentSystem.model.Student;
import com.ebn_aladdin.studentSystem.repository.StudentRepository;
import com.ebn_aladdin.studentSystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/student")
@CrossOrigin
public class Controller {

    @Autowired
    private StudentService studentService;

    @PostMapping(path="/add")
    public @ResponseBody String addNewStudent (@RequestBody Student student) {
        studentService.saveStudent(student);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
}
