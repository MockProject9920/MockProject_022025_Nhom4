package com.example.module3.controller.admin;

import com.example.module3.service.PremiumImpl.PremiumService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class PremiumController {
    private final PremiumService premiumService;

    @GetMapping("/premium_ids")
    public ResponseEntity<List<Long>> getAllPremiumIds() {
        return ResponseEntity.ok(premiumService.getAllPremiumIds());
    }
}
