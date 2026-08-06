(function() {
    var SUPABASE_URL = 'https://itfwhcyjqyqgnjtpvsel.supabase.co';
    var SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0ZndoY3lqcXlxZ25qdHB2c2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2NTg2OTMsImV4cCI6MjA5NjIzNDY5M30.cw3h2Vg0ADQ_AvSXE_5IkME0BU4-IHsJujOhdQSSAos';
    var supabase = null;
    var CLOUD_NAME = 'duas0hajc';
    var UPLOAD_PRESET = 'mvpobywatel';

    var supabaseLoaded = false;
    function ensureSupabase(callback) {
        if (supabase) { callback(supabase); return; }
        if (window.supabase) {
            try { supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON); supabaseLoaded = true; callback(supabase); } catch(e) { console.error(e); callback(null); }
            return;
        }
        var done = false;
        function finish(client) {
            if (done) return;
            done = true;
            clearTimeout(timeout);
            callback(client);
        }
        var timeout = setTimeout(function() { finish(null); }, 8000);
        var s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
        s.onload = function() {
            try { supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON); supabaseLoaded = true; finish(supabase); } catch(e) { console.error(e); finish(null); }
        };
        s.onerror = function() { finish(null); };
        document.head.appendChild(s);
    }

    var form = document.getElementById('dataGenerator');
    var fileInput = document.getElementById('fileInput');
    var imageURLInput = document.getElementById('image');
    var fileLabel = document.getElementById('fileLabel');
    var generateButton = document.getElementById('generateButton');
    var statusMessage = document.getElementById('statusMessage');
    var statusMessageAutofill = document.getElementById('statusMessageAutofill');
    var imagePreview = document.getElementById('imagePreview');
    var imagePreviewContainer = document.getElementById('imagePreviewContainer');
    var autofillButton = document.getElementById('autofillButton');
    var peselInput = document.getElementById('pesel');
    var issueDateInput = document.getElementById('issue_date');
    var expiryDateInput = document.getElementById('expiry_date');
    var homeDateInput = document.getElementById('home_date');
    var birthdayInput = document.getElementById('birthday');
    var manualDateFields = [issueDateInput, expiryDateInput, homeDateInput];

    function formatDateForDisplay(date) {
        if (!(date instanceof Date) || isNaN(date)) return '';
        var day = String(date.getDate()).padStart(2, '0');
        var month = String(date.getMonth() + 1).padStart(2, '0');
        var year = date.getFullYear();
        return day + '.' + month + '.' + year;
    }

    function formatDateForURL(dateString) {
        if (!dateString) return '';
        var parts = dateString.split('-');
        return parts[2] + '.' + parts[1] + '.' + parts[0];
    }

    function generateRandomFiveDigits() {
        return Math.floor(10000 + Math.random() * 90000);
    }

    autofillButton.addEventListener('click', function() {
        var birthDateValue = birthdayInput.value;
        statusMessageAutofill.style.color = 'var(--error)';

        if (!birthDateValue) {
            statusMessageAutofill.textContent = 'Najpierw wybierz Datę Urodzenia z kalendarza!';
            return;
        }

        var birthDate = new Date(birthDateValue);
        var currentYear = new Date().getFullYear();
        var birthYear = birthDate.getFullYear();

        var randMonth = Math.floor(Math.random() * 12);
        var randDay = Math.floor(Math.random() * 28) + 1;
        var issueDate = new Date(currentYear - 2, randMonth, randDay);
        var expiryDate = new Date(currentYear + 3, randMonth, randDay);
        var homeDate = new Date(birthDate.getTime());
        homeDate.setDate(homeDate.getDate() + 21);

        var birthMonth = birthDate.getMonth() + 1;
        var birthDay = birthDate.getDate();
        var birthYearMod = birthYear % 100;

        var peselMonth = birthMonth;
        if (birthYear >= 2000) peselMonth += 20;

        var sexVal = document.getElementById('sex').value;
        var sexLower = (sexVal || '').toString().toLowerCase();
        var later = '0295';
        if (sexLower.indexOf('kob') !== -1) later = '0382';

        var dayStr = String(birthDay);
        var monthStr = String(peselMonth);
        if (birthDay < 10) dayStr = '0' + dayStr;
        if (peselMonth < 10) monthStr = '0' + monthStr;

        var generatedPesel = String(birthYearMod).padStart(2, '0') + monthStr + dayStr + later + '7';
        peselInput.value = generatedPesel.substring(0, 11);

        document.getElementById('mdow_series').value = 'MWYC ' + generateRandomFiveDigits();

        issueDateInput.value = formatDateForDisplay(issueDate);
        expiryDateInput.value = formatDateForDisplay(expiryDate);
        homeDateInput.value = formatDateForDisplay(homeDate);

        statusMessageAutofill.style.color = 'var(--success)';
        statusMessageAutofill.textContent = 'Daty i numery wygenerowane!';
    });

    function validateDateFormat(input) {
        var datePattern = new RegExp(input.pattern);
        if (!input.value) return !input.required;
        if (input.value.length !== 10 || !datePattern.test(input.value)) return false;
        return true;
    }

    function validatePeselFormat(input) {
        var peselPattern = new RegExp(input.pattern);
        if (!input.value) return !input.required;
        if (input.value.length !== 11 || !peselPattern.test(input.value)) return false;
        return true;
    }

    fileInput.addEventListener('change', function() {
        statusMessage.textContent = '';
        var file = this.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block';
                imagePreviewContainer.classList.add('active');
                fileLabel.style.display = 'none';
            };
            reader.readAsDataURL(file);
            imageURLInput.value = '';
            statusMessage.textContent = 'Zdjęcie załadowane!';
            statusMessage.style.color = 'var(--text-primary)';
        } else {
            fileLabel.style.display = 'flex';
            imagePreview.style.display = 'none';
            imagePreviewContainer.classList.remove('active');
            imageURLInput.value = '';
            statusMessage.textContent = '';
        }
    });

    async function uploadToCloudinary(file) {
        statusMessage.style.color = 'var(--text-primary)';
        statusMessage.textContent = 'Ładowanie zdjęcia...';
        generateButton.disabled = true;

        var formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', UPLOAD_PRESET);

        try {
            var response = await fetch('https://api.cloudinary.com/v1_1/' + CLOUD_NAME + '/image/upload', {
                method: 'POST',
                body: formData
            });
            var data = await response.json();
            if (data.url) {
                statusMessage.style.color = 'var(--success)';
                statusMessage.textContent = 'Zdjęcie załadowane!';
                return data.url;
            } else {
                statusMessage.style.color = 'var(--error)';
                statusMessage.textContent = 'Błąd: ' + (data.error && data.error.message ? data.error.message : 'Nieznany błąd.');
                return null;
            }
        } catch (error) {
            statusMessage.style.color = 'var(--error)';
            statusMessage.textContent = 'Błąd sieci. Sprawdź połączenie.';
            return null;
        } finally {
            generateButton.disabled = false;
        }
    }

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        for (var i = 0; i < manualDateFields.length; i++) {
            if (!validateDateFormat(manualDateFields[i])) {
                statusMessage.style.color = 'var(--error)';
                statusMessage.textContent = 'Pole ' + manualDateFields[i].name.toUpperCase() + ' musi być w formacie DD.MM.RRRR!';
                manualDateFields[i].focus();
                return;
            }
        }

        if (!validatePeselFormat(peselInput)) {
            statusMessage.style.color = 'var(--error)';
            statusMessage.textContent = 'Numer PESEL musi zawierać 11 cyfr!';
            peselInput.focus();
            return;
        }

        if (!fileInput.files || fileInput.files.length === 0) {
            statusMessage.style.color = 'var(--error)';
            statusMessage.textContent = 'Wybierz plik zdjęcia!';
            return;
        }

        var accountPassword = document.getElementById('account_password').value;
        if (!accountPassword || accountPassword.length < 1) {
            statusMessage.style.color = 'var(--error)';
            statusMessage.textContent = 'Wpisz hasło dla tego konta!';
            document.getElementById('account_password').focus();
            return;
        }

        if (imageURLInput.value === '') {
            var imageUrl = await uploadToCloudinary(fileInput.files[0]);
            if (!imageUrl) return;
            imageURLInput.value = imageUrl;
        }

        var sexVal = document.getElementById('sex').value;
        var sexLower = (sexVal || '').toString().toLowerCase();
        var sexForDB = 'm';
        if (sexLower.indexOf('kob') !== -1 || sexLower.indexOf('k') === 0) sexForDB = 'k';

        var accountData = {
            password: accountPassword,
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            sex: sexForDB,
            birthday: formatDateForURL(document.getElementById('birthday').value),
            pesel: document.getElementById('pesel').value,
            mdow_series: document.getElementById('mdow_series').value,
            issue_date: document.getElementById('issue_date').value,
            expiry_date: document.getElementById('expiry_date').value,
            father_name: document.getElementById('father_name').value,
            mother_name: document.getElementById('mother_name').value,
            nationality: document.getElementById('nationality').value,
            birth_place: document.getElementById('birthPlace').value,
            birth_country: document.getElementById('birth_country').value,
            adress1: document.getElementById('adress1').value,
            adress2: document.getElementById('adress2').value,
            city: document.getElementById('city').value,
            home_date: document.getElementById('home_date').value,
            family_name: document.getElementById('family_name').value,
            father_family_name: document.getElementById('father_family_name').value,
            mother_family_name: document.getElementById('mother_family_name').value,
            image: imageURLInput.value,
            version: 2
        };

        generateButton.disabled = true;
        statusMessage.style.color = 'var(--text-primary)';
        statusMessage.textContent = 'Ładowanie bazy danych...';

        ensureSupabase(function(db) {
            if (!db) {
                statusMessage.style.color = 'var(--error)';
                statusMessage.textContent = 'Błąd: Nie można połączyć z bazą danych.';
                generateButton.disabled = false;
                return;
            }

            statusMessage.textContent = 'Zapisywanie konta...';

            db.from('accounts').insert([accountData]).select('id').single().then(function(result) {
                if (result.error) {
                    statusMessage.style.color = 'var(--error)';
                    statusMessage.textContent = 'BŁĄD: ' + result.error.message;
                    generateButton.disabled = false;
                    return;
                }
                statusMessage.style.color = 'var(--success)';
                statusMessage.textContent = 'Konto utworzone! Przekierowywanie...';
                window.location.href = 'id.html';
            }).catch(function(err) {
                statusMessage.style.color = 'var(--error)';
                statusMessage.textContent = 'Błąd sieci: ' + err.message;
                generateButton.disabled = false;
            });
        });
    });
})();
