const certificateData = [
    {
        "name": "Getting Started with Front-End and Web Development",
        "link":"https://coursera.org/share/7831a6f569d246d15db51baefef79cbb"
    },
    {
        "name": "Advanced Business Strategy",
        "link":"https://coursera.org/share/06be1ecf6c86a47c4633e35463d7ef70"
    },
    {
        "name": "Business Growth Strategy",
        "link":"https://coursera.org/share/948191d6ece12bb1734f8eddb77cbf76"
    },
    {
        "name": "Business Strategy in Practice (Project-centered Course)",
        "link":"https://coursera.org/share/b48769ce07dc5dfd289ba574004f7710"
    },
    {
        "name": "Data Science Methodology",
        "link":"https://www.coursera.org/account/accomplishments/verify/5V9XK6WLMSHZ"
    },
    {
        "name": "Databases and SQL for Data Science with Python",
        "link":"https://coursera.org/share/dddf97d70d80b23cb35443ab19c8e8bb"
    },
    {
        "name": "Innovation Through Design: Think, Make, Break, Repeat",
        "link": "https://coursera.org/share/db280dcaa554a83a92d26c5a31aacf22"
    },
    {
        "name": "Foundations of Business Strategy",
        "link":"https://coursera.org/share/b321ca02635b115597c95e3d3ea8db5a"
    },
    {
        "name": "Introduction to Data Science Specialization",
        "link":"https://coursera.org/share/5c4080d87f7dc7d71ed3079fe70341f6"
    },
    {
        "name": "Introduction to Psychology",
        "link":"https://www.coursera.org/account/accomplishments/verify/KJVXZ2FCMB8U"
    },
    {
        "name": "Introduction to Software Engineering",
        "link":"https://coursera.org/share/331a0aa80d27aa937c2854aa7b951cb1"
    },
    {
        "name": "Micro-Certification - Welcome to ServiceNow",
        "link":"https://drive.google.com/file/d/116_Wg8jC4Q0QotLRNwEUp00dg-Qk-44D/view?usp=sharing"
    },
    {
        "name": "Strategic Planning and Execution",
        "link":"https://coursera.org/share/a6f1e764f7ec12cc572b8c0395e18e46"
    },
    {
        "name": "Tools for Data Science",
        "link":"https://coursera.org/share/1ae288476160fee1fb707d977ea88922"
    },
    {
        "name": "What is Data Science",
        "link":"https://coursera.org/share/1f9a2fae69e1269b9d8ba4c514ed6a04"
    },
    {
        "name": "Business Etiquette",
        "link":"https://drive.google.com/file/d/1czw-XNgUYQqO3wE1bBlifcSevEy8GpDR/view?usp=sharing"
    },
    {
        "name": "Email Etiquette",
        "link":"https://drive.google.com/file/d/1ZXjYnLxt-C7hZjj5D9yK2ul-lzr3h93f/view?usp=sharing"
    },
    {
        "name": "Introduction to Soft Skills",
        "link":"https://drive.google.com/file/d/1ya_4HkH0qXoS0RLuK4iOST24WK0SjPtR/view?usp=sharing"
    },
    {
        "name": "Resume Writing and Cover Letter",
        "link":"https://drive.google.com/file/d/1yPPsXte5j2JvNINu3RB3LgwDynLSLFvE/view?usp=sharing"
    },
    {
        "name": "Accounting Fundamentals",
        "link":"https://drive.google.com/file/d/1STAWuzOdbs1Krf24W7-YUUDETz6syLjI/view?usp=sharing"
    },
    {
        "name": "Application Development Foundations",
        "link":"https://drive.google.com/file/d/1M58XsTMY1feBqTkbNpy-9dHtMttKxOx8/view?usp=sharing"
    },
    {
        "name": "Applied Database Systems",
        "link":"https://drive.google.com/file/d/1onqGT-uQaSAJoS_JiF513dNuUG3-3rmn/view?usp=sharing"
    },
    {
        "name": "Database Design",
        "link":"https://drive.google.com/file/d/1Mgs_h4ZjbtQbZ3mvpePIZyc4qWEy8bQT/view?usp=sharing"
    },
    {
        "name": "Database Foundations",
        "link":"https://drive.google.com/file/d/17L1co1ncTK08u-3BtuVcEbZHGFmQdOzZ/view?usp=sharing"
    },
    {
        "name": "Database Programming with PLSQL",
        "link":"https://drive.google.com/file/d/1agStSDE2XLq1ty2EeD02YM2SSbTR8eJD/view?usp=sharing"
    },
    {
        "name": "Database Programming with SQL",
        "link":"https://drive.google.com/file/d/1bHgC142mfM1BjrboJHbp_i80R7ySHnL8/view?usp=sharing"
    },
    {
        "name": "Google Play Academy - Store Listing Certificate",
        "link":"https://www.credential.net/2edd01af-da70-456f-90b8-128857c270cb"
    },
    {
        "name": "Color Trends",
        "link":"https://www.linkedin.com/learning/certificates/081793c9bd212ea0dbdca06fc9d53bd069d3944077d7415e0430d0cefcfec64a"
    },
    {
        "name": "Color for Design and Art",
        "link":"https://www.linkedin.com/learning/certificates/23bdd0f79c7688a3cd23de55180d9f5de656d428fa1a6ddbc859bc4bbb4db764"
    },
    {
        "name": "Graphic Design Careers: First Steps",
        "link":"https://www.linkedin.com/learning/certificates/399f67c8d1cd313317e98eec74600d59b04c549f045b256b7d3e0797c958bc6d"
    },
    {
        "name": "Graphic Design Foundations: Layout and Composition",
        "link":"https://www.linkedin.com/learning/certificates/54b0c826b5e0cbb93dc7922358cf1b96bc0410f91de9331967a9e07e40dfd24d"
    },
    {
        "name": "Graphic Design Foundations: Typography",
        "link":"https://www.linkedin.com/learning/certificates/f14717b8c703499d3c88a7abcaa86a37f53fe6b96e62de1bafd5c3440dc7eb9c"
    },
    {
        "name": "Introduction to Graphic Design: Concepts",
        "link":"https://www.linkedin.com/learning/certificates/e5c81cad326867fa2577fc12b7ce39a3517cd4df597c87302b8ca2a7491f2747"
    },
    {
        "name": "What is Graphic Design?",
        "link":"https://www.linkedin.com/learning/certificates/c9f5bf4123d84a436717a34fbdf319d441bc1ad692be2baae9ca4f7476714cd3"
    },
    {
        "name": "Business Writing Principles",
        "link":"https://www.linkedin.com/learning/business-writing-principles"
    },
    {
        "name": "Consulting Foundations",
        "link":"https://www.linkedin.com/learning/certificates/2541c4baba96933753deb48d60b49eee7aa04576fa374ebe012c1bb456a84335"
    },
    {
        "name": "Copyright for Creatives: Protecting Your Work",
        "link":"https://www.linkedin.com/learning/copyright-for-creatives-protecting-your-work"
    },
    {
        "name": "Creating a Business Plan",
        "link":"https://www.linkedin.com/learning/certificates/212ec0e0b1e0939dd87eb1c985fc9e308ea67447e4b7dc35eb33152908ca4a4d"
    },
    {
        "name": "Creative Collaboration",
        "link":"https://www.linkedin.com/learning/creative-collaboration"
    },
    {
        "name": "Critical Roles Consultants Play",
        "link":"https://www.linkedin.com/learning/certificates/f9ca0809ec0f62569725d1f2efc1f33fd4ea2b794c8c56b5fa199b99ed33356e"
    },
    {
        "name": "Getting Your Ideas Approved",
        "link":"https://www.linkedin.com/learning/certificates/3eab2371b1cddc08371c993ac227a5157b58f7930c06b0eb64a8c5e1e32cd9e4"
    },
    {
        "name": "Information Literacy",
        "link":"https://www.linkedin.com/learning/information-literacy"
    },
    {
        "name": "Leading with Innovation",
        "link":"https://www.linkedin.com/learning/leading-with-innovation"
    },
    {
        "name": "Preparing for Successful Communication",
        "link":"https://www.linkedin.com/learning/preparing-for-successful-communication"
    },
    {
        "name": "SPSS for Academic Research",
        "link":"https://www.linkedin.com/learning/spss-for-academic-research"
    },
    {
        "name": "Technical Writing: Quick Start Guides",
        "link":"https://www.linkedin.com/learning/technical-writing-quick-start-guides"
    },
    {
        "name": "Thinking Creatively",
        "link":"https://www.linkedin.com/learning/thinking-creatively"
    },
    {
        "name": "Understanding Intellectual Property",
        "link":"https://www.linkedin.com/learning/understanding-intellectual-property"
    },
    {
        "name": "Understanding Patents: A Deeper Dive",
        "link":"https://www.linkedin.com/learning/understanding-patents-a-deeper-dive"
    },
    {
        "name": "Word 2016: Creating Long Documents",
        "link":"https://www.linkedin.com/learning/word-2016-creating-long-documents"
    },
    {
        "name": "Writing Articles",
        "link":"https://www.linkedin.com/learning/writing-articles-2"
    },
    {
        "name": "Academic Research Foundations: Quantitative",
        "link":"https://www.linkedin.com/learning/academic-research-foundations-quantitative"
    },
    {
        "name": "Writing White Papers",
        "link":"https://www.linkedin.com/learning/writing-white-papers"
    },
    {
        "name": "Group Discussion",
        "link":"https://drive.google.com/file/d/162cQfuAQIwSOZpjeTeky0DSP_5XvsGxg/view?usp=sharing"
    },
    {
        "name": "Interview Skills",
        "link":"https://drive.google.com/file/d/1hs19JQ2dZ6FKCOrhWZVCydJOUPnvq6-J/view?usp=sharing"
    },
    {
        "name": "Presentation Skills",
        "link":"https://drive.google.com/file/d/1sBPXhlN1VMcWfIDqIXJD_hoK9whwGLSM/view?usp=sharing"
    },
]

export default certificateData;