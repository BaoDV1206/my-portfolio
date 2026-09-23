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

    // ==========================================
    // 1. DỮ LIỆU TIẾNG VIỆT (VN)
    // ==========================================
    private PortfolioResponse getVietnameseData() {
        ProfileDto profile = new ProfileDto(
            "Đinh Văn Bảo",
            "Java Developer / Software Engineer",
            "3+ năm kinh nghiệm",
            "Kỹ sư phần mềm tư duy sáng tạo với hơn 3 năm kinh nghiệm làm việc hiệu quả trong môi trường năng động. Thành thạo Java, Spring, ReactJS và nền tảng Low-code Intra-mart Accel Platform. Có tinh thần hợp tác cao, thích ứng nhanh và làm việc ăn ý trong mô hình Scrum.",
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
            "TOEIC: 600",
            "Tiếng Nhật: N4",
            "Việt Nam"
        );

        List<SkillCategoryDto> technicalSkills = List.of(
            new SkillCategoryDto("Backend & Core", List.of("Java (Java 8, 11, 21)", "Spring / Spring Boot", "Java Batch", "MyBatis", ".NET Core / .NET 6", "Intra-mart Platform")),
            new SkillCategoryDto("Frontend & Libraries", List.of("ReactJS", "Vue.js", "AngularJS", "jQuery", "JavaScript", "Bootstrap")),
            new SkillCategoryDto("Cơ sở dữ liệu (DBMS)", List.of("PostgreSQL", "MySQL", "MSSQL Server", "Oracle", "DB2", "CACHE/IRIS")),
            new SkillCategoryDto("IDE & Quản lý mã nguồn", List.of("Git", "SVN", "IntelliJ IDEA", "Eclipse", "VS Code", "eBuilder9", "Visual Studio")),
            new SkillCategoryDto("Kỹ năng mềm & Ngoại ngữ", List.of("Tiếng Nhật (N4)", "Tiếng Anh (TOEIC 600)", "Mô hình Scrum", "Phân tích & Giải quyết vấn đề", "Quản lý thời gian", "Làm việc nhóm"))
        );

        List<SkillMatrixDto> skillMatrix = List.of(
            new SkillMatrixDto("Java", "3 năm", "2026", "Ứng dụng thực tế (Cấp 3)"),
            new SkillMatrixDto("Postgres", "2 năm", "2026", "Ứng dụng thực tế (Cấp 2)"),
            new SkillMatrixDto("SVN", "3 năm", "2026", "Ứng dụng thực tế (Cấp 3)"),
            new SkillMatrixDto("GIT", "3 năm", "2025", "Ứng dụng thực tế (Cấp 2)"),
            new SkillMatrixDto(".NET", "1 năm", "2026", "Ứng dụng thực tế (Cấp 2)"),
            new SkillMatrixDto("Intra-Mart Framework", "1 năm", "2026", "Ứng dụng thực tế (Cấp 1)"),
            new SkillMatrixDto("ReactJS / Vue.js", "6 tháng", "2024", "Ứng dụng thực tế (Cấp 1)"),
            new SkillMatrixDto("AngularJS", "3 tháng", "2023", "Ứng dụng thực tế (Cấp 1)"),
            new SkillMatrixDto("MySQL, DB2, Oracle, CACHE/IRIS, MSSQL", "1 năm", "2026", "Ứng dụng thực tế (Cấp 1)")
        );

        List<ProjectDto> projects = List.of(
            new ProjectDto(
                "Application Management System for Intra-mart",
                "Developer – Team Leader",
                "10/2025 – Hiện tại",
                "Phát triển ứng dụng quản lý đơn từ và cấp phép trên nền tảng workflow intra-mart.",
                List.of(
                    "Khắc phục và xử lý lỗi hệ thống (Bug fixing).",
                    "Thiết kế test cases / tạo tài liệu và bằng chứng kiểm thử UTC và UTE.",
                    "Đánh giá kỹ thuật và tham gia báo giá giải pháp cho khách hàng."
                ),
                List.of("Java 11", "Spring", "IM-Workflow", "intra-mart Accel Kaiden!", "PostgreSQL")
            ),
            new ProjectDto(
                "MEI Clista! (Hệ thống thống kê y tế)",
                "Developer – Team Member",
                "10/2024 – 10/2025",
                "Phát triển ứng dụng phục vụ hệ thống báo cáo và thống kê y tế.",
                List.of(
                    "Xử lý và sửa lỗi hệ thống phát sinh.",
                    "Phát triển các chức năng thống kê, xuất kết quả phân tích và tự động thu thập dữ liệu (crawler).",
                    "Tối ưu hóa câu truy vấn, đánh chỉ mục (index) và xử lý hủy tìm kiếm đồng bộ trên nhiều cơ sở dữ liệu."
                ),
                List.of(".NET Core", ".NET Framework", ".NET Browser", "JavaScript", "PostgreSQL", "MySQL", "DB2", "Oracle", "CACHE/IRIS")
            ),
            new ProjectDto(
                "RPG Convert to Java (Chuyển đổi hệ thống kế toán)",
                "Developer – Team Member",
                "09/2023 – 10/2024",
                "Chuyển đổi toàn bộ hệ thống kế toán từ nền tảng ngôn ngữ di sản RPG sang kiến trúc Java hiện đại.",
                List.of(
                    "Chuyển giao và tái cấu trúc các chức năng từ hệ thống RPG cũ sang hệ thống Java mới.",
                    "Triển khai các tác vụ Java Batch xử lý dữ liệu kế toán lớn."
                ),
                List.of("Java 8", "Java Batch", "MyBatis", "PostgreSQL")
            ),
            new ProjectDto(
                "NTA (Hệ thống quản lý du lịch)",
                "Developer – Team Member",
                "03/2023 – 09/2023",
                "Phát triển ứng dụng web phục vụ quản lý tour và dịch vụ du lịch.",
                List.of(
                    "Sửa lỗi hệ thống định kỳ.",
                    "Phát triển tính năng tìm kiếm đa tiêu chí nâng cao kết hợp ReactJS.",
                    "Viết kịch bản sao lưu và phục hồi dữ liệu hệ thống."
                ),
                List.of(".NET 6", "ReactJS", "MSSQL Server", "Azure")
            ),
            new ProjectDto(
                "Web-based News Aggregation (Tổng hợp tin tức tự động)",
                "Developer – Team Leader",
                "06/2023 – 09/2023",
                "Cung cấp ứng dụng tin tức phục vụ độc giả, tự động thu thập và tổng hợp bài viết theo thời gian thực từ nhiều nguồn.",
                List.of(
                    "Phát triển các tính năng nghiệp vụ mới.",
                    "Lập trình hệ thống tự động cào và xử lý luồng tin tức đa nguồn theo thời gian thực.",
                    "Thực hiện cross review mã nguồn toàn đội ngũ."
                ),
                List.of("Spring Boot", "ReactJS", "MySQL")
            ),
            new ProjectDto(
                "Yayaki Subsystems",
                "Developer – Team Member",
                "01/2023 – 03/2023",
                "Xây dựng module trực quan hóa cho phép vẽ danh sách mạch điện thông qua thao tác kéo-thả.",
                List.of(
                    "Khắc phục các lỗi giao diện và backend.",
                    "Phát triển tính năng tương tác kéo-thả (drag-and-drop) danh sách sơ đồ mạch điện."
                ),
                List.of("Spring Boot", "AngularJS", "PostgreSQL")
            )
        );

        return new PortfolioResponse(profile, technicalSkills, skillMatrix, projects);
    }

    // ==========================================
    // 2. DỮ LIỆU TIẾNG ANH (US)
    // ==========================================
    private PortfolioResponse getEnglishData() {
        ProfileDto profile = new ProfileDto(
            "Dinh Van Bao",
            "Java Developer / Software Engineer",
            "3+ Years of Experience",
            "Creative Forward-thinking Software Engineer with 3 years of experience and background working productively in dynamic environments. Fluent in Java, Spring, ReactJS and Intra-mart Accel Platform. Cooperative and able to perform within a dynamic team-oriented atmosphere.",
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
            "TOEIC: 600",
            "Japanese: N4",
            "Vietnam"
        );

        List<SkillCategoryDto> technicalSkills = List.of(
            new SkillCategoryDto("Backend & Core", List.of("Java (Java 8, 11, 21)", "Spring / Spring Boot", "Java Batch", "MyBatis", ".NET Core / .NET 6", "Intra-mart Platform")),
            new SkillCategoryDto("Frontend & Libraries", List.of("ReactJS", "Vue.js", "AngularJS", "jQuery", "JavaScript", "Bootstrap")),
            new SkillCategoryDto("Databases (DBMS)", List.of("PostgreSQL", "MySQL", "MSSQL Server", "Oracle", "DB2", "CACHE/IRIS")),
            new SkillCategoryDto("Tools & Version Control", List.of("Git", "SVN", "IntelliJ IDEA", "Eclipse", "VS Code", "eBuilder9", "Visual Studio")),
            new SkillCategoryDto("Soft Skills & Languages", List.of("Japanese (N4)", "English (TOEIC 600)", "Scrum Framework", "Analytic Thinking", "Problem Solving", "Time Management", "Teamwork"))
        );

        List<SkillMatrixDto> skillMatrix = List.of(
            new SkillMatrixDto("Java", "3y", "2026", "Practical application (Level 3)"),
            new SkillMatrixDto("Postgres", "2y", "2026", "Practical application (Level 2)"),
            new SkillMatrixDto("SVN", "3y", "2026", "Practical application (Level 3)"),
            new SkillMatrixDto("GIT", "3y", "2025", "Practical application (Level 2)"),
            new SkillMatrixDto(".NET", "1y", "2026", "Practical application (Level 2)"),
            new SkillMatrixDto("Intra-Mart Framework", "1y", "2026", "Practical application (Level 1)"),
            new SkillMatrixDto("ReactJS / Vue.js", "6m", "2024", "Practical application (Level 1)"),
            new SkillMatrixDto("AngularJS", "3m", "2023", "Practical application (Level 1)"),
            new SkillMatrixDto("MySQL, DB2, Oracle, CACHE/IRIS, MSSQL", "1y", "2026", "Practical application (Level 1)")
        );

        List<ProjectDto> projects = List.of(
            new ProjectDto(
                "Application Management System for Intra-mart",
                "Developer – Team Leader",
                "Oct. 2025 – Present",
                "Developing an application for managing applications and permits on the IM-Workflow intra-mart platform.",
                List.of(
                    "Fixing system bugs.",
                    "Designing test cases / creating UTC and UTE.",
                    "Evaluating and participating in client quotations."
                ),
                List.of("Java 11", "Spring", "IM-Workflow", "intra-mart Accel Kaiden!", "PostgreSQL")
            ),
            new ProjectDto(
                "MEI Clista!",
                "Developer – Team Member",
                "Oct. 2024 – Oct. 2025",
                "Developing an application for a healthcare statistics system.",
                List.of(
                    "Fixing system bugs.",
                    "Developing statistical functions, exporting analysis results, and crawling data.",
                    "Optimize queries across multiple databases, index, and handle canceled searches across multiple databases."
                ),
                List.of(".NET Core", ".NET Framework", ".NET Browser", "JavaScript", "PostgreSQL", "MySQL", "DB2", "Oracle", "CACHE/IRIS")
            ),
            new ProjectDto(
                "RPG Convert to Java",
                "Developer – Team Member",
                "Sep. 2023 – Oct. 2024",
                "Convert the accounting system from RPG to Java.",
                List.of(
                    "Transfer the old RPG features to the new Java system.",
                    "Implement Java Batch routines for accounting processes."
                ),
                List.of("Java 8", "Java Batch", "MyBatis", "PostgreSQL")
            ),
            new ProjectDto(
                "NTA",
                "Developer – Team Member",
                "Mar. 2023 – Sep. 2023",
                "Developing a web application for a tourism management system.",
                List.of(
                    "Fixing system bugs.",
                    "Developing multi-criteria search functionality.",
                    "Writing data recovery procedures."
                ),
                List.of(".NET 6", "ReactJS", "MSSQL Server", "Azure")
            ),
            new ProjectDto(
                "Web-based News Aggregation",
                "Developer – Team Leader",
                "Jun. 2023 – Sep. 2023",
                "Provide a news web application for readers, collecting news from various sources, and aggregating it in real time.",
                List.of(
                    "Develop new features.",
                    "Program the system for automatically collecting news from multiple sources.",
                    "Cross review code."
                ),
                List.of("Spring Boot", "ReactJS", "MySQL")
            ),
            new ProjectDto(
                "Yayaki Subsystems",
                "Developer – Team Member",
                "Jan. 2023 – Mar. 2023",
                "Develop a drag-and-drop module for drawing circuit lists.",
                List.of(
                    "Fix system bugs.",
                    "Develop the functionality for dragging circuit lists."
                ),
                List.of("Spring Boot", "AngularJS", "PostgreSQL")
            )
        );

        return new PortfolioResponse(profile, technicalSkills, skillMatrix, projects);
    }

    // ==========================================
    // 3. DỮ LIỆU TIẾNG NHẬT (JP)
    // ==========================================
    private PortfolioResponse getJapaneseData() {
        ProfileDto profile = new ProfileDto(
            "ディン・ヴァン・バオ (Dinh Van Bao)",
            "Javaエンジニア / ソフトウェアエンジニア",
            "実務経験 3年以上",
            "Java、Spring、ReactJS、およびIntra-mart Accel Platformを活用した開発に強みを持つソフトウェアエンジニア。変化の速い環境に素早く適応し、スクラム開発体制のもとでチームの成果最大化に貢献します。",
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
            "TOEIC: 600点",
            "日本語能力試験: N4",
            "ベトナム"
        );

        List<SkillCategoryDto> technicalSkills = List.of(
            new SkillCategoryDto("バックエンド・コア技術", List.of("Java (Java 8, 11, 21)", "Spring / Spring Boot", "Java Batch", "MyBatis", ".NET Core / .NET 6", "Intra-mart Platform")),
            new SkillCategoryDto("フロントエンド", List.of("ReactJS", "Vue.js", "AngularJS", "jQuery", "JavaScript", "Bootstrap")),
            new SkillCategoryDto("データベース (DBMS)", List.of("PostgreSQL", "MySQL", "MSSQL Server", "Oracle", "DB2", "CACHE/IRIS")),
            new SkillCategoryDto("IDE・ソース管理", List.of("Git", "SVN", "IntelliJ IDEA", "Eclipse", "VS Code", "eBuilder9", "Visual Studio")),
            new SkillCategoryDto("ソフトスキル・語学", List.of("日本語 (N4)", "英語 (TOEIC 600)", "スクラム開発", "分析・問題解決能力", "時間管理", "チームワーク"))
        );

        List<SkillMatrixDto> skillMatrix = List.of(
            new SkillMatrixDto("Java", "3年", "2026", "実務適用レベル (Level 3)"),
            new SkillMatrixDto("Postgres", "2年", "2026", "実務適用レベル (Level 2)"),
            new SkillMatrixDto("SVN", "3年", "2026", "実務適用レベル (Level 3)"),
            new SkillMatrixDto("GIT", "3年", "2025", "実務適用レベル (Level 2)"),
            new SkillMatrixDto(".NET", "1年", "2026", "実務適用レベル (Level 2)"),
            new SkillMatrixDto("Intra-Mart Framework", "1年", "2026", "実務適用レベル (Level 1)"),
            new SkillMatrixDto("ReactJS / Vue.js", "6ヶ月", "2024", "実務適用レベル (Level 1)"),
            new SkillMatrixDto("AngularJS", "3ヶ月", "2023", "実務適用レベル (Level 1)"),
            new SkillMatrixDto("MySQL, DB2, Oracle, CACHE/IRIS, MSSQL", "1年", "2026", "実務適用レベル (Level 1)")
        );

        List<ProjectDto> projects = List.of(
            new ProjectDto(
                "Intra-mart 申請・承認ワークフロー管理システム",
                "開発担当 – チームリーダー",
                "2025年10月 – 現在",
                "Intra-mart（IM-Workflow、intra-mart Accel Kaiden!）プラットフォーム上での申請・承認ワークフローシステムの開発。",
                List.of(
                    "システムの不具合修正（バグフィックス）。",
                    "テストケース設計、単体テスト仕様書・エビデンス（UTC/UTE）作成。",
                    "要件・仕様レビューおよび工数見積もりへの参加。"
                ),
                List.of("Java 11", "Spring", "IM-Workflow", "intra-mart Accel Kaiden!", "PostgreSQL")
            ),
            new ProjectDto(
                "MEI Clista!（医療統計分析システム）",
                "開発担当 – チームメンバー",
                "2024年10月 – 2025年10月",
                "医療統計およびデータ分析アプリケーションの開発。",
                List.of(
                    "システムの不具合修正。",
                    "統計分析機能の開発、データ集計結果のエクスポート、データクローラー開発。",
                    "複数DBにまたがるクエリチューニング、インデックス最適化、非同期検索キャンセル処理の実装。"
                ),
                List.of(".NET Core", ".NET Framework", ".NET Browser", "JavaScript", "PostgreSQL", "MySQL", "DB2", "Oracle", "CACHE/IRIS")
            ),
            new ProjectDto(
                "RPGからJavaへのシステムマイグレーション",
                "開発担当 – チームメンバー",
                "2023年9月 – 2024年10月",
                "レガシー言語RPGで構築された会計システムをJavaへ全面リプレイス。",
                List.of(
                    "旧RPGシステムの業務ロジック解析およびJavaでの機能再構築。",
                    "大量会計データ処理に対応するJava Batch機能の実装。"
                ),
                List.of("Java 8", "Java Batch", "MyBatis", "PostgreSQL")
            ),
            new ProjectDto(
                "NTA（旅行・観光管理システム）",
                "開発担当 – チームメンバー",
                "2023年3月 – 2023年9月",
                "旅行・観光管理Webアプリケーションの開発。",
                List.of(
                    "システムの不具合修正。",
                    "ReactJSを用いた複合条件検索機能の開発。",
                    "システムデータリカバリ手順の作成・実施。"
                ),
                List.of(".NET 6", "ReactJS", "MSSQL Server", "Azure")
            ),
            new ProjectDto(
                "Webニュース自動収集・配信システム",
                "開発担当 – チームリーダー",
                "2023年6月 – 2023年9月",
                "複数メディアから最新ニュースをリアルタイムで収集・要約配信するWebアプリケーションの構築。",
                List.of(
                    "新機能の設計および開発。",
                    "複数ソースからのニュース自動収集（クローラー）機能の実装。",
                    "チーム内のコードレビューおよび品質管理。"
                ),
                List.of("Spring Boot", "ReactJS", "MySQL")
            ),
            new ProjectDto(
                "Yayaki Subsystems（回路図ドラッグ＆ドロップ描画モジュール）",
                "開発担当 – チームメンバー",
                "2023年1月 – 2023年3月",
                "画面上で回路リストをドラッグ＆ドロップして配置・描画するインタラクティブモジュールの開発。",
                List.of(
                    "システム不具合の調査および改修。",
                    "AngularJSを用いた回路リストのドラッグ＆ドロップ操作機能の実装。"
                ),
                List.of("Spring Boot", "AngularJS", "PostgreSQL")
            )
        );

        return new PortfolioResponse(profile, technicalSkills, skillMatrix, projects);
    }
}