package com.company.insurance.controller.auth;

import com.company.insurance.model.auth.User;
import com.company.insurance.service.auth.EmployeeService;
import com.company.insurance.repository.auth.UserRepository;
import com.company.insurance.dto.auth.EmployeeDTO;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping
    public List<EmployeeDTO> getAllEmployees() {
        return employeeService.getAllEmployees();
    }
    
    @GetMapping("/email/{email}")
public ResponseEntity<EmployeeDTO> getEmployeeByEmail(@PathVariable String email) {
    Optional<EmployeeDTO> employee = employeeService.getEmployeeByEmail(email).stream().findFirst();
    return employee.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());

}

@DeleteMapping("/email/{email}")
public ResponseEntity<String> deleteEmployeeByEmail(@PathVariable String email) {
    try {
        employeeService.deleteEmployeeByEmail(email);
        return ResponseEntity.ok("Employee with email " + email + " has been deleted successfully.");
    } catch (IllegalArgumentException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    } catch (Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("An error occurred while deleting the employee.");
    }
}

}

