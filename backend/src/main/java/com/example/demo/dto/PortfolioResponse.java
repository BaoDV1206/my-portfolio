package com.example.demo.dto;

import java.util.List;

public record PortfolioResponse(
    ProfileDto profile,
    List<SkillCategoryDto> technicalSkills,
    List<SkillMatrixDto> skillMatrix,
    List<ProjectDto> projects
) {
    public record ProfileDto(
        String name,
        String title,
        String experienceBadge,
        String summary,
        String avatarUrl,
        String toeic,
        String japanese,
        String location
    ) {}

    public record SkillCategoryDto(
        String category,
        List<String> skills
    ) {}

    public record SkillMatrixDto(
        String skill,
        String exp,
        String lastUsed,
        String level
    ) {}

    public record ProjectDto(
        String title,
        String role,
        String period,
        String desc,
        List<String> tasks,
        List<String> tech
    ) {}
}