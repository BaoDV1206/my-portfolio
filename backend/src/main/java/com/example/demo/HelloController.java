package com.example.demo;

import com.example.demo.dto.PortfolioResponse;
import com.example.demo.service.PortfolioService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class HelloController {

    private final PortfolioService portfolioService;

    public HelloController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping("/portfolio")
    public PortfolioResponse getPortfolio(@RequestParam(defaultValue = "vi") String lang) {
        return portfolioService.getPortfolioData(lang);
    }
}