function read_main_cards() {
    const main_cards = [
        {
            "card_title": "Admin Content Server",
            "card_subtitle": "KOOMPI",
            "card_link": "http://admin.koompi.app",
            "card_thumbnail": "images/main/test.png",
            "card_categories": [
                "Home"
            ]
        },
        {
            "card_title": "CK-12 Textbooks",
            "card_subtitle": "Books",
            "card_link": "javascript: display_subcard('ck12', 'ck12-offcanvas')",
            "card_thumbnail": "images/main/ck12logo.webp",
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
            "card_link": "http://rachel.koompi.app/modules/ebooks/index.html",
            "card_thumbnail": "images/main/coolbooksmall.webp",
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
            "card_thumbnail": "images/main/hesperianlogo.webp",
            "card_categories": [
                "Home",
                "Health",
                "Education"
            ]
        },
        {
            "card_title": "Infonet Biodivision",
            "card_subtitle": "Agriculture and Environment",
            "card_link": "http://rachel.koompi.app/modules/infonet/starthere.html",
            "card_thumbnail": "images/main/infonet.webp",
            "card_categories": [
                "Home",
                "Health",
                "Education"
            ]
        },
        {
            "card_title": "IICBA Electronic Library",
            "card_subtitle": "UNESCO",
            "card_link": "javascript: display_subcard('uiel', 'uiel-offcanvas')",
            "card_thumbnail": "images/main/UNESCO-IICBA.webp",
            "card_categories": [
                "Home",
                "STEM",
                "Education",
                "General Education",
                "Science",
                "Mathematic"
            ]
        },
        {
            "card_title": "Khan Academy",
            "card_subtitle": "Education",
            "card_link": "javascript: display_subcard('khan_ed', 'khan_ed-offcanvas')",
            "card_thumbnail": "images/main/kalogo.webp",
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
            "card_link": "http://rachel.koompi.app/modules/khan_academy/science/healthcare-and-medicine/index.html",
            "card_thumbnail": "images/main/khanhealthlogo.webp",
            "card_categories": [
                "Home",
                "Health",
                "Medicine"
            ]
        },
        {
            "card_title": "Math Expression",
            "card_subtitle": "Math Lesson",
            "card_link": "http://rachel.koompi.app/modules/math_expression/index.html",
            "card_thumbnail": "images/main/mathexpressionlogo.webp",
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
            "card_link": "http://rachel.koompi.app/modules/medline_plus/index.html",
            "card_thumbnail": "images/main/medlinepluslogo.webp",
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
            "card_link": "http://rachel.koompi.app/modules/musictheory/index.html",
            "card_thumbnail": "images/main/musictheorylogo.webp",
            "card_categories": [
                "Home",
                "Art",
                "Music"
            ]
        },
        {
            "card_title": "OLPC Educational Packages",
            "card_subtitle": "OLPC Project",
            "card_link": "javascript: display_subcard('olpc', 'olpc-offcanvas')",
            "card_thumbnail": "images/main/OLPC.webp",
            "card_categories": [
                "Home",
                "STEM",
                "Science",
                "Education",
                "General Education",
            ]
        },
        {
            "card_title": "PHET",
            "card_subtitle": "Simulation",
            "card_link": "http://phet.koompi.app/phet_km/A/index.html",
            "card_thumbnail": "images/main/phet.webp",
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
            "card_link": "http://rachel.koompi.app/modules/powertyping/index.html",
            "card_thumbnail": "images/main/powertypinglogo.webp",
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
            "card_link": "http://rachel.koompi.app/modules/practical_action/index.html",
            "card_thumbnail": "images/main/practical_action.webp",
            "card_categories": [
                "Home",
                "Law",
                "Education"
            ]
        },
        {
            "card_title": "Sala KOOMPI",
            "card_subtitle": "KOOMPI",
            "card_link": "https://sala.koompi.app",
            "card_thumbnail": "images/main/sala-logo.webp",
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
            "card_thumbnail": "images/main/scratchlogo.webp",
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
            "card_link": "http://rachel.koompi.app/modules/understanding_algebra/default.htm",
            "card_thumbnail": "images/main/understandingalgebralogo.webp",
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
            "card_link": "http://w3.koompi.app",
            "card_thumbnail": "images/main/w3.webp",
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
            "card_link": "http://wikibook.koompi.app/wikibooks_km_all_maxi/A/%E1%9E%91%E1%9F%86%E1%9E%96%E1%9F%90%E1%9E%9A%E1%9E%8A%E1%9E%BE%E1%9E%98",
            "card_thumbnail": "images/main/wikipedia120.webp",
            "card_categories": [
                "Home",
                "Education",
                "General Education"
            ]
        },
        {
            "card_title": "Wikipedia English",
            "card_subtitle": "English",
            "card_link": "http://rachel.koompi.app/modules/wikipedia_for_schools/index.htm",
            "card_thumbnail": "images/main/wikipedia120.webp",
            "card_categories": [
                "Home",
                "Education",
                "General Education"
            ]
        },
        {
            "card_title": "Wikipedia Khmer",
            "card_subtitle": "ខ្មែរ",
            "card_link": "http://wikipedia.koompi.app/wikipedia_km_all_maxi/A/%E1%9E%91%E1%9F%86%E1%9E%96%E1%9F%90%E1%9E%9A%E1%9E%8A%E1%9E%BE%E1%9E%98",
            "card_thumbnail": "images/main/wikipedia120.webp",
            "card_categories": [
                "Home",
                "Education",
                "General Education"
            ]
        },
        {
            "card_title": "Wiktionary English-Khmer",
            "card_subtitle": "វិចនានុក្រម",
            "card_link": "http://wiktionary.koompi.app/wiktionary_km_all_maxi/A/%E1%9E%91%E1%9F%86%E1%9E%96%E1%9F%90%E1%9E%9A%E1%9E%8A%E1%9E%BE%E1%9E%98",
            "card_thumbnail": "images/main/wiktionary.webp",
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
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_physics_21st_century.pdf",
            "card_thumbnail": "images/ck12/physics_21st.webp"
        },
        {
            "card_title": "Advanced Probability and Statistics",
            "card_subtitle": "Teacher Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_adv_prob_stats_teacher_edition.pdf",
            "card_thumbnail": "images/ck12/adv_prob_stat_teacher.webp"
        },
        {
            "card_title": "Algebra 1",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_algebra1.pdf",
            "card_thumbnail": "images/ck12/algebra2.webp"
        },
        {
            "card_title": "Algebra 1",
            "card_subtitle": "Teacher Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/algebra1_teacher_edition.pdf",
            "card_thumbnail": "images/ck12/algebra1_teacher.webp"
        },
        {
            "card_title": "Algebra 2",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_algebra2.pdf",
            "card_thumbnail": "images/ck12/algebra2.webp"
        },
        {
            "card_title": "Algebra Explorations",
            "card_subtitle": "Pre-K through Grade 7",
            "card_link": "http://rachel.koompi.app/modules/ck12/algebra_explorations.pdf",
            "card_thumbnail": "images/ck12/Algebra_exploration.webp"
        },
        {
            "card_title": "Basic Algebra",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_algebra1.pdf",
            "card_thumbnail": "images/ck12/basic_algerbra.webp"
        },
        {
            "card_title": "Basic Algebra Concept",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_basic_algebra_concepts.pdf",
            "card_thumbnail": "images/ck12/basic_algerbra-concept.webp"
        },
        {
            "card_title": "Basic Geometry",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_basic_geometry.pdf",
            "card_thumbnail": "images/ck12/basic_geometry.webp"
        },
        {
            "card_title": "Basic Geometry",
            "card_subtitle": "Teacher Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_basic_geometry_teacher_edition.pdf",
            "card_thumbnail": "images/ck12/basic_geometry_teacher.webp"
        },
        {
            "card_title": "Basic Geometry Concept",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_basic_geometry_concepts.pdf",
            "card_thumbnail": "images/ck12/basic_geometry_concept.webp"
        },
        {
            "card_title": "Basic Physics",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_basic_physics.pdf",
            "card_thumbnail": "images/ck12/basic_physics.webp"
        },
        {
            "card_title": "Basic Probability and Statistics",
            "card_subtitle": "Short Course",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_basic_prob_stats_short.pdf",
            "card_thumbnail": "images/ck12/basic_probab.webp"
        },
        {
            "card_title": "Basic Probability and Statistics",
            "card_subtitle": "Full Course",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_basic_prob_stats_full.pdf",
            "card_thumbnail": "images/ck12/basic_probab_full.webp"
        },
        {
            "card_title": "Biology",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_biology.pdf",
            "card_thumbnail": "images/ck12/bio.webp"
        },
        {
            "card_title": "Biology",
            "card_subtitle": "Workbook",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_biology_workbook.pdf",
            "card_thumbnail": "images/ck12/bio_workbook.webp"
        },
        {
            "card_title": "Biology",
            "card_subtitle": "Teacher Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_biology_teacher_edition.pdf",
            "card_thumbnail": "images/ck12/bio_teacher.webp"
        },
        {
            "card_title": "CK-12 Advance Probability and Statistics Concept",
            "card_subtitle": "Short Course",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_adv_prob_stats_concept.pdf",
            "card_thumbnail": "images/ck12/advanced_probab.webp"
        },
        {
            "card_title": "CK-12 Basic Probability and Statistics Concept",
            "card_subtitle": "Full Course",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_basic_prob_stats_concept.pdf",
            "card_thumbnail": "images/ck12/basic_probab_concept_full.webp"
        },
        {
            "card_title": "CK-12 People's Physics Concepts",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_people_physics_concepts.pdf",
            "card_thumbnail": "images/ck12/people_physics_concept.webp"
        },
        {
            "card_title": "CK-12 Trigonometry Concept",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_trigonometry_concepts.pdf",
            "card_thumbnail": "images/ck12/trigonometry_concept.webp"
        },
        {
            "card_title": "Calculus",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_calculus.pdf",
            "card_thumbnail": "images/ck12/calc.webp"
        },
        {
            "card_title": "Calculus",
            "card_subtitle": "Teacher Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_calculus_teacher_edition.pdf",
            "card_thumbnail": "images/ck12/calc_teacher.webp"
        },
        {
            "card_title": "Chemistry",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_chemistry.pdf",
            "card_thumbnail": "images/ck12/chemistry.webp"
        },
        {
            "card_title": "Chemistry",
            "card_subtitle": "Teacher Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_chemistry_teacher_edition.pdf",
            "card_thumbnail": "images/ck12/chemistry_teacher.webp"
        },
        {
            "card_title": "Chemistry",
            "card_subtitle": "Lab and Demo",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_chemistry_labs_demos.pdf",
            "card_thumbnail": "images/ck12/chemistry_lab_demo.webp"
        },
        {
            "card_title": "Earth Science",
            "card_subtitle": "For Middle Schools",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_earth_science_ms.pdf",
            "card_thumbnail": "images/ck12/es_midschool.webp"
        },
        {
            "card_title": "Earth Science",
            "card_subtitle": "For High Schools",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_earth_science_hs.pdf",
            "card_thumbnail": "images/ck12/es_hischool.webp"
        },
        {
            "card_title": "Earth Science Concepts",
            "card_subtitle": "Earth Science",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_earth_science_concepts.pdf",
            "card_thumbnail": "images/ck12/es_concept.webp"
        },
        {
            "card_title": "Engineering",
            "card_subtitle": "An Introduction for High School",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_engineering_hs.pdf",
            "card_thumbnail": "images/ck12/engineering.webp"
        },
        {
            "card_title": "Geometry",
            "card_subtitle": "Teacher Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_geometry_teacher_edition.pdf",
            "card_thumbnail": "images/ck12/geometry_teacher.webp"
        },
        {
            "card_title": "Life Science for Middle School",
            "card_subtitle": "Science",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_life_science_ms.pdf",
            "card_thumbnail": "images/ck12/life_science.webp"
        },
        {
            "card_title": "Physics",
            "card_subtitle": "From Stargazers to Starships",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_physics_star.pdf",
            "card_thumbnail": "images/ck12/physics_star.webp"
        },
        {
            "card_title": "Probability and Statistics",
            "card_subtitle": "Advanced Placement",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_prob_stats_adv_placement.pdf",
            "card_thumbnail": "images/ck12/adv_probab_stat.webp"
        },
        {
            "card_title": "Trigonometry",
            "card_subtitle": "Student Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_trigonometry.pdf",
            "card_thumbnail": "images/ck12/trigonometry.webp"
        },
        {
            "card_title": "Trigonometry",
            "card_subtitle": "Teacher Edition",
            "card_link": "http://rachel.koompi.app/modules/ck12/ck12_trigonometry_teacher_edition.pdf",
            "card_thumbnail": "images/ck12/trigonometry_teacher.webp"
        }
    ];

    return ck12_json;
}

function read_uiel_json(){
    const uiel_json = [
        {
            "card_title": "Primary Mathematics in English",
            "card_subtitle": "Teacher Guide",
            "card_link": "http://rachel.koompi.app/modules/iicba/PRIMARY_MATHS_SERIES/MATH_PAGES/index_pages/math_home.htm",
            "card_thumbnail": "images/main/UNESCO-IICBA.webp"
        },
        {
            "card_title": "Primary Science in English",
            "card_subtitle": "Teacher Guide",
            "card_link": "http://rachel.koompi.app/modules/iicba/PRIMARY_SCIENCE_SERIES/SCIENCE_PAGES/index_pages/science_home.htm",
            "card_thumbnail": "images/main/UNESCO-IICBA.webp"
        },
        {
            "card_title": "Secondary Science in English",
            "card_subtitle": "Teacher Guide",
            "card_link": "http://rachel.koompi.app/modules/iicba/SECONDARY_SCIENCE_SERIES/index_pages/science_home.htm",
            "card_thumbnail": "images/main/UNESCO-IICBA.webp"
        },
        {
            "card_title": "School Management in English",
            "card_subtitle": "Teacher Guide",
            "card_link": "http://rachel.koompi.app/modules/iicba/Better_Schools/index.html",
            "card_thumbnail": "images/main/UNESCO-IICBA.webp"
        },
        {
            "card_title": "HIV/AIDS Electronic Library",
            "card_subtitle": "Teacher Resouce",
            "card_link": "http://rachel.koompi.app/modules/iicba/Better_Schools/index.html",
            "card_thumbnail": "images/main/UNESCO-IICBA.webp"
        }
    ];
    return uiel_json;   
}

function read_olpc_json(){
    const olpc_json = [
        {
            "card_title": "Storybooks",
            "card_subtitle": "OLPC Project",
            "card_link": "http://rachel.koompi.app/modules/olpc/icdl/index.en.html",
            "card_thumbnail": "images/main/OLPC.webp"
        },
        {
            "card_title": "Web Design",
            "card_subtitle": "OLPC Project",
            "card_link": "http://rachel.koompi.app/modules/olpc/web_design/index.html",
            "card_thumbnail": "images/main/OLPC.webp"
        },
        {
            "card_title": "Wikibooks",
            "card_subtitle": "OLPC Project",
            "card_link": "http://rachel.koompi.app/modules/olpc/wikibooks/index.en.html",
            "card_thumbnail": "images/main/OLPC.webp"
        },
        {
            "card_title": "WikiSlice",
            "card_subtitle": "General",
            "card_link": "http://rachel.koompi.app/modules/olpc/wikislice-en/index.html",
            "card_thumbnail": "images/main/OLPC.webp"
        },
        {
            "card_title": "WikiSlice",
            "card_subtitle": "Animals",
            "card_link": "http://rachel.koompi.app/modules/olpc/wikislice-animals-en/index.html",
            "card_thumbnail": "images/main/OLPC.webp"
        },
        {
            "card_title": "Wikihow",
            "card_subtitle": "OLPC Project",
            "card_link": "http://rachel.koompi.app/modules/olpc/wikihow/index.html",
            "card_thumbnail": "images/main/OLPC.webp"
        },
        {
            "card_title": "WikiSlice",
            "card_subtitle": "Chemistry",
            "card_link": "http://rachel.koompi.app/modules/olpc/wikislice-chemistry-en/index.html",
            "card_thumbnail": "images/main/OLPC.webp"
        },
        {
            "card_title": "WikiSlice",
            "card_subtitle": "Physics",
            "card_link": "http://rachel.koompi.app/modules/olpc/wikislice-physics-en/index.html",
            "card_thumbnail": "images/main/OLPC.webp"
        },
        {
            "card_title": "Nature Photograph",
            "card_subtitle": "OLPC Project",
            "card_link": "http://rachel.koompi.app/modules/olpc/wp-world-images/index.en.html",
            "card_thumbnail": "images/main/OLPC.webp"
        },
        {
            "card_title": "World Culture",
            "card_subtitle": "OLPC Project",
            "card_link": "http://rachel.koompi.app/modules/olpc/wdl/index.en.html",
            "card_thumbnail": "images/main/OLPC.webp"
        },
        {
            "card_title": "Musical Instruments",
            "card_subtitle": "How to Build",
            "card_link": "http://rachel.koompi.app/modules/olpc/musical_look_at_waste/index.html",
            "card_thumbnail": "images/main/OLPC.webp"
        },
        {
            "card_title": "y-Bee-See",
            "card_subtitle": "An interactive ABC picturebook",
            "card_link": "http://rachel.koompi.app/modules/olpc/Yay-Bee-See/index.html",
            "card_thumbnail": "images/main/OLPC.webp"
        },
        {
            "card_title": "OLPC Dictionary",
            "card_subtitle": "A compact multilingual translation dictionary",
            "card_link": "http://rachel.koompi.app/modules/olpc/dictionary-m1/index.en.html",
            "card_thumbnail": "images/main/OLPC.webp"
        }
    ];
    return olpc_json;
}

function read_khan_ed_json(){
    const khan_ed_json = [
        {
            "card_title": "Arithmetic and Pre-Algebra",
            "card_subtitle": "Khan Academy Math",
            "card_link": "http://rachel.koompi.app/modules/khan_academy/math/arithmetic/index.html",
            "card_thumbnail": "images/khan_ed/arithmetic.webp"
        },
        {
            "card_title": "Algebra",
            "card_subtitle": "Khan Academy Math",
            "card_link": "http://rachel.koompi.app/modules/khan_academy/math/algebra/index.html",
            "card_thumbnail": "images/khan_ed/algebra.webp"
        },
        {
            "card_title": "Geometry",
            "card_subtitle": "Khan Academy Math",
            "card_link": "http://rachel.koompi.app/modules/khan_academy/math/geometry/index.html",
            "card_thumbnail": "images/khan_ed/geometry.webp"
        },
        {
            "card_title": "Trigonometry and PreCalculus",
            "card_subtitle": "Khan Academy Math",
            "card_link": "http://rachel.koompi.app/modules/khan_academy/math/trigonometry/index.html",
            "card_thumbnail": "images/khan_ed/trigonometry.webp"
        },
        {
            "card_title": "Calculus",
            "card_subtitle": "Khan Academy Math",
            "card_link": "http://rachel.koompi.app/modules/khan_academy/math/calculus/index.html",
            "card_thumbnail": "images/khan_ed/calculus.webp"
        },
        {
            "card_title": "Probability and Statistics",
            "card_subtitle": "Khan Academy Math",
            "card_link": "http://rachel.koompi.app/modules/khan_academy/math/probability/index.html",
            "card_thumbnail": "images/khan_ed/probab_stat.webp"
        },
        {
            "card_title": "Differential Equations",
            "card_subtitle": "Khan Academy Math",
            "card_link": "http://rachel.koompi.app/modules/khan_academy/math/differential-equations/index.html",
            "card_thumbnail": "images/khan_ed/diff.webp"
        }
        ,{
            "card_title": "Biology",
            "card_subtitle": "Khan Academy Science & Economics",
            "card_link": "http://rachel.koompi.app/modules/khan_academy/science/biology/index.html",
            "card_thumbnail": "images/khan_ed/bio.webp"
        },
        {
            "card_title": "Chemistry",
            "card_subtitle": "Khan Academy Science & Economics",
            "card_link": "http://rachel.koompi.app/modules/khan_academy/math/algebra/index.html",
            "card_thumbnail": "images/khan_ed/chem.webp"
        },
        {
            "card_title": "Physics",
            "card_subtitle": "Khan Academy Science & Economics",
            "card_link": "http://rachel.koompi.app/modules/khan_academy/science/physics/index.html",
            "card_thumbnail": "images/khan_ed/physics.webp"
        },
        {
            "card_title": "Cosmology and Astronomy",
            "card_subtitle": "Khan Academy Science & Economics",
            "card_link": "http://rachel.koompi.app/modules/khan_academy/science/cosmology-and-astronomy/index.html",
            "card_thumbnail": "images/khan_ed/astro.webp"
        },
        {
            "card_title": "Organic Chemistry",
            "card_subtitle": "Khan Academy Science & Economics",
            "card_link": "http://rachel.koompi.app/modules/khan_academy/science/organic-chemistry/index.html",
            "card_thumbnail": "images/khan_ed/org_chem.webp"
        },
        {
            "card_title": "Healthcare and Medicine",
            "card_subtitle": "Khan Academy Science & Economics",
            "card_link": "http://rachel.koompi.app/modules/khan_academy/science/healthcare-and-medicine/index.html",
            "card_thumbnail": "images/khan_ed/med.webp"
        }
    ];
    return khan_ed_json;
}

function read_hesperian_json(){
    const hesperian_json = [
        {
            "card_title": "A Book for Midwives",
            "card_subtitle": "Care for pregnancy and birth",
            "card_link": "http://rachel.koompi.app/modules/hesperian_health/en_midw_2011_Full_Book/page1.html",
            "card_thumbnail": "images/hesperian/a_book_for_midwife.webp"
        },
        {
            "card_title": "Cholera Prevention",
            "card_subtitle": "Fact Sheet",
            "card_link": "http://rachel.koompi.app/modules/hesperian_health/Cholera_EN/page1.html",
            "card_thumbnail": "images/hesperian/how_to_prevent_chloera.webp"
        },
        {
            "card_title": "Disabled Village Children",
            "card_subtitle": "Care for Disabled Child",
            "card_link": "http://rachel.koompi.app/modules/hesperian_health/DVC_2009/page1.html",
            "card_thumbnail": "images/hesperian/disabled_village_children.webp"
        },
        {
            "card_title": "Environmental Health",
            "card_subtitle": "Community Guide",
            "card_link": "http://rachel.koompi.app/modules/hesperian_health/en_cgeh_2012_full/page1.html",
            "card_thumbnail": "images/hesperian/a_community_guide_to_environmental_health.webp"
        },
        {
            "card_title": "Helping Children Who Are Blind",
            "card_subtitle": "Care for Blind Children",
            "card_link": "http://rachel.koompi.app/modules/hesperian_health/en_hcwb_2000_whole_book/page1.html",
            "card_thumbnail": "images/hesperian/helping_children_who_are_blind.webp"
        },
        {
            "card_title": "Helping Children Who Are Deaf",
            "card_subtitle": "Care for Deaf Children",
            "card_link": "http://rachel.koompi.app/modules/hesperian_health/en_hcwd_2004_Full_Book/page1.html",
            "card_thumbnail": "images/hesperian/helping_children who_are_deaf.png"
        },
        {
            "card_title": "Helping Health Workers Learn",
            "card_subtitle": "Learning Material",
            "card_link": "http://rachel.koompi.app/modules/hesperian_health/en_hhwl_2012_full/page1.html",
            "card_thumbnail": "images/hesperian/helping_health_worker_learn.webp"
        },
        {
            "card_title": "Sanitation and Cleanliness",
            "card_subtitle": "For a Healthy Environment",
            "card_link": "http://rachel.koompi.app/modules/hesperian_health/EHB_Sanitation_EN_watermark/page1.html",
            "card_thumbnail": "images/hesperian/sanitation_and_cleanliness.webp"
        },
        {
            "card_title": "Water for Life",
            "card_subtitle": "Community water security",
            "card_link": "http://rachel.koompi.app/modules/hesperian_health/ehb_water_EN_watermark/page1.html",
            "card_thumbnail": "images/hesperian/water_for_life.webp"
        },
        {
            "card_title": "Where There Is No Dentist",
            "card_subtitle": "For Teeth Health",
            "card_link": "http://rachel.koompi.app/modules/hesperian_health/en_dent_2012_full/page1.html",
            "card_thumbnail": "images/hesperian/where_there_is_no_dentist.webp"
        },
        {
            "card_title": "Where There Is No Doctor",
            "card_subtitle": "A village health care handbook",
            "card_link": "http://rachel.koompi.app/modules/hesperian_health/en_wtnd_2011_full/page1.html",
            "card_thumbnail": "images/hesperian/where_there_is_no_doctor_a_village_health_care_handbook.webp"
        },
        {
            "card_title": "Where Women Have No Doctor",
            "card_subtitle": "For Woman Health",
            "card_link": "http://rachel.koompi.app/modules/hesperian_health/en_wwhnd_2012_full/page1.html",
            "card_thumbnail": "images/hesperian/where_woman_have_no_doctor.webp"
        },
        {
            "card_title": "Women with Disabilities",
            "card_subtitle": "A Health Handbook",
            "card_link": "http://rachel.koompi.app/modules/hesperian_health/en_WWD_2008_full_book/page1.html",
            "card_thumbnail": "images/hesperian/a_health_handbook_for_woman_with_disability.webp"
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
                "img_src": "images/stem-logo.webp"
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
                "svg": false,
                "img_src": "images/stem-logo.webp"
            },
            {
                "disp_name": "Technology",
                "svg": false,
                "img_src": "images/stem-logo.webp"
            },
            {
                "disp_name": "Engineering",
                "svg": false,
                "img_src": "images/stem-logo.webp"
            },
            {
                "disp_name": "Mathematic",
                "svg": false,
                "img_src": "images/stem-logo.webp"
            }
        ]
    };

    return sidebar
}