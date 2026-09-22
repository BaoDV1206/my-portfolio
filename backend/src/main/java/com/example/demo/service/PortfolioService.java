package com.example.demo.service;

import com.example.demo.dto.PortfolioResponse;
import com.example.demo.dto.PortfolioResponse.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PortfolioService {

    public PortfolioResponse getPortfolioData(String lang) {
        String normalizedLang = (lang != null) ? lang.toLowerCase() : "vi";

        return switch (normalizedLang) {
            case "en" -> getEnglishData();
            case "ja" -> getJapaneseData();
            default -> getVietnameseData();
        };
    }

    private PortfolioResponse getVietnameseData() {
        ProfileDto profile = new ProfileDto(
            "Đinh Văn Bảo",
            "Java Developer / Software Engineer",
            "3+ năm kinh nghiệm",
            "Kỹ sư phần mềm với hơn 3 năm kinh nghiệm thực chiến trong việc phát triển hệ thống Back-end bằng Java, Spring Boot, nền tảng Intra-mart Accel, tích hợp đa dạng hệ quản trị cơ sở dữ liệu và xây dựng giao diện tương tác với ReactJS.",
            ".\\src\\public\\img\\user_avatar_01.jpg",
            "TOEIC 600",
            "Tiếng Nhật N4",
            "Việt Nam"
        );

        List<SkillCategoryDto> technicalSkills = List.of(
            new SkillCategoryDto("Backend & Core", List.of("Java (Java 8, 11, 21)", "Spring / Spring Boot", "Java Batch", "MyBatis", ".NET Core / .NET 6", "Intra-mart Platform")),
            new SkillCategoryDto("Frontend & Libraries", List.of("ReactJS", "Vue.js", "AngularJS", "jQuery", "JavaScript", "Bootstrap")),
            new SkillCategoryDto("Cơ sở dữ liệu", List.of("PostgreSQL", "MySQL", "MSSQL Server", "Oracle", "DB2", "CACHE/IRIS")),
            new SkillCategoryDto("Công cụ & Quản lý Source", List.of("Git", "SVN", "IntelliJ IDEA", "Eclipse", "VS Code", "eBuilder9")),
            new SkillCategoryDto("Kỹ năng mềm & Ngoại ngữ", List.of("Tiếng Nhật (N4)", "Tiếng Anh (TOEIC 600)", "Mô hình Scrum", "Phân tích & Giải quyết vấn đề", "Làm việc nhóm"))
        );

        List<SkillMatrixDto> skillMatrix = List.of(
            new SkillMatrixDto("Java", "3 năm", "2026", "Ứng dụng thực tế (Cấp 3)"),
            new SkillMatrixDto("Postgres", "2 năm", "2026", "Ứng dụng thực tế (Cấp 2)"),
            new SkillMatrixDto("SVN", "3 năm", "2026", "Ứng dụng thực tế (Cấp 3)"),
            new SkillMatrixDto("GIT", "3 năm", "2025", "Ứng dụng thực tế (Cấp 2)"),
            new SkillMatrixDto(".NET", "1 năm", "2026", "Ứng dụng thực tế (Cấp 2)"),
            new SkillMatrixDto("Intra-Mart Platform", "1 năm", "2026", "Ứng dụng thực tế (Cấp 1)"),
            new SkillMatrixDto("ReactJS / Vue.js", "6 tháng", "2024", "Ứng dụng thực tế (Cấp 1)"),
            new SkillMatrixDto("MySQL, DB2, Oracle, MSSQL", "1 năm", "2026", "Ứng dụng thực tế (Cấp 1)")
        );

        List<ProjectDto> projects = List.of(
            new ProjectDto(
                "Application Management System for Intra-mart",
                "Developer – Team Leader",
                "10/2025 – Hiện tại",
                "Phát triển ứng dụng quản lý đơn từ và cấp phép trên nền tảng workflow intra-mart (IM-Workflow, intra-mart Accel Kaiden!).",
                List.of("Xử lý và sửa lỗi hệ thống (Bug fixing).", "Thiết kế test cases, xây dựng tài liệu UTC và UTE.", "Đánh giá giải pháp và tham gia báo giá kỹ thuật cho khách hàng."),
                List.of("Java 11", "Spring", "IM-Workflow", "intra-mart Accel Kaiden!", "PostgreSQL")
            ),
            new ProjectDto(
                "MEI Clista! (Healthcare Statistics System)",
                "Developer – Team Member",
                "10/2024 – 10/2025",
                "Xây dựng ứng dụng thống kê y tế đa cơ sở dữ liệu quy mô lớn.",
                List.of("Phát triển tính năng thống kê, xuất kết quả phân tích và crawler dữ liệu.", "Tối ưu hóa câu truy vấn (query tuning), đánh index trên nhiều loại database.", "Xử lý cơ chế tìm kiếm đa luồng và hủy tìm kiếm đồng bộ."),
                List.of(".NET Core", ".NET Framework", "JavaScript", "PostgreSQL", "MySQL", "DB2", "Oracle", "CACHE/IRIS")
            ),
            new ProjectDto(
                "RPG Convert to Java",
                "Developer – Team Member",
                "09/2023 – 10/2024",
                "Chuyển đổi toàn bộ hệ thống kế toán từ ngôn ngữ di sản RPG sang kiến trúc Java hiện đại.",
                List.of("Phân tích nghiệp vụ hệ thống RPG cũ và viết lại tính năng trên nền Java.", "Triển khai các tác vụ Java Batch phục vụ xử lý số liệu kế toán lớn."),
                List.of("Java 8", "Java Batch", "MyBatis", "PostgreSQL")
            )
        );

        return new PortfolioResponse(profile, technicalSkills, skillMatrix, projects);
    }

    private PortfolioResponse getEnglishData() {
        ProfileDto profile = new ProfileDto(
            "Dinh Van Bao",
            "Java Developer / Software Engineer",
            "3+ Years of Experience",
            "Creative Forward-thinking Software Engineer with 3 years of experience. Fluent in Java, Spring, ReactJS and Intra-mart Accel Platform. Cooperative and able to perform within a dynamic, team-oriented atmosphere.",
            ".\\src\\public\\img\\user_avatar_us.png",
            "TOEIC 600",
            "Japanese N4",
            "Vietnam"
        );

        List<SkillCategoryDto> technicalSkills = List.of(
            new SkillCategoryDto("Backend & Core", List.of("Java (Java 8, 11, 21)", "Spring / Spring Boot", "Java Batch", "MyBatis", ".NET Core / .NET 6", "Intra-mart Platform")),
            new SkillCategoryDto("Frontend & Libraries", List.of("ReactJS", "Vue.js", "AngularJS", "jQuery", "JavaScript", "Bootstrap")),
            new SkillCategoryDto("Databases", List.of("PostgreSQL", "MySQL", "MSSQL Server", "Oracle", "DB2", "CACHE/IRIS")),
            new SkillCategoryDto("Tools & Version Control", List.of("Git", "SVN", "IntelliJ IDEA", "Eclipse", "VS Code", "eBuilder9")),
            new SkillCategoryDto("Soft Skills & Languages", List.of("Japanese (N4)", "English (TOEIC 600)", "Scrum Architecture", "Analytical Thinking", "Team Player"))
        );

        List<SkillMatrixDto> skillMatrix = List.of(
            new SkillMatrixDto("Java", "3 years", "2026", "Practical application (Level 3)"),
            new SkillMatrixDto("Postgres", "2 years", "2026", "Practical application (Level 2)"),
            new SkillMatrixDto("SVN", "3 years", "2026", "Practical application (Level 3)"),
            new SkillMatrixDto("GIT", "3 years", "2025", "Practical application (Level 2)"),
            new SkillMatrixDto(".NET", "1 year", "2026", "Practical application (Level 2)"),
            new SkillMatrixDto("Intra-Mart Platform", "1 year", "2026", "Practical application (Level 1)"),
            new SkillMatrixDto("ReactJS / Vue.js", "6 months", "2024", "Practical application (Level 1)"),
            new SkillMatrixDto("MySQL, DB2, Oracle, MSSQL", "1 year", "2026", "Practical application (Level 1)")
        );

        List<ProjectDto> projects = List.of(
            new ProjectDto(
                "Application Management System for Intra-mart",
                "Developer – Team Leader",
                "Oct. 2025 – Present",
                "Developing an application for managing applications and permits on the IM-Workflow intra-mart platform.",
                List.of("Fixing system bugs.", "Designing test cases / creating UTC and UTE.", "Evaluating and participating in client quotations."),
                List.of("Java 11", "Spring", "IM-Workflow", "intra-mart Accel Kaiden!", "PostgreSQL")
            ),
            new ProjectDto(
                "MEI Clista! (Healthcare Statistics System)",
                "Developer – Team Member",
                "Oct. 2024 – Oct. 2025",
                "Developing an application for a healthcare statistics system.",
                List.of("Developing statistical functions, exporting analysis results, and crawling data.", "Optimize queries across multiple databases and index management.", "Handle canceled searches across multiple databases."),
                List.of(".NET Core", ".NET Framework", "JavaScript", "PostgreSQL", "MySQL", "DB2", "Oracle", "CACHE/IRIS")
            ),
            new ProjectDto(
                "RPG Convert to Java",
                "Developer – Team Member",
                "Sep. 2023 – Oct. 2024",
                "Convert the accounting system from RPG to Java.",
                List.of("Transfer the legacy RPG features to the new Java system.", "Implement Java Batch tasks for heavy accounting operations."),
                List.of("Java 8", "Java Batch", "MyBatis", "PostgreSQL")
            )
        );

        return new PortfolioResponse(profile, technicalSkills, skillMatrix, projects);
    }

    private PortfolioResponse getJapaneseData() {
        ProfileDto profile = new ProfileDto(
            "ディン・ヴァン・バオ (Dinh Van Bao)",
            "Javaエンジニア / ソフトウェアエンジニア",
            "実務経験 3年以上",
            "Java、Spring Boot、Intra-mart Accel Platformを用いたバックエンド開発において3年以上の経験を持つソフトウェアエンジニア。チーム開発を重視し、アジャイル・スクラム環境に迅速に適応できます。",
            ".\\src\\public\\img\\user_avatar_jp.png",
            "TOEIC 600点",
            "日本語能力試験 N4",
            "ベトナム"
        );

        List<SkillCategoryDto> technicalSkills = List.of(
            new SkillCategoryDto("バックエンド・コア技術", List.of("Java (Java 8, 11, 21)", "Spring / Spring Boot", "Java Batch", "MyBatis", ".NET Core / .NET 6", "Intra-mart Platform")),
            new SkillCategoryDto("フロントエンド", List.of("ReactJS", "Vue.js", "AngularJS", "jQuery", "JavaScript", "Bootstrap")),
            new SkillCategoryDto("データベース", List.of("PostgreSQL", "MySQL", "MSSQL Server", "Oracle", "DB2", "CACHE/IRIS")),
            new SkillCategoryDto("ツール・バージョン管理", List.of("Git", "SVN", "IntelliJ IDEA", "Eclipse", "VS Code", "eBuilder9")),
            new SkillCategoryDto("語学・ソフトスキル", List.of("日本語 (N4)", "英語 (TOEIC 600)", "スクラム開発", "課題解決力", "チームワーク"))
        );

        List<SkillMatrixDto> skillMatrix = List.of(
            new SkillMatrixDto("Java", "3年", "2026", "実務適用レベル (Level 3)"),
            new SkillMatrixDto("Postgres", "2年", "2026", "実務適用レベル (Level 2)"),
            new SkillMatrixDto("SVN", "3年", "2026", "実務適用レベル (Level 3)"),
            new SkillMatrixDto("GIT", "3年", "2025", "実務適用レベル (Level 2)"),
            new SkillMatrixDto(".NET", "1年", "2026", "実務適用レベル (Level 2)"),
            new SkillMatrixDto("Intra-Mart Platform", "1年", "2026", "実務適用レベル (Level 1)"),
            new SkillMatrixDto("ReactJS / Vue.js", "6ヶ月", "2024", "実務適用レベル (Level 1)"),
            new SkillMatrixDto("MySQL, DB2, Oracle, MSSQL", "1年", "2026", "実務適用レベル (Level 1)")
        );

        List<ProjectDto> projects = List.of(
            new ProjectDto(
                "Intra-mart 申請・承認ワークフロー管理システム",
                "開発担当 – チームリーダー",
                "2025年10月 – 現在",
                "Intra-mart（IM-Workflow、intra-mart Accel Kaiden!）プラットフォーム上での申請・承認ワークフローシステムの開発。",
                List.of("システムの不具合修正（バグフィックス）。", "テストケース設計、単体テスト仕様書・エビデンス（UTC/UTE）作成。", "要件・仕様レビューおよび工数見積もりへの参加。"),
                List.of("Java 11", "Spring", "IM-Workflow", "intra-mart Accel Kaiden!", "PostgreSQL")
            ),
            new ProjectDto(
                "MEI Clista!（医療統計分析システム）",
                "開発担当 – チームメンバー",
                "2024年10月 – 2025年10月",
                "医療統計およびデータ分析アプリケーションの開発。",
                List.of("統計分析機能の開発、データ集計結果のエクスポート、データクローラー開発。", "複数DBにまたがるクエリチューニング、インデックス最適化。", "マルチスレッドによる検索制御およびキャンセル処理の実装。"),
                List.of(".NET Core", ".NET Framework", "JavaScript", "PostgreSQL", "MySQL", "DB2", "Oracle", "CACHE/IRIS")
            ),
            new ProjectDto(
                "RPGからJavaへのシステムマイグレーション",
                "開発担当 – チームメンバー",
                "2023年9月 – 2024年10月",
                "レガシー言語RPGで構築された会計システムをJavaへ全面リプレイス。",
                List.of("旧RPGシステムの業務ロジック解析およびJavaでの再構築。", "大量の会計データ処理を担うJava Batch機能の実装。"),
                List.of("Java 8", "Java Batch", "MyBatis", "PostgreSQL")
            )
        );

        return new PortfolioResponse(profile, technicalSkills, skillMatrix, projects);
    }
}