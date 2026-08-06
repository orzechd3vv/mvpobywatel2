        const SUPABASE_URL = 'https://itfwhcyjqyqgnjtpvsel.supabase.co';
        const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0ZndoY3lqcXlxZ25qdHB2c2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2NTg2OTMsImV4cCI6MjA5NjIzNDY5M30.cw3h2Vg0ADQ_AvSXE_5IkME0BU4-IHsJujOhdQSSAos';
        let supabase = null;
        function getSupabase() {
            if (supabase) return supabase;
            try { supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON); } catch(e) { console.error('Supabase init failed:', e); }
            return supabase;
        }

        const CLOUD_NAME = 'duas0hajc';
        const UPLOAD_PRESET = 'mvpobywatel';

        const form = document.getElementById('dataGenerator');
        const fileInput = document.getElementById('fileInput');
        const imageURLInput = document.getElementById('image');
        const fileLabel = document.getElementById('fileLabel');
        const generateButton = document.getElementById('generateButton');
        const statusMessage = document.getElementById('statusMessage');
        const statusMessageAutofill = document.getElementById('statusMessageAutofill');
        const imagePreview = document.getElementById('imagePreview');
        const imagePreviewContainer = document.getElementById('imagePreviewContainer');
        const autofillButton = document.getElementById('autofillButton');

        const peselInput = document.getElementById('pesel');
        const issueDateInput = document.getElementById('issue_date');
        const expiryDateInput = document.getElementById('expiry_date');
        const homeDateInput = document.getElementById('home_date');
        const birthdayInput = document.getElementById('birthday');

        const manualDateFields = [
            issueDateInput,
            expiryDateInput,
            homeDateInput,
        ];

        function formatDateForDisplay(date) {
            if (!(date instanceof Date) || isNaN(date)) return '';
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}.${month}.${year}`;
        }

        function formatDateForURL(dateString) {
            if (!dateString) return '';
            const parts = dateString.split('-');
            return `${parts[2]}.${parts[1]}.${parts[0]}`;
        }

        function generateRandomFiveDigits() {
            return Math.floor(10000 + Math.random() * 90000);
        }

        autofillButton.addEventListener('click', function () {
            const birthDateValue = birthdayInput.value;
            statusMessageAutofill.style.color = 'var(--error)';

            if (!birthDateValue) {
                statusMessageAutofill.textContent = 'Najpierw wybierz Datę Urodzenia z kalendarza!';
                return;
            }

            const birthDate = new Date(birthDateValue);
            const currentYear = new Date().getFullYear();
            const birthYear = birthDate.getFullYear();
            const isAdult = currentYear - birthYear >= 18;

            const randMonth = Math.floor(Math.random() * 12);
            const randDay = Math.floor(Math.random() * 28) + 1;
            const issueDate = new Date(currentYear - 2, randMonth, randDay);
            const expiryDate = new Date(currentYear + 3, randMonth, randDay);

            const homeDate = new Date(birthDate.getTime());
            homeDate.setDate(homeDate.getDate() + 21);

            const birthMonth = birthDate.getMonth() + 1;
            const birthDay = birthDate.getDate();
            const birthYearMod = birthYear % 100;

            let peselMonth = birthMonth;
            if (birthYear >= 2000) {
                peselMonth += 20;
            }

            const sexVal = document.getElementById('sex').value;
            const sexLower = (sexVal || "").toString().toLowerCase();
            let later = "0295";
            if (sexLower.indexOf('kob') !== -1) later = "0382";

            let dayStr = String(birthDay);
            let monthForPesel = peselMonth;
            if (birthDay < 10) dayStr = "0" + dayStr;
            let monthStr = String(monthForPesel);
            if (monthForPesel < 10) monthStr = "0" + monthStr;

            const generatedPesel = String(birthYearMod).padStart(2, '0') + monthStr + dayStr + later + "7";
            peselInput.value = generatedPesel.substring(0, 11);

            document.getElementById('mdow_series').value = `MWYC ${generateRandomFiveDigits()}`;

            issueDateInput.value = formatDateForDisplay(issueDate);
            expiryDateInput.value = formatDateForDisplay(expiryDate);
            homeDateInput.value = formatDateForDisplay(homeDate);

            statusMessageAutofill.style.color = 'var(--success)';
            statusMessageAutofill.textContent = 'Daty i numery wygenerowane!';
        });

        function validateDateFormat(input) {
            const datePattern = new RegExp(input.pattern);
            if (!input.value) return !input.required;

            if (input.value.length !== 10 || !datePattern.test(input.value)) {
                return false;
            }
            return true;
        }

        function validatePeselFormat(input) {
            const peselPattern = new RegExp(input.pattern);
            if (!input.value) return !input.required;

            if (input.value.length !== 11 || !peselPattern.test(input.value)) {
                return false;
            }
            return true;
        }

        fileInput.addEventListener('change', function () {
            statusMessage.textContent = '';

            const file = this.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
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
            if (CLOUD_NAME.startsWith('TWÓJ') || UPLOAD_PRESET.startsWith('TWÓJ')) {
                statusMessage.style.color = 'var(--error)';
                statusMessage.textContent = 'BŁĄD: Zmień CLOUD_NAME i UPLOAD_PRESET w kodzie JS!';
                return null;
            }

            statusMessage.style.color = 'var(--text-primary)';
            statusMessage.textContent = 'Ładowanie zdjęcia...';
            generateButton.disabled = true;

            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', UPLOAD_PRESET);

            try {
                const response = await fetch(`https://api.cloudinary.com/v1_1/duas0hajc/image/upload`, {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (data.url) {
                    statusMessage.style.color = 'var(--success)';
                    statusMessage.textContent = 'Zdjęcie załadowane!';
                    return data.url;
                } else {
                    statusMessage.style.color = 'var(--error)';
                    statusMessage.textContent = 'Błąd: ' + (data.error && data.error.message ? data.error.message : 'Nieznany błąd.');
                    console.error('Błąd Cloudinary:', data);
                    return null;
                }
            } catch (error) {
                statusMessage.style.color = 'var(--error)';
                statusMessage.textContent = 'Błąd sieci. Sprawdź połączenie.';
                console.error('Błąd Fetch:', error);
                return null;
            } finally {
                generateButton.disabled = false;
            }
        }

        form.addEventListener('submit', async function (event) {
            event.preventDefault();

            for (const input of manualDateFields) {
                if (!validateDateFormat(input)) {
                    statusMessage.style.color = 'var(--error)';
                    statusMessage.textContent = `Pole ${input.name.toUpperCase()} musi być w formacie DD.MM.RRRR!`;
                    input.focus();
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

            const accountPassword = document.getElementById('account_password').value;
            if (!accountPassword || accountPassword.length < 1) {
                statusMessage.style.color = 'var(--error)';
                statusMessage.textContent = 'Wpisz hasło dla tego konta!';
                document.getElementById('account_password').focus();
                return;
            }

            if (imageURLInput.value === '') {
                const imageUrl = await uploadToCloudinary(fileInput.files[0]);

                if (!imageUrl) {
                    return;
                }

                imageURLInput.value = imageUrl;
            }

            const sexVal = document.getElementById('sex').value;
            const sexLower = (sexVal || "").toString().toLowerCase();
            let sexForDB = 'm';
            if (sexLower.indexOf('kob') !== -1 || sexLower.indexOf('k') === 0) {
                sexForDB = 'k';
            }

            const accountData = {
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
                image: imageURLInput.value
            };

            generateButton.disabled = true;
            statusMessage.style.color = 'var(--text-primary)';
            statusMessage.textContent = 'Zapisywanie konta...';

            const db = getSupabase();
            if (!db) {
                statusMessage.style.color = 'var(--error)';
                statusMessage.textContent = 'Błąd: Brak połączenia z bazą danych. Odśwież stronę.';
                generateButton.disabled = false;
                return;
            }

            try {
                const { data, error } = await db
                    .from('accounts')
                    .insert([accountData])
                    .select('id')
                    .single();

                if (error) {
                    statusMessage.style.color = 'var(--error)';
                    statusMessage.textContent = 'BŁĄD: ' + error.message;
                    generateButton.disabled = false;
                    return;
                }

                statusMessage.style.color = 'var(--success)';
                statusMessage.textContent = 'Konto utworzone! Przekierowywanie...';

                const targetUrl = `id.html`;
                window.location.href = targetUrl;

            } catch (err) {
                statusMessage.style.color = 'var(--error)';
                statusMessage.textContent = 'Błąd sieci: ' + err.message;
                generateButton.disabled = false;
            }
        });
