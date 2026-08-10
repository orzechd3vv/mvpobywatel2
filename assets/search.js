(function() {
    var services = [
        { name: "Podpisz dokument", icon: "./services_files/sign_document.png", route: null },
        { name: "Bezpiecznie w sieci", icon: "./services_files/safe_in_web.png", route: "safe_in_web" },
        { name: "Alert powodziowy", icon: "./services_files/flood.png", route: "flood" },
        { name: "Zastrzeż PESEL", icon: "./services_files/pesel.png", route: "pesel_status" },
        { name: "Firma", icon: "./services_files/business.png", route: "business" },
        { name: "Punkty karne", icon: "./services_files/penalties.png", route: "penalties" },
        { name: "Mandaty", icon: "./services_files/tickets.png", route: "tickets" },
        { name: "Sprawdź dowód", icon: "./services_files/check_id.png", route: "check_id" },
        { name: "Sprawdź PESEL", icon: "./services_files/check_pesel.png", route: "check_pesel" },
        { name: "Recepty", icon: "./services_files/health.png", route: "recepty" },
        { name: "mojeIKP", icon: "./services_files/my_ikp.png", route: null },
        { name: "Załatw sprawę", icon: "./services_files/finish_case.png", route: "finish_case" },
        { name: "Twoje sprawy", icon: "./services_files/your_cases.png", route: "my_cases" },
        { name: "Odbiór dowodu", icon: "./services_files/collect_id.png", route: "collect_id" },
        { name: "E-wizyta w ZUS", icon: "./services_files/e_visit.png", route: null },
        { name: "Wybory", icon: "./services_files/elections.png", route: "elections" },
        { name: "Uprawnienia kierowcy", icon: "./services_files/driver.png", route: null },
        { name: "Historia pojazdu", icon: "./services_files/vehicle.png", route: null },
        { name: "ePłatności", icon: "./services_files/e_payments.png", route: null },
        { name: "Naruszenie środowiskowe", icon: "./services_files/nature.png", route: null },
        { name: "Jakość powietrza", icon: "./services_files/air.png", route: null },
        { name: "Bezpieczny autobus", icon: "./services_files/bus.png", route: null },
        { name: "Bilkom", icon: "./services_files/bilkom.png", route: null },
        { name: "Karta MKA", icon: "./services_files/MKA.png", route: null },
        { name: "Polak za granicą", icon: "./services_files/plane.png", route: null }
    ];

    var searchInput = document.querySelector(".search_field input");
    var searchEmpty = document.querySelector(".search_empty");
    var searchResults = document.createElement("div");
    searchResults.id = "searchResults";
    searchResults.className = "search_results";
    document.querySelector(".search_shell").appendChild(searchResults);

    // Initial state: hide empty block
    if (searchEmpty) searchEmpty.style.display = "none";

    function normalize(val) {
        return (val || "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    function performSearch() {
        var query = normalize(searchInput.value.trim());
        searchResults.innerHTML = "";

        if (!query) {
            if (searchEmpty) searchEmpty.style.display = "none";
            return;
        }

        var filtered = services.filter(function(s) {
            return normalize(s.name).indexOf(query) !== -1;
        });

        if (filtered.length === 0) {
            if (searchEmpty) searchEmpty.style.display = "grid";
        } else {
            if (searchEmpty) searchEmpty.style.display = "none";
            filtered.forEach(function(s) {
                var item = document.createElement("div");
                item.className = "search_result_item";
                item.innerHTML = 
                    '<img class="item_icon" src="' + s.icon + '" alt="">' +
                    '<span class="item_name">' + s.name + '</span>' +
                    '<svg class="item_arrow" width="8" height="14" viewBox="0 0 8 14" fill="none">' +
                        '<path d="M1 1L7 7L1 13" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
                    '</svg>';
                
                item.addEventListener("click", function() {
                    if (s.route) {
                        sendTo(s.route);
                    } else {
                        document.getElementById("errorPopup").classList.remove("error_popup_hidden");
                    }
                });
                searchResults.appendChild(item);
            });
        }
    }

    if (searchInput) {
        searchInput.addEventListener("input", performSearch);
    }
})();
