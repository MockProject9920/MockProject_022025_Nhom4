package com.example.module3.service.PremiumImpl;

import com.example.module3.repository.PremiumRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PremiumImpl implements PremiumService {
    private final PremiumRepository premiumRepository;

    @Override
    public List<Long> getAllPremiumIds() {
        return premiumRepository.findAllPremiumIds();
    }
}
