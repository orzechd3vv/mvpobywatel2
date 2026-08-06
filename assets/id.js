// =========================================================
// MVP Obywatel - Login z walidacją hasła z Supabase
// =========================================================

// Pobierz parametry z URL
var params = new URLSearchParams(window.location.search);
var accountId = params.get('account_id');

// Powitanie w zależności od godziny
var welcome = "Dzień dobry!";
var date = new Date();
if (date.getHours() >= 18){
    welcome = "Dobry wieczór!";
}
document.querySelector(".welcome").innerHTML = welcome;

// Elementy UI
var loginButton = document.querySelector(".login");
var loginError = document.getElementById("loginError");

// Obsługa kliknięcia przycisku login — teraz z walidacją hasła
loginButton.addEventListener('click', async () => {
    if (!original || original.length === 0) {
        showError("Wpisz hasło, aby się zalogować.");
        return;
    }

    // Pokaż stan ładowania
    loginButton.textContent = "Logowanie...";
    loginButton.style.opacity = "0.6";
    loginButton.style.pointerEvents = "none";
    hideError();

    try {
        // Pobierz konto z Supabase po wpisanym haśle
        const { data, error } = await supabaseClient
            .from('accounts')
            .select('*')
            .eq('password', original)
            .limit(1);

        if (error || !data || data.length === 0) {
            showError("Nieprawidłowe hasło. Spróbuj ponownie.");
            resetLoginButton();
            return;
        }

        const userAccount = data[0];

        // Hasło poprawne! Zbuduj URL z danymi konta
        const nameMap = {
            family_name: "familyName",
            father_family_name: "fathersFamilyName",
            mother_family_name: "mothersFamilyName",
            birth_country: "countryOfBirth",
            birth_place: "birthPlace"
        };

        const fields = [
            'name', 'surname', 'sex', 'birthday', 'pesel', 'mdow_series',
            'issue_date', 'expiry_date', 'father_name', 'mother_name',
            'nationality', 'birth_place', 'birth_country', 'adress1', 'adress2',
            'city', 'home_date', 'family_name', 'father_family_name',
            'mother_family_name', 'image'
        ];

        const urlParams = [];
        for (const field of fields) {
            const value = userAccount[field] || '';
            const urlKey = nameMap[field] || field;
            urlParams.push(`${urlKey}=${encodeURIComponent(value)}`);
        }

        // Przekieruj do home.html z wszystkimi danymi
        location.href = 'home.html?' + urlParams.join('&');

    } catch (err) {
        showError("Błąd połączenia z bazą danych. Spróbuj ponownie.");
        resetLoginButton();
    }
});

function showError(message) {
    loginError.textContent = message;
    loginError.style.display = "block";
}

function hideError() {
    loginError.style.display = "none";
}

function resetLoginButton() {
    loginButton.textContent = "Zaloguj się";
    loginButton.style.opacity = "1";
    loginButton.style.pointerEvents = "auto";
}

// Obsługa Enter w polu hasła
var input = document.querySelector(".password_input");
input.addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
        document.activeElement.blur();
        loginButton.click();
    }
});

// Logika maskowania hasła
var dot = "•";
var original = "";
var eye = document.querySelector(".eye");

input.addEventListener("input", () => {
    var value = input.value.toString();
    var char = value.substring(value.length - 1);

    if (value.length < original.length){
        // Usunięto znak
        original = original.substring(0, original.length - 1);
    } else {
        // Dodano nowy znak
        original = original + char;
    }

    if (!eye.classList.contains("eye_close")){
        var dots = "";
        for (var i = 0; i < value.length - 1; i++){
            dots += dot;
        }
        input.value = dots + char;

        delay(3000).then(() => {
            if (input.value.length !== 0){
                input.value = input.value.substring(0, input.value.length - 1) + dot;
            }
        });
    }
});

// Funkcja delay
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

// Przełącznik oka
eye.addEventListener('click', () => {
    var classlist = eye.classList;
    if (classlist.contains("eye_close")){
        classlist.remove("eye_close");
        var dots = "";
        for (var i = 0; i < input.value.length; i++){
            dots += dot;
        }
        input.value = dots;
    } else {
        classlist.add("eye_close");
        input.value = original;
    }
});
