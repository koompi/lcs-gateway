function generate_sidebar(enable_attr) {
    const attr_list = read_sidebar();
    var sidebar_html = [
        '<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="transition: 0.5s;">',
        '<div class="modal-dialog modal-dialog-scrollable model-sm h-100 m-0">',
        '<div class="modal-content h-100 w-75">',
        '<div class="modal-header justify-content-center text-center">',
        '<h5 class="modal-title" id="exampleModalLabel">',
        '<a class="navbar-brand ps-2" href="#">',
        '<img src="images/Koompi-Dark.png" alt="KOOMPI" width="150" height="40" srcset=""',
        'class="d-inline-block align-text-top">',
        '</a>',
        '</h5>',
        '</div>',
        '<div class="modal-body">',
        '<ul class="nav nav-pills flex-column mb-auto">'
    ];

    for (let i = 0; i < attr_list.main_list.length; i++) {
        const stat = enable_attr == attr_list.main_list[i].disp_name ? "active" : "link-dark";
        const image_html = attr_list.main_list[i].svg ?
            '<svg class="bi me-2" width="16" height="16">\n<use xlink:href="' + attr_list.main_list[i].img_src + '"></use>\n</svg>' :
            '<img class="bi me-2" src="' + attr_list.main_list[i].img_src + '" alt="KOOMPI" width="16" height="16" srcset="" class="d-inline-block align-text-top">';

        const current_html = [
            '<li class="nav-item">',
            '<a href="javascript: gotoPage(\'' + attr_list.main_list[i].disp_name + '\')" class="nav-link ' + stat + '" aria-current="page">',
            image_html,
            attr_list.main_list[i].disp_name,
            '</a>',
            '</li>'
        ].join("\n");
        sidebar_html.push(current_html);
    }

    sidebar_html.push("<hr>");

    for (let i = 0; i < attr_list.secondary_list.length; i++) {
        const stat = enable_attr == attr_list.secondary_list[i].disp_name ? "active" : "link-dark";
        const image_html = attr_list.secondary_list[i].svg ?
            '<svg class="bi me-2" width="16" height="16">\n<use xlink:href="' + attr_list.secondary_list[i].img_src + '"></use>\n</svg>' :
            '<img src="' + attr_list.secondary_list[i].img_src + '" alt="KOOMPI" width="16" height="16" srcset="" class="d-inline-block align-text-top">';

        const current_html = [
            '<li class="nav-item">',
            '<a href="javascript: gotoPage(\'' + attr_list.secondary_list[i].disp_name + '\')" class="nav-link ' + stat + '" aria-current="page">',
            image_html,
            attr_list.secondary_list[i].disp_name,
            '</a>',
            '</li>'
        ].join("\n");
        sidebar_html.push(current_html);
    }

    sidebar_html.push('</ul>\n<hr>\n</div>');
    sidebar_html.push('<div class="modal-footer justify-content-center">');
    sidebar_html.push('<p class="badge text-dark">KOOMPI © 2020 All Rights Reserved.</p>');
    sidebar_html.push('</div>\n</div>\n</div>\n</div>');

    var div = document.getElementById('dynamic_sidebar');
    div.innerHTML = sidebar_html.join("\n");
}


function generate_main_cards(filter_category) {
    const cards_list = read_main_cards();
    var cards_html = [
        '<div class="container-fluid h-100 p-3 bg-light bg-gradient" style="margin-top: 10vh;">',
        '<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">'
    ];

    for (let i = 0; i < cards_list.length; i++) {
        if (cards_list[i].card_categories.includes(filter_category)) {
            const current_html = [
                '<div class="col">',
                '<a href="' + cards_list[i].card_link + '" class="text-decoration-none text-reset">',
                '<div class="card h-100 w-100 border border-dark border-2">',
                '<div class="ratio ratio-16x9 border-dark border-bottom">',
                '<img src="' + cards_list[i].card_thumbnail + '" class="card-img-top" alt="..." loading="lazy">',
                '</div>',
                '<div class="card-body">',
                '<h5 class="card-title fs-6">' + cards_list[i].card_title + '</h5>',
                '<h6 class="card-subtitle mb-2 text-muted text-truncate" style="font-size: small">' + cards_list[i].card_subtitle + '</h6>',
                '</div>\n</div>\n</a>\n</div>'
            ];
            cards_html.push(current_html.join("\n"));
        }

    }

    cards_html.push('</div>');
    cards_html.push('<hr>');
    var div = document.getElementById('dynamic_cards');
    div.innerHTML = cards_html.join("\n");
}


function generate_headnav() {
    const headnav_html = [
        '<div class="container-fluid g-0 fixed-top" id="main_body">',
        '<div class="row mx-0 g-2 m-row py-1 bg-primary bg-gradient">',
        '<div class="col-md-12">',
        '<nav class="navbar navbar-expand-md navbar-dark bg-primary bg-gradient" aria-label="Second navbar example">',
        '<div class="container-fluid justify-content-between">',
        '<button class="btn btn-primary bg-gradient" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" aria-expanded="false" aria-controls="collapseExample">',
        '<span class="navbar-toggler-icon"></span>',
        '</button>',
        '<a class="navbar-brand ps-2" href="index.html">',
        '<img src="images/Koompi-White.png" alt="KOOMPI" width="150" height="40" srcset="" class="d-inline-block align-text-top">',
        '</a>',
        '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">',
        '<svg class="bi bi-search" width="16" height="16">',
        '<use xlink:href="#search"></use>',
        '</svg>',
        '</button>',
        '<div class="collapse navbar-collapse" id="navbarsExample02">',
        '<ul class="navbar-nav me-auto"></ul>',
        '<hr>',
        '<form class="d-flex">',
        '<input class="form-control" type="search" placeholder="Search" aria-label="Search">',
        '</form>',
        '</div>\n</div>\n</nav>\n</div>\n</div>\n</div>\n</div>'
    ];

    var div = document.getElementById('static_navbar');
    div.innerHTML += headnav_html.join("\n");
}


function generate_svg() {
    const svg_html = [
        '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">',
        '<symbol id="home" viewBox="0 0 16 16">',
        '<path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"></path>',
        '</symbol>',
        '<symbol id="law" viewBox="0 0 16 16">',
        '<path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"/>',
        '</symbol>',
        '<symbol id="ict" viewBox="0 0 16 16">',
        '<path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>',
        '</symbol>',
        '<symbol id="health" viewBox="0 0 16 16">',
        '<path fill-rule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Zm8.252-6.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z"/>',
        '</symbol>',
        '<symbol id="gen_edu" viewBox="0 0 16 16">',
        '<path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>',
        '<path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>',
        '</symbol>',
        '<symbol id="art" viewBox="0 0 16 16">',
        '<path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>',
        '<path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>',
        '</symbol>',
        '<symbol id="speedometer2" viewBox="0 0 16 16">',
        '<path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"></path>',
        '<path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"></path>',
        '</symbol>',
        '<symbol id="search" viewBox="0 0 16 16">',
        '<path fill-rule="evenodd" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>',
        '</symbol>',
        '<symbol id="back_arrow" viewBox="0 0 16 16">',
        '<path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>',
        '</symbol>',
        '</svg>'
    ]
    var div = document.getElementById('static_navbar');
    div.innerHTML += svg_html.join("\n");
}


function gotoPage(category) {
    generate_sidebar(category);
    generate_main_cards(category);
    document.body.setAttribute("class", "h-100");
    document.body.removeAttribute("style");
    var m_body = document.getElementById("main_body");
    m_body.removeAttribute("style");
    m_body.removeAttribute("data-bs-padding-right");
    const overlay_class = document.getElementsByClassName("modal-backdrop fade show");
    overlay_class[0].parentNode.removeChild(overlay_class[0]);
}


function generate_subcards(item_list, div_id, title) {

    var whole_html = [
        '<div class="offcanvas offcanvas-bottom" tabindex="-1" id="'+ div_id + '-offcanvas" data-bs-backdrop="false" aria-labelledby="offcanvasBottomLabel" style="margin-top: 10vh; height: calc(100% - 10vh); transition: 0.5s;">',
        '<div class="offcanvas-header d-flex justify-content-around" style="background-color: #dee2e6;">',
        '<div class="flex-grow-1"></div>',
        '<h5 class="offcanvas-title flex-grow-1 text-truncate" id="offcanvasExampleLabel">'+ title +'</h5>',
        '<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>',
        '</div>',
        '<div class="offcanvas-body p-0">',
        '<div class="container-fluid h-100 p-3">',
        '<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">',
    ];

    for (let i = 0; i < item_list.length; i++) {
        const current_html = [
            '<div class="col">',
            '<a href="' + item_list[i].card_link + '" class="text-decoration-none text-reset">',
            '<div class="card h-100 w-100 border border-dark border-2">',
            '<div class="ratio ratio-16x9 border-dark border-bottom">',
            '<img src="' + item_list[i].card_thumbnail + '" class="card-img-top" alt="..." loading="lazy">',
            '</div>',
            '<div class="card-body">',
            '<h5 class="card-title fs-6">' + item_list[i].card_title + '</h5>',
            '<h6 class="card-subtitle mb-2 text-muted text-truncate" style="font-size: small">' + item_list[i].card_subtitle + '</h6>',
            '</div>\n</div>\n</a>\n</div>'
        ];
        whole_html.push(current_html.join("\n"));
    }

    whole_html.push("</div>\n<hr>\n</div>\n</div>\n</div>");
    var div = document.getElementById(div_id);
    console.log(document.getElementById(div_id));
    console.log(document.getElementById("#"+div_id));
    div.innerHTML = whole_html.join("\n");
}


function display_subcard(div_id, elmt_id) {
    const div_content = document.querySelector("#"+div_id);
    if (!div_content.childElementCount) {
        if (div_id == "ck12") {
            const ck12_json = read_ck12_json();
            generate_subcards(ck12_json, "ck12", 'CK-12 Textbooks');
        }
        else if (div_id == "hesperian") {
            const hesperian_json = read_hesperian_json();
            generate_subcards(hesperian_json, "hesperian", 'Hesperian Health Guides');
        }
        else if (div_id == "uiel") {
            const uiel_json = read_uiel_json();
            generate_subcards(uiel_json, "uiel", 'UNESCO\'s IICBA Electronic Library');
        }
        else if (div_id == "olpc") {
            const uiel_json = read_olpc_json();
            generate_subcards(uiel_json, "olpc", 'OLPC Educational Packages');
        }
    }
    var myOffcanvas = document.getElementById(elmt_id);
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas)
    bsOffcanvas.show();
}

