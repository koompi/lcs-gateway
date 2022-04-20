function read_main_cards() {
    const main_cards = [
        {
            "card_title": "CK-12 Textbooks",
            "card_subtitle": "Books",
            "card_link": "javascript: display_subcard('ck12', 'ck12-offcanvas')",
            "card_thumbnail": "images/main/ck12logo.jpg",
            "card_categories": [
                "Home",
                "STEM",
                "Education",
                "Science",
                "Mathematic"
            ]
        },
        {
            "card_title": "Great Book of the World",
            "card_subtitle": "Ebook",
            "card_link": "http://rachel.koompi.com/modules/ebooks/index.html",
            "card_thumbnail": "images/main/coolbooksmall.jpg",
            "card_categories": [
                "Home",
                "Education",
                "General Education"
            ]
        },
        {
            "card_title": "Hesperian Health",
            "card_subtitle": "Guidebook",
            "card_link": "javascript: display_subcard('hesperian', 'hesperian-offcanvas')",
            "card_thumbnail": "images/main/hesperianlogo.png",
            "card_categories": [
                "Home",
                "Health",
                "Education"
            ]
        },
        {
            "card_title": "Infonet Biodivision",
            "card_subtitle": "Agriculture and Environment",
            "card_link": "http://rachel.koompi.com/modules/infonet/starthere.html",
            "card_thumbnail": "images/main/infonet.png",
            "card_categories": [
                "Home",
                "Health",
                "Education"
            ]
        },
        {
            "card_title": "Khan Academy",
            "card_subtitle": "Education",
            "card_link": "http://rachel.koompi.com/modules/khan_academy/index.html",
            "card_thumbnail": "images/main/kalogo.png",
            "card_categories": [
                "Home",
                "STEM",
                "Education",
                "Science",
                "Mathematic"
            ]
        },
        {
            "card_title": "Khan Academy",
            "card_subtitle": "Health and Medicine",
            "card_link": "http://rachel.koompi.com/modules/khan_academy/science/healthcare-and-medicine/index.html",
            "card_thumbnail": "images/main/khanhealthlogo.png",
            "card_categories": [
                "Home",
                "Health",
                "Medicine"
            ]
        },
        {
            "card_title": "Math Expression",
            "card_subtitle": "Math Lesson",
            "card_link": "http://rachel.koompi.com/modules/math_expression/index.html",
            "card_thumbnail": "images/main/mathexpressionlogo.jpg",
            "card_categories": [
                "Home",
                "STEM",
                "Education",
                "Science",
                "Mathematic"
            ]
        },
        {
            "card_title": "MedlinePlus",
            "card_subtitle": "Medical Encyclopedia",
            "card_link": "http://rachel.koompi.com/modules/medline_plus/index.html",
            "card_thumbnail": "images/main/medlinepluslogo.png",
            "card_categories": [
                "Home",
                "Health",
                "Education",
                "Medicine"
            ]
        },
        {
            "card_title": "Music Theory",
            "card_subtitle": "Music",
            "card_link": "http://rachel.koompi.com/modules/musictheory/index.html",
            "card_thumbnail": "images/main/musictheorylogo.jpg",
            "card_categories": [
                "Home",
                "Art",
                "Music"
            ]
        },
        {
            "card_title": "PHET",
            "card_subtitle": "Simulation",
            "card_link": "http://phet.koompi.com",
            "card_thumbnail": "images/main/phet.png",
            "card_categories": [
                "Home",
                "STEM",
                "Sciece",
                "Education",
                "Chemistry",
                "Physics",
                "Simulation"
            ]
        },
        {
            "card_title": "Power Typing",
            "card_subtitle": "Typing",
            "card_link": "http://rachel.koompi.com/modules/powertyping/index.html",
            "card_thumbnail": "images/main/powertypinglogo.jpg",
            "card_categories": [
                "Home",
                "STEM",
                "Education",
                "Information and Communication Technology"
            ]
        },
        {
            "card_title": "Practical Action",
            "card_subtitle": "Law",
            "card_link": "http://rachel.koompi.com/modules/practical_action/index.html",
            "card_thumbnail": "images/main/practical_action.png",
            "card_categories": [
                "Home",
                "Law",
                "Education"
            ]
        },
        {
            "card_title": "Sala KOOMPI",
            "card_subtitle": "KOOMPI",
            "card_link": "https://sala.koompi.com",
            "card_thumbnail": "images/main/sala-logo.png",
            "card_categories": [
                "Home",
                "Education",
                "General Education",
                "STEM",
                "Education",
                "Information and Communication Technology"
            ]
        },
        {
            "card_title": "Scratch",
            "card_subtitle": "MIT",
            "card_link": "index.html",
            "card_thumbnail": "images/main/scratchlogo.jpg",
            "card_categories": [
                "Home",
                "STEM",
                "Education",
                "Information and Communication Technology"
            ]
        },
        {
            "card_title": "Understand Algebra",
            "card_subtitle": "Math",
            "card_link": "http://rachel.koompi.com/modules/understanding_algebra/default.htm",
            "card_thumbnail": "images/main/understandingalgebralogo.png",
            "card_categories": [
                "Home",
                "STEM",
                "Education",
                "Information and Communication Technology",
                "Mathematic"
            ]
        },
        {
            "card_title": "W3school",
            "card_subtitle": "Programming",
            "card_link": "http://w3.koompi.com",
            "card_thumbnail": "images/main/w3.jpg",
            "card_categories": [
                "Home",
                "STEM",
                "Education",
                "Information and Communication Technology"
            ]
        },
        {
            "card_title": "Wikipedia",
            "card_subtitle": "Book",
            "card_link": "http://wikibook.koompi.com",
            "card_thumbnail": "images/main/wikipedia120.png",
            "card_categories": [
                "Home",
                "Education",
                "General Education"
            ]
        },
        {
            "card_title": "Wikipedia English",
            "card_subtitle": "English",
            "card_link": "http://rachel.koompi.com/modules/wikipedia_for_schools/index.htm",
            "card_thumbnail": "images/main/wikipedia120.png",
            "card_categories": [
                "Home",
                "Education",
                "General Education"
            ]
        },
        {
            "card_title": "Wikipedia Khmer",
            "card_subtitle": "ខ្មែរ",
            "card_link": "http://wikipedia.koompi.com",
            "card_thumbnail": "images/main/wikipedia120.png",
            "card_categories": [
                "Home",
                "STEM",
                "Education",
                "Information and Communication Technology"
            ]
        },
        {
            "card_title": "Wiktionary English-Khmer",
            "card_subtitle": "វិចនានុក្រម",
            "card_link": "http://wiktionary.koompi.com",
            "card_thumbnail": "images/main/wiktionary.png",
            "card_categories": [
                "Home",
                "Education",
                "Dictionary"
            ]
        }
    ];

    return main_cards
}

function read_ck12_json(){
    const ck12_json = [
        {
            "card_title": "21st Century Physics",
            "card_subtitle": "Modern Physics",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_physics_21st_century.pdf",
            "card_thumbnail": "images/ck12/physics_21st.png"
        },
        {
            "card_title": "Advanced Probability and Statistics",
            "card_subtitle": "Teacher Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_adv_prob_stats_teacher_edition.pdf",
            "card_thumbnail": "images/ck12/adv_prob_stat_teacher.png"
        },
        {
            "card_title": "Algebra 1",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_algebra1.pdf",
            "card_thumbnail": "images/ck12/algebra2.png"
        },
        {
            "card_title": "Algebra 1",
            "card_subtitle": "Teacher Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/algebra1_teacher_edition.pdf",
            "card_thumbnail": "images/ck12/algebra1_teacher.png"
        },
        {
            "card_title": "Algebra 2",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_algebra2.pdf",
            "card_thumbnail": "images/ck12/algebra2.png"
        },
        {
            "card_title": "Algebra Explorations",
            "card_subtitle": "Pre-K through Grade 7",
            "card_link": "http://rachel.koompi.com/modules/ck12/algebra_explorations.pdf",
            "card_thumbnail": "images/ck12/Algebra_exploration.png"
        },
        {
            "card_title": "Basic Algebra",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_algebra1.pdf",
            "card_thumbnail": "images/ck12/algebra1.png"
        },
        {
            "card_title": "Basic Algebra Concept",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_basic_algebra_concepts.pdf",
            "card_thumbnail": "images/ck12/algebra1_teacher.png"
        },
        {
            "card_title": "Basic Algebra Concept",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_basic_geometry_concepts.pdf",
            "card_thumbnail": "images/ck12/basic_geometry_concept.png"
        },
        {
            "card_title": "Basic Geometry",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_basic_geometry.pdf",
            "card_thumbnail": "images/ck12/basic_geometry.png"
        },
        {
            "card_title": "Basic Geometry",
            "card_subtitle": "Teacher Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_basic_geometry_teacher_edition.pdf",
            "card_thumbnail": "images/ck12/basic_geometry_teacher.png"
        },
        {
            "card_title": "Basic Physics",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_basic_physics.pdf",
            "card_thumbnail": "images/ck12/basic_physics.png"
        },
        {
            "card_title": "Basic Probability and Statistics",
            "card_subtitle": "Short Course",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_basic_prob_stats_short.pdf",
            "card_thumbnail": "images/ck12/basic_probab.png"
        },
        {
            "card_title": "Basic Probability and Statistics",
            "card_subtitle": "Full Course",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_basic_prob_stats_full.pdf",
            "card_thumbnail": "images/ck12/basic_probab_full.png"
        },
        {
            "card_title": "Biology",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_biology.pdf",
            "card_thumbnail": "images/ck12/bio.png"
        },
        {
            "card_title": "Biology",
            "card_subtitle": "Workbook",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_biology_workbook.pdf",
            "card_thumbnail": "images/ck12/bio_workbook.png"
        },
        {
            "card_title": "Biology",
            "card_subtitle": "Teacher Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_biology_teacher_edition.pdf",
            "card_thumbnail": "images/ck12/bio_teacher.png"
        },
        {
            "card_title": "CK-12 Advance Probability and Statistics Concept",
            "card_subtitle": "Short Course",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_adv_prob_stats_concept.pdf",
            "card_thumbnail": "images/ck12/advanced_probab.png"
        },
        {
            "card_title": "CK-12 Basic Probability and Statistics Concept",
            "card_subtitle": "Full Course",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_basic_prob_stats_concept.pdf",
            "card_thumbnail": "images/ck12/basic_probab_concept_full.png"
        },
        {
            "card_title": "CK-12 People's Physics Concepts",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_people_physics_concepts.pdf",
            "card_thumbnail": "images/ck12/people_physics_concept.png"
        },
        {
            "card_title": "CK-12 Trigonometry Concept",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_trigonometry_concepts.pdf",
            "card_thumbnail": "images/ck12/trigonometry_concept.png"
        },
        {
            "card_title": "Calculus",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_calculus.pdf",
            "card_thumbnail": "images/ck12/calc.png"
        },
        {
            "card_title": "Calculus",
            "card_subtitle": "Teacher Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_calculus_teacher_edition.pdf",
            "card_thumbnail": "images/ck12/calc_teacher.png"
        },
        {
            "card_title": "Chemistry",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_chemistry.pdf",
            "card_thumbnail": "images/ck12/chemistry.png"
        },
        {
            "card_title": "Chemistry",
            "card_subtitle": "Teacher Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_chemistry_teacher_edition.pdf",
            "card_thumbnail": "images/ck12/chemistry_teacher.png"
        },
        {
            "card_title": "Chemistry",
            "card_subtitle": "Lab and Demo",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_chemistry_labs_demos.pdf",
            "card_thumbnail": "images/ck12/chemistry_lab_demo.png"
        },
        {
            "card_title": "Earth Science",
            "card_subtitle": "For Middle Schools",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_earth_science_ms.pdf",
            "card_thumbnail": "images/ck12/es_midschool.png"
        },
        {
            "card_title": "Earth Science",
            "card_subtitle": "For High Schools",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_earth_science_hs.pdf",
            "card_thumbnail": "images/ck12/es_hischool.png"
        },
        {
            "card_title": "Earth Science Concepts",
            "card_subtitle": "Earth Science",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_earth_science_concepts.pdf",
            "card_thumbnail": "images/ck12/es_concept.png"
        },
        {
            "card_title": "Engineering",
            "card_subtitle": "An Introduction for High School",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_engineering_hs.pdf",
            "card_thumbnail": "images/ck12/engineering.png"
        },
        {
            "card_title": "Geometry",
            "card_subtitle": "Teacher Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_geometry_teacher_edition.pdf",
            "card_thumbnail": "images/ck12/geometry_teacher.png"
        },
        {
            "card_title": "Life Science for Middle School",
            "card_subtitle": "Science",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_life_science_ms.pdf",
            "card_thumbnail": "images/ck12/life_science.png"
        },
        {
            "card_title": "Physics",
            "card_subtitle": "From Stargazers to Starships",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_physics_star.pdf",
            "card_thumbnail": "images/ck12/physics_star.png"
        },
        {
            "card_title": "Probability and Statistics",
            "card_subtitle": "Advanced Placement",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_prob_stats_adv_placement.pdf",
            "card_thumbnail": "images/ck12/adv_probab_stat.png"
        },
        {
            "card_title": "Trigonometry",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_trigonometry.pdf",
            "card_thumbnail": "images/ck12/trigonometry.png"
        },
        {
            "card_title": "Trigonometry",
            "card_subtitle": "Teacher Edition",
            "card_link": "http://rachel.koompi.com/modules/ck12/ck12_trigonometry_teacher_edition.pdf",
            "card_thumbnail": "images/ck12/trigonometry_teacher.png"
        }
    ];

    return ck12_json;
}

function read_hesperian_json(){
    const hesperian_json = [
        {
            "card_title": "A Book for Midwives",
            "card_subtitle": "Care for pregnancy and birth",
            "card_link": "http://rachel.koompi.com/modules/hesperian_health/en_midw_2011_Full_Book/page1.html",
            "card_thumbnail": "images/hesperian/a_book_for_midwife.png"
        },
        {
            "card_title": "Cholera Prevention",
            "card_subtitle": "Fact Sheet",
            "card_link": "http://rachel.koompi.com/modules/hesperian_health/Cholera_EN/page1.html",
            "card_thumbnail": "images/hesperian/how_to_prevent_chloera.png"
        },
        {
            "card_title": "Disabled Village Children",
            "card_subtitle": "Care for Disabled Child",
            "card_link": "http://rachel.koompi.com/modules/hesperian_health/DVC_2009/page1.html",
            "card_thumbnail": "images/hesperian/disabled_village_children.png"
        },
        {
            "card_title": "Environmental Health",
            "card_subtitle": "Community Guide",
            "card_link": "http://rachel.koompi.com/modules/hesperian_health/en_cgeh_2012_full/page1.html",
            "card_thumbnail": "images/hesperian/a_community_guide_to_environmental_health.png"
        },
        {
            "card_title": "Helping Children Who Are Blind",
            "card_subtitle": "Care for Blind Children",
            "card_link": "http://rachel.koompi.com/modules/hesperian_health/en_hcwb_2000_whole_book/page1.html",
            "card_thumbnail": "images/hesperian/helping_children_who_are_blind.png"
        },
        {
            "card_title": "Helping Children Who Are Deaf",
            "card_subtitle": "Care for Deaf Children",
            "card_link": "http://rachel.koompi.com/modules/hesperian_health/en_hcwd_2004_Full_Book/page1.html",
            "card_thumbnail": "images/hesperian/helping_children who_are_deaf.png"
        },
        {
            "card_title": "Helping Health Workers Learn",
            "card_subtitle": "Learning Material",
            "card_link": "http://rachel.koompi.com/modules/hesperian_health/en_hhwl_2012_full/page1.html",
            "card_thumbnail": "images/hesperian/helping_health_worker_learn.png"
        },
        {
            "card_title": "Sanitation and Cleanliness",
            "card_subtitle": "For a Healthy Environment",
            "card_link": "http://rachel.koompi.com/modules/hesperian_health/EHB_Sanitation_EN_watermark/page1.html",
            "card_thumbnail": "images/hesperian/sanitation_and_cleanliness.png"
        },
        {
            "card_title": "Water for Life",
            "card_subtitle": "Community water security",
            "card_link": "http://rachel.koompi.com/modules/hesperian_health/ehb_water_EN_watermark/page1.html",
            "card_thumbnail": "images/hesperian/water_for_life.png"
        },
        {
            "card_title": "Where There Is No Dentist",
            "card_subtitle": "For Teeth Health",
            "card_link": "http://rachel.koompi.com/modules/hesperian_health/en_dent_2012_full/page1.html",
            "card_thumbnail": "images/hesperian/where_there_is_no_dentist.png"
        },
        {
            "card_title": "Where There Is No Doctor",
            "card_subtitle": "A village health care handbook",
            "card_link": "http://rachel.koompi.com/modules/hesperian_health/en_wtnd_2011_full/page1.html",
            "card_thumbnail": "images/hesperian/where_there_is_no_doctor_a_village_health_care_handbook.png"
        },
        {
            "card_title": "Where Women Have No Doctor",
            "card_subtitle": "For Woman Health",
            "card_link": "http://rachel.koompi.com/modules/hesperian_health/en_wwhnd_2012_full/page1.html",
            "card_thumbnail": "images/hesperian/where_woman_have_no_doctor.png"
        },
        {
            "card_title": "Women with Disabilities",
            "card_subtitle": "A Health Handbook",
            "card_link": "http://rachel.koompi.com/modules/hesperian_health/en_WWD_2008_full_book/page1.html",
            "card_thumbnail": "images/hesperian/a_health_handbook_for_woman_with_disability.png"
        }
    ];
    return hesperian_json;
}

function read_sidebar() {
    const sidebar = {
        "main_list": [
            {
                "disp_name": "Home",
                "svg": true,
                "img_src": "#home"
            },
            {
                "disp_name": "STEM",
                "svg": false,
                "img_src": "images/stem-logo.png"
            },
            {
                "disp_name": "Health",
                "svg": true,
                "img_src": "#health"
            },
            {
                "disp_name": "Law",
                "svg": true,
                "img_src": "#law"
            },
            {
                "disp_name": "Art",
                "svg": true,
                "img_src": "#art"
            },
            {
                "disp_name": "General Education",
                "svg": true,
                "img_src": "#gen_edu"
            },
            {
                "disp_name": "Information and Communication Technology",
                "svg": true,
                "img_src": "#ict"
            }
        ],
        "secondary_list": [
            {
                "disp_name": "Science",
                "svg": true,
                "img_src": "#speedometer2"
            },
            {
                "disp_name": "Technology",
                "svg": true,
                "img_src": "#speedometer2"
            },
            {
                "disp_name": "Engineering",
                "svg": true,
                "img_src": "#speedometer2"
            },
            {
                "disp_name": "Mathematic",
                "svg": true,
                "img_src": "#speedometer2"
            }
        ]
    };

    return sidebar
}