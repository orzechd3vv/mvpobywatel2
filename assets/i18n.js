/**
 * mObywatel i18n - System tłumaczeń / Translation System / Система перекладу
 * Supported: pl (Polish), en (English), ua (Ukrainian)
 */

const TRANSLATIONS = {
    pl: {
        // --- Bottom bar ---
        "nav.documents": "Dokumenty",
        "nav.services": "Usługi",
        "nav.qr": "Kod QR",
        "nav.more": "Więcej",
        "nav.search": "Szukaj",

        // --- Home ---
        "home.title": "Dokumenty",
        "home.customize": "Dostosuj",
        "home.add": "Dodaj",
        "home.mdowod": "mDowód",

        // --- Services ---
        "services.title": "Usługi",
        "services.search": "Szukaj",
        "services.no_results": "Brak wyników",
        "services.favorites": "Ulubione",
        "services.customize": "Dostosuj",
        "services.data_protection": "Ochrona danych",
        "services.health": "Zdrowie",
        "services.official": "Sprawy urzędowe",
        "services.driver": "Kierowca i pojazdy",
        "services.payments": "Opłaty i podatki",
        "services.environment": "Środowisko",
        "services.travel": "Podróż",
        "services.sign_doc": "Podpisz dokument",
        "services.safe_web": "Bezpiecznie w sieci",
        "services.flood": "Alert powodziowy",
        "services.pesel_reserve": "Zastrzeż PESEL",
        "services.company": "Firma",
        "services.penalty_points": "Punkty karne",
        "services.tickets": "Mandaty",
        "services.check_id": "Sprawdź dowód",
        "services.check_pesel": "Sprawdź PESEL",
        "services.prescriptions": "Recepty",
        "services.mojeikp": "mojeIKP",
        "services.handle_case": "Załatw sprawę",
        "services.your_cases": "Twoje sprawy",
        "services.collect_id": "Odbiór dowodu",
        "services.ezus": "E-wizyta w ZUS",
        "services.elections": "Wybory",
        "services.driver_license": "Uprawnienia kierowcy",
        "services.vehicle_history": "Historia pojazdu",
        "services.epayments": "ePłatności",
        "services.env_violation": "Naruszenie środowiskowe",
        "services.air_quality": "Jakość powietrza",
        "services.safe_bus": "Bezpieczny autobus",
        "services.bilkom": "Bilkom",
        "services.mka_card": "Karta MKA",
        "services.abroad": "Polak za granicą",
        "services.error_title": "Coś poszło nie tak...",
        "services.error_desc": "Wygląda na to że wystąpił błąd z połączeniem z siecią, spróbuj ponownie później.",
        "services.error_btn": "Rozumiem",

        // --- QR ---
        "qr.title": "Kod QR",
        "qr.show": "Pokaż kod QR",
        "qr.show_desc": "Wygeneruj kod dla urzędu lub innej osoby",
        "qr.scan": "Zeskanuj kod QR",
        "qr.scan_desc": "Zeskanuj kod innej osoby lub instytucji",

        // --- More ---
        "more.title": "Więcej",
        "more.your_data": "Twoje dane",
        "more.logout": "Wyloguj się",
        "more.residence": "Dane zameldowania",
        "more.passport_data": "Dane paszportu",
        "more.change_password": "Zmień hasło",
        "more.biometric": "Logowanie biometryczne",
        "more.notifications": "Powiadomienia",
        "more.appearance": "Wygląd",
        "more.language": "Język aplikacji",
        "more.certificates": "Wydane certyfikaty",
        "more.remaining": "Pozostałe",
        "more.activity_history": "Historia aktywności",
        "more.about": "O aplikacji",
        "more.support": "Pomoc techniczna",
        "more.rate": "Oceń aplikację",
        "more.vote_idea": "Zagłosuj na pomysł",
        "more.deactivate": "Dezaktywuj aplikację",

        // --- Logout modal ---
        "logout.question": "Czy na pewno chcesz się wylogować?",
        "logout.confirm": "Tak, chcę",
        "logout.cancel": "Nie, anuluj",

        // --- Appearance ---
        "appearance.title": "Wygląd",
        "appearance.subtitle": "Wygląd aplikacji",
        "appearance.desc": "Wybierz motyw kolorystyczny aplikacji mObywatel",
        "appearance.light": "Tryb jasny",
        "appearance.dark": "Tryb ciemny",
        "appearance.auto": "Automatyczny",
        "appearance.auto_desc": "Dopasowany do motywu urządzenia",

        // --- Language ---
        "language.title": "Język aplikacji",
        "language.header": "Wybierz język",
        "language.header2": "aplikacji",
        "language.desc": "Zmień preferowany język wyświetlania interfejsu.",
        "language.pl": "Polski",
        "language.pl_desc": "Język domyślny",
        "language.en": "English",
        "language.en_desc": "English language",
        "language.ua": "Українська",
        "language.ua_desc": "Українська мова",
        "language.loading": "Zmienianie języka...",

        // --- Activity History ---
        "activity.title": "Historia aktywności",
        "activity.header": "Historia",
        "activity.header2": "aktywności",
        "activity.desc": "Przegląd ostatnich operacji w aplikacji mObywatel.",
        "activity.today": "Dzisiaj",
        "activity.yesterday": "Wczoraj",
        "activity.login": "Zalogowanie do aplikacji",
        "activity.qr_show": "Wyświetlenie Kodu QR",
        "activity.id_check": "Sprawdzenie dowodu",
        "activity.password_change": "Zmiana hasła",
        "activity.login2": "Zalogowanie do aplikacji",

        // --- Residence Data ---
        "residence.title": "Dane zameldowania",
        "residence.header": "Dane",
        "residence.header2": "zameldowania",
        "residence.desc": "Twoje aktualne dane meldunkowe z rejestru PESEL.",
        "residence.permanent": "Zameldowanie stałe",
        "residence.temporary": "Zameldowanie tymczasowe",
        "residence.street": "Ulica",
        "residence.city": "Miasto",
        "residence.postal": "Kod pocztowy",
        "residence.commune": "Gmina",
        "residence.district": "Powiat",
        "residence.province": "Województwo",
        "residence.country": "Kraj",
        "residence.since": "Zameldowany od",
        "residence.no_data": "Brak danych",

        // --- Change Password ---
        "password.title": "Zmień hasło",
        "password.header": "Zmień",
        "password.header2": "hasło",
        "password.desc": "Zaktualizuj hasło do swojego konta mObywatel.",
        "password.current": "Aktualne hasło",
        "password.new": "Nowe hasło",
        "password.confirm": "Potwierdź nowe hasło",
        "password.btn": "Zmień hasło",
        "password.success": "Hasło zostało zmienione",
        "password.error_match": "Hasła nie są zgodne",
        "password.error_wrong": "Aktualne hasło jest nieprawidłowe",
        "password.error_short": "Hasło musi mieć co najmniej 6 znaków",

        // --- Search ---
        "search.placeholder": "Szukaj...",
        "search.no_results": "Brak wyników dla",

        // --- QR Show ---
        "qr_show.title": "Pokaż kod QR",
        "qr_show.back": "Kod QR",
        "qr_show.instructions": "Pokaż ten kod do weryfikacji",
        "qr_show.expires": "Kod wygasa za",
        "qr_show.seconds": "s",

        // --- QR Scan ---
        "qr_scan.title": "Zeskanuj kod QR",
        "qr_scan.back": "Kod QR",
        "qr_scan.instructions": "Skieruj kamerę na kod QR",

        // --- mDowód (card.html) ---
        "card.back": "Wróć",
        "card.title": "mDowód",
        "card.firstname": "Imię (imiona)",
        "card.surname": "Nazwisko",
        "card.citizenship": "Obywatelstwo",
        "card.birthdate": "Data urodzenia",
        "card.pesel": "Numer PESEL",
        "card.valid": "Dokument ważny",
        "card.confirm": "Potwierdź swoje dane",
        "card.id_data": "Dane dowodu osobistego",
        "card.reserve_pesel": "Zastrzeż PESEL",
        "card.other_shortcuts": "Pozostałe skróty",
        "card.series": "Seria i numer mDowodu",
        "card.series_note": "Dane mDowodu i dowodu osobistego są inne - to dwa różne dokumenty.",
        "card.copy": "Kopiuj",
        "card.expiry": "Termin ważności",
        "card.issue_date": "Data wydania",
        "card.father_name": "Imię ojca",
        "card.mother_name": "Imię matki",
        "card.additional": "Twoje dodatkowe dane",
        "card.family_name": "Nazwisko rodowe",
        "card.gender": "Płeć",
        "card.father_family": "Nazwisko rodowe ojca",
        "card.mother_family": "Nazwisko rodowe matki",
        "card.birthplace": "Miejsce urodzenia",
        "card.birth_country": "Kraj urodzenia",
        "card.address": "Adres zameldowania na pobyt stały",
        "card.address_date": "Data zameldowania na pobyt stały",
        "card.last_update": "Ostatnia aktualizacja",
        "card.update_btn": "Aktualizuj",

        // --- moreid.html ---
        "moreid.title": "Dane dowodu osobistego",
        "moreid.series": "Seria i numer",
        "moreid.status": "Status",
        "moreid.issued": "Wydany",
        "moreid.authority": "Organ wydający",
        "moreid.expiry": "Termin ważności",
        "moreid.issue_date": "Data wydania",
        "moreid.last_update": "Ostatnia aktualizacja",
        "moreid.update_btn": "Aktualizuj",
        "moreid.change_pin": "Zmień PIN do podpisu osobistego",

        // --- pesel_status.html ---
        "pesel.title": "Zastrzeż PESEL",
        "pesel.reserved_title": "Twój PESEL jest zastrzeżony",
        "pesel.reserved_desc": "Teraz nikt nie wykorzysta go bez Twojej wiedzy.",
        "pesel.reserve_btn": "Zastrzeż PESEL",
        "pesel.unreserve_btn": "Cofnij zastrzeżenie",
        "pesel.info": "Po każdym cofnięciu zastrzeżenia numeru PESEL nie możesz skorzystać z usługi przez 30 minut.",
        "pesel.history": "Historia",
        "pesel.who_checked": "Kto sprawdzał Twój PESEL",
        "pesel.last_check": "Ostatnia weryfikacja 01.08.2025",
        "pesel.your_changes": "Twoje zmiany",
        "pesel.last_change": "Ostatnia zmiana 01.08.2025",

        // --- shortcuts.html ---
        "shortcuts.title": "Pozostałe skróty",
        "shortcuts.back": "mDowód",
        "shortcuts.fines": "Mandaty",
        "shortcuts.elections": "Wybory",
        "shortcuts.remove_doc": "Usuń dokument",

        // --- search.html ---
        "search.title": "Szukaj",
        "search.input": "Wpisz szukaną frazę",
        "search.empty": "Brak wyników.",
    },

    en: {
        // --- Bottom bar ---
        "nav.documents": "Documents",
        "nav.services": "Services",
        "nav.qr": "QR Code",
        "nav.more": "More",
        "nav.search": "Search",

        // --- Home ---
        "home.title": "Documents",
        "home.customize": "Customize",
        "home.add": "Add",
        "home.mdowod": "mID Card",

        // --- Services ---
        "services.title": "Services",
        "services.search": "Search",
        "services.no_results": "No results",
        "services.favorites": "Favorites",
        "services.customize": "Customize",
        "services.data_protection": "Data protection",
        "services.health": "Health",
        "services.official": "Official matters",
        "services.driver": "Driver & vehicles",
        "services.payments": "Payments & taxes",
        "services.environment": "Environment",
        "services.travel": "Travel",
        "services.sign_doc": "Sign document",
        "services.safe_web": "Safe online",
        "services.flood": "Flood alert",
        "services.pesel_reserve": "Reserve PESEL",
        "services.company": "Company",
        "services.penalty_points": "Penalty points",
        "services.tickets": "Fines",
        "services.check_id": "Check ID",
        "services.check_pesel": "Check PESEL",
        "services.prescriptions": "Prescriptions",
        "services.mojeikp": "myIKP",
        "services.handle_case": "Handle a case",
        "services.your_cases": "Your cases",
        "services.collect_id": "Collect ID card",
        "services.ezus": "E-visit at ZUS",
        "services.elections": "Elections",
        "services.driver_license": "Driver's license",
        "services.vehicle_history": "Vehicle history",
        "services.epayments": "ePayments",
        "services.env_violation": "Environmental violation",
        "services.air_quality": "Air quality",
        "services.safe_bus": "Safe bus",
        "services.bilkom": "Bilkom",
        "services.mka_card": "MKA Card",
        "services.abroad": "Pole abroad",
        "services.error_title": "Something went wrong...",
        "services.error_desc": "It looks like there was a network connection error. Please try again later.",
        "services.error_btn": "I understand",

        // --- QR ---
        "qr.title": "QR Code",
        "qr.show": "Show QR Code",
        "qr.show_desc": "Generate a code for an office or another person",
        "qr.scan": "Scan QR Code",
        "qr.scan_desc": "Scan another person's or institution's code",

        // --- More ---
        "more.title": "More",
        "more.your_data": "Your data",
        "more.logout": "Log out",
        "more.residence": "Residence data",
        "more.passport_data": "Passport data",
        "more.change_password": "Change password",
        "more.biometric": "Biometric login",
        "more.notifications": "Notifications",
        "more.appearance": "Appearance",
        "more.language": "App language",
        "more.certificates": "Issued certificates",
        "more.remaining": "Other",
        "more.activity_history": "Activity history",
        "more.about": "About the app",
        "more.support": "Technical support",
        "more.rate": "Rate the app",
        "more.vote_idea": "Vote for an idea",
        "more.deactivate": "Deactivate app",

        // --- Logout modal ---
        "logout.question": "Are you sure you want to log out?",
        "logout.confirm": "Yes, log out",
        "logout.cancel": "No, cancel",

        // --- Appearance ---
        "appearance.title": "Appearance",
        "appearance.subtitle": "App appearance",
        "appearance.desc": "Choose the color theme for the mObywatel app",
        "appearance.light": "Light mode",
        "appearance.dark": "Dark mode",
        "appearance.auto": "Automatic",
        "appearance.auto_desc": "Matches your device theme",

        // --- Language ---
        "language.title": "App language",
        "language.header": "Choose app",
        "language.header2": "language",
        "language.desc": "Change the preferred display language of the interface.",
        "language.pl": "Polish",
        "language.pl_desc": "Default language",
        "language.en": "English",
        "language.en_desc": "English language",
        "language.ua": "Ukrainian",
        "language.ua_desc": "Ukrainian language",
        "language.loading": "Changing language...",

        // --- Activity History ---
        "activity.title": "Activity history",
        "activity.header": "Activity",
        "activity.header2": "history",
        "activity.desc": "Overview of recent operations in the mObywatel app.",
        "activity.today": "Today",
        "activity.yesterday": "Yesterday",
        "activity.login": "Logged into app",
        "activity.qr_show": "QR Code displayed",
        "activity.id_check": "ID card checked",
        "activity.password_change": "Password changed",
        "activity.login2": "Logged into app",

        // --- Residence Data ---
        "residence.title": "Residence data",
        "residence.header": "Residence",
        "residence.header2": "data",
        "residence.desc": "Your current address registration data from the PESEL registry.",
        "residence.permanent": "Permanent residence",
        "residence.temporary": "Temporary residence",
        "residence.street": "Street",
        "residence.city": "City",
        "residence.postal": "Postal code",
        "residence.commune": "Municipality",
        "residence.district": "District",
        "residence.province": "Province",
        "residence.country": "Country",
        "residence.since": "Registered since",
        "residence.no_data": "No data",

        // --- Change Password ---
        "password.title": "Change password",
        "password.header": "Change",
        "password.header2": "password",
        "password.desc": "Update the password for your mObywatel account.",
        "password.current": "Current password",
        "password.new": "New password",
        "password.confirm": "Confirm new password",
        "password.btn": "Change password",
        "password.success": "Password has been changed",
        "password.error_match": "Passwords do not match",
        "password.error_wrong": "Current password is incorrect",
        "password.error_short": "Password must be at least 6 characters",

        // --- Search ---
        "search.placeholder": "Search...",
        "search.no_results": "No results for",

        // --- QR Show ---
        "qr_show.title": "Show QR Code",
        "qr_show.back": "QR Code",
        "qr_show.instructions": "Show this code for verification",
        "qr_show.expires": "Code expires in",
        "qr_show.seconds": "s",

        // --- QR Scan ---
        "qr_scan.title": "Scan QR Code",
        "qr_scan.back": "QR Code",
        "qr_scan.instructions": "Point the camera at the QR code",

        // --- mDowód (card.html) ---
        "card.back": "Back",
        "card.title": "mID Card",
        "card.firstname": "First name(s)",
        "card.surname": "Last name",
        "card.citizenship": "Citizenship",
        "card.birthdate": "Date of birth",
        "card.pesel": "PESEL number",
        "card.valid": "Document valid",
        "card.confirm": "Confirm your data",
        "card.id_data": "ID card data",
        "card.reserve_pesel": "Reserve PESEL",
        "card.other_shortcuts": "Other shortcuts",
        "card.series": "mID series and number",
        "card.series_note": "mID and physical ID card data are different - they are two separate documents.",
        "card.copy": "Copy",
        "card.expiry": "Expiry date",
        "card.issue_date": "Issue date",
        "card.father_name": "Father's first name",
        "card.mother_name": "Mother's first name",
        "card.additional": "Your additional data",
        "card.family_name": "Birth surname",
        "card.gender": "Gender",
        "card.father_family": "Father's birth surname",
        "card.mother_family": "Mother's birth surname",
        "card.birthplace": "Place of birth",
        "card.birth_country": "Country of birth",
        "card.address": "Permanent residence address",
        "card.address_date": "Permanent residence registration date",
        "card.last_update": "Last update",
        "card.update_btn": "Update",

        // --- moreid.html ---
        "moreid.title": "ID Card Data",
        "moreid.series": "Series and number",
        "moreid.status": "Status",
        "moreid.issued": "Issued",
        "moreid.authority": "Issuing authority",
        "moreid.expiry": "Expiry date",
        "moreid.issue_date": "Issue date",
        "moreid.last_update": "Last update",
        "moreid.update_btn": "Update",
        "moreid.change_pin": "Change personal signature PIN",

        // --- pesel_status.html ---
        "pesel.title": "Reserve PESEL",
        "pesel.reserved_title": "Your PESEL is reserved",
        "pesel.reserved_desc": "Now no one can use it without your knowledge.",
        "pesel.reserve_btn": "Reserve PESEL",
        "pesel.unreserve_btn": "Cancel reservation",
        "pesel.info": "After each cancellation of the PESEL reservation, you cannot use the service for 30 minutes.",
        "pesel.history": "History",
        "pesel.who_checked": "Who checked your PESEL",
        "pesel.last_check": "Last verification 01.08.2025",
        "pesel.your_changes": "Your changes",
        "pesel.last_change": "Last change 01.08.2025",

        // --- shortcuts.html ---
        "shortcuts.title": "Other shortcuts",
        "shortcuts.back": "mID Card",
        "shortcuts.fines": "Fines",
        "shortcuts.elections": "Elections",
        "shortcuts.remove_doc": "Remove document",

        // --- search.html ---
        "search.title": "Search",
        "search.input": "Type search phrase",
        "search.empty": "No results.",
    },

    ua: {
        // --- Bottom bar ---
        "nav.documents": "Документи",
        "nav.services": "Послуги",
        "nav.qr": "QR-код",
        "nav.more": "Більше",
        "nav.search": "Пошук",

        // --- Home ---
        "home.title": "Документи",
        "home.customize": "Налаштувати",
        "home.add": "Додати",
        "home.mdowod": "mПосвідчення",

        // --- Services ---
        "services.title": "Послуги",
        "services.search": "Пошук",
        "services.no_results": "Немає результатів",
        "services.favorites": "Улюблені",
        "services.customize": "Налаштувати",
        "services.data_protection": "Захист даних",
        "services.health": "Здоров'я",
        "services.official": "Офіційні справи",
        "services.driver": "Водій і транспорт",
        "services.payments": "Платежі та податки",
        "services.environment": "Довкілля",
        "services.travel": "Подорож",
        "services.sign_doc": "Підписати документ",
        "services.safe_web": "Безпека в мережі",
        "services.flood": "Попередження про повінь",
        "services.pesel_reserve": "Зарезервувати PESEL",
        "services.company": "Компанія",
        "services.penalty_points": "Штрафні бали",
        "services.tickets": "Штрафи",
        "services.check_id": "Перевірити посвідчення",
        "services.check_pesel": "Перевірити PESEL",
        "services.prescriptions": "Рецепти",
        "services.mojeikp": "мійIKP",
        "services.handle_case": "Вирішити справу",
        "services.your_cases": "Ваші справи",
        "services.collect_id": "Отримати посвідчення",
        "services.ezus": "Е-візит до ZUS",
        "services.elections": "Вибори",
        "services.driver_license": "Права водія",
        "services.vehicle_history": "Історія авто",
        "services.epayments": "еПлатежі",
        "services.env_violation": "Екологічне порушення",
        "services.air_quality": "Якість повітря",
        "services.safe_bus": "Безпечний автобус",
        "services.bilkom": "Bilkom",
        "services.mka_card": "Картка MKA",
        "services.abroad": "Поляк за кордоном",
        "services.error_title": "Щось пішло не так...",
        "services.error_desc": "Схоже, виникла помилка з'єднання з мережею. Спробуйте пізніше.",
        "services.error_btn": "Зрозуміло",

        // --- QR ---
        "qr.title": "QR-код",
        "qr.show": "Показати QR-код",
        "qr.show_desc": "Згенеруйте код для установи або іншої особи",
        "qr.scan": "Сканувати QR-код",
        "qr.scan_desc": "Скануйте код іншої особи або установи",

        // --- More ---
        "more.title": "Більше",
        "more.your_data": "Ваші дані",
        "more.logout": "Вийти",
        "more.residence": "Дані реєстрації",
        "more.passport_data": "Дані паспорту",
        "more.change_password": "Змінити пароль",
        "more.biometric": "Біометричний вхід",
        "more.notifications": "Сповіщення",
        "more.appearance": "Зовнішній вигляд",
        "more.language": "Мова застосунку",
        "more.certificates": "Видані сертифікати",
        "more.remaining": "Інше",
        "more.activity_history": "Історія активності",
        "more.about": "Про застосунок",
        "more.support": "Технічна підтримка",
        "more.rate": "Оцінити застосунок",
        "more.vote_idea": "Проголосувати за ідею",
        "more.deactivate": "Деактивувати застосунок",

        // --- Logout modal ---
        "logout.question": "Ви впевнені, що хочете вийти?",
        "logout.confirm": "Так, вийти",
        "logout.cancel": "Ні, скасувати",

        // --- Appearance ---
        "appearance.title": "Зовнішній вигляд",
        "appearance.subtitle": "Вигляд застосунку",
        "appearance.desc": "Оберіть колірну тему застосунку mObywatel",
        "appearance.light": "Світла тема",
        "appearance.dark": "Темна тема",
        "appearance.auto": "Автоматично",
        "appearance.auto_desc": "Відповідає темі пристрою",

        // --- Language ---
        "language.title": "Мова застосунку",
        "language.header": "Оберіть мову",
        "language.header2": "застосунку",
        "language.desc": "Змінити бажану мову відображення інтерфейсу.",
        "language.pl": "Польська",
        "language.pl_desc": "Мова за замовчуванням",
        "language.en": "Англійська",
        "language.en_desc": "English language",
        "language.ua": "Українська",
        "language.ua_desc": "Українська мова",
        "language.loading": "Зміна мови...",

        // --- Activity History ---
        "activity.title": "Історія активності",
        "activity.header": "Історія",
        "activity.header2": "активності",
        "activity.desc": "Огляд останніх операцій у застосунку mObywatel.",
        "activity.today": "Сьогодні",
        "activity.yesterday": "Вчора",
        "activity.login": "Вхід у застосунок",
        "activity.qr_show": "Відображення QR-коду",
        "activity.id_check": "Перевірка посвідчення",
        "activity.password_change": "Зміна пароля",
        "activity.login2": "Вхід у застосунок",

        // --- Residence Data ---
        "residence.title": "Дані реєстрації",
        "residence.header": "Дані",
        "residence.header2": "реєстрації",
        "residence.desc": "Ваші актуальні дані реєстрації з реєстру PESEL.",
        "residence.permanent": "Постійна реєстрація",
        "residence.temporary": "Тимчасова реєстрація",
        "residence.street": "Вулиця",
        "residence.city": "Місто",
        "residence.postal": "Поштовий індекс",
        "residence.commune": "Громада",
        "residence.district": "Район",
        "residence.province": "Воєводство",
        "residence.country": "Країна",
        "residence.since": "Зареєстровано з",
        "residence.no_data": "Немає даних",

        // --- Change Password ---
        "password.title": "Змінити пароль",
        "password.header": "Змінити",
        "password.header2": "пароль",
        "password.desc": "Оновіть пароль для свого облікового запису mObywatel.",
        "password.current": "Поточний пароль",
        "password.new": "Новий пароль",
        "password.confirm": "Підтвердіть новий пароль",
        "password.btn": "Змінити пароль",
        "password.success": "Пароль змінено",
        "password.error_match": "Паролі не збігаються",
        "password.error_wrong": "Поточний пароль невірний",
        "password.error_short": "Пароль має містити щонайменше 6 символів",

        // --- Search ---
        "search.placeholder": "Пошук...",
        "search.no_results": "Немає результатів для",

        // --- QR Show ---
        "qr_show.title": "Показати QR-код",
        "qr_show.back": "QR-код",
        "qr_show.instructions": "Покажіть цей код для перевірки",
        "qr_show.expires": "Код діє ще",
        "qr_show.seconds": "с",

        // --- QR Scan ---
        "qr_scan.title": "Сканувати QR-код",
        "qr_scan.back": "QR-код",
        "qr_scan.instructions": "Спрямуйте камеру на QR-код",

        // --- mDowód (card.html) ---
        "card.back": "Назад",
        "card.title": "мПосвідчення",
        "card.firstname": "Ім'я (імена)",
        "card.surname": "Прізвище",
        "card.citizenship": "Громадянство",
        "card.birthdate": "Дата народження",
        "card.pesel": "Номер PESEL",
        "card.valid": "Документ дійсний",
        "card.confirm": "Підтвердити дані",
        "card.id_data": "Дані посвідчення",
        "card.reserve_pesel": "Зарезервувати PESEL",
        "card.other_shortcuts": "Інші ярлики",
        "card.series": "Серія і номер мПосвідчення",
        "card.series_note": "Дані мПосвідчення та фізичного посвідчення різні — це два окремі документи.",
        "card.copy": "Копіювати",
        "card.expiry": "Термін дії",
        "card.issue_date": "Дата видачі",
        "card.father_name": "Ім'я батька",
        "card.mother_name": "Ім'я матері",
        "card.additional": "Ваші додаткові дані",
        "card.family_name": "Дівоче прізвище",
        "card.gender": "Стать",
        "card.father_family": "Дівоче прізвище батька",
        "card.mother_family": "Дівоче прізвище матері",
        "card.birthplace": "Місце народження",
        "card.birth_country": "Країна народження",
        "card.address": "Адреса постійного проживання",
        "card.address_date": "Дата реєстрації постійного проживання",
        "card.last_update": "Останнє оновлення",
        "card.update_btn": "Оновити",

        // --- moreid.html ---
        "moreid.title": "Дані посвідчення",
        "moreid.series": "Серія і номер",
        "moreid.status": "Статус",
        "moreid.issued": "Видано",
        "moreid.authority": "Орган видачі",
        "moreid.expiry": "Термін дії",
        "moreid.issue_date": "Дата видачі",
        "moreid.last_update": "Останнє оновлення",
        "moreid.update_btn": "Оновити",
        "moreid.change_pin": "Змінити PIN особистого підпису",

        // --- pesel_status.html ---
        "pesel.title": "Зарезервувати PESEL",
        "pesel.reserved_title": "Ваш PESEL зарезервовано",
        "pesel.reserved_desc": "Тепер ніхто не зможе ним скористатися без вашого відома.",
        "pesel.reserve_btn": "Зарезервувати PESEL",
        "pesel.unreserve_btn": "Скасувати резервування",
        "pesel.info": "Після кожного скасування резервування PESEL ви не можете користуватися послугою протягом 30 хвилин.",
        "pesel.history": "Історія",
        "pesel.who_checked": "Хто перевіряв ваш PESEL",
        "pesel.last_check": "Остання перевірка 01.08.2025",
        "pesel.your_changes": "Ваші зміни",
        "pesel.last_change": "Остання зміна 01.08.2025",

        // --- shortcuts.html ---
        "shortcuts.title": "Інші ярлики",
        "shortcuts.back": "мПосвідчення",
        "shortcuts.fines": "Штрафи",
        "shortcuts.elections": "Вибори",
        "shortcuts.remove_doc": "Видалити документ",

        // --- search.html ---
        "search.title": "Пошук",
        "search.input": "Введіть пошуковий запит",
        "search.empty": "Немає результатів.",
    }
};

/**
 * Get current language from localStorage (default: 'pl')
 */
function getCurrentLang() {
    return localStorage.getItem('app_language') || 'pl';
}

/**
 * Translate a key in the current language
 */
function t(key) {
    const lang = getCurrentLang();
    const dict = TRANSLATIONS[lang] || TRANSLATIONS['pl'];
    return dict[key] || TRANSLATIONS['pl'][key] || key;
}

/**
 * Apply translations to all elements with data-i18n attribute
 */
function applyTranslations() {
    const lang = getCurrentLang();
    const dict = TRANSLATIONS[lang] || TRANSLATIONS['pl'];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = dict[key] || TRANSLATIONS['pl'][key];
        if (translation !== undefined) {
            if (el.tagName === 'INPUT' && (el.type === 'text' || el.type === 'search' || el.type === 'password')) {
                el.placeholder = translation;
            } else {
                el.textContent = translation;
            }
        }
    });

    // Update html lang attribute
    const langMap = { pl: 'pl', en: 'en', ua: 'uk' };
    document.documentElement.lang = langMap[lang] || 'pl';
}

// Run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTranslations);
} else {
    applyTranslations();
}
