const translations = {
    en: {
        "hero-badge": "Polymarket Tool Coming Soon",
        "hero-title": "You will see predictive markets <span class=\"highlight\">differently</span>",
        "hero-subtitle": "Advanced software to operate with precision on Polymarket. Forecast outcomes, analyze trends, and engage with the future of predictive platforms with an analytical edge.",
        "btn-primary": "Request Access",
        "text-coming-soon": "More news coming soon",
        "stat-1-label": "Prediction Accuracy",
        "stat-2-label": "Markets Analyzed",
        "feature-1-title": "Predictive Intelligence",
        "feature-1-desc": "Harness advanced analytics to evaluate probabilities and make data-driven decisions on global events.",
        "feature-2-title": "Real-Time Execution",
        "feature-2-desc": "Connect directly to Polymarket and execute your predictions with minimal latency and high reliability.",
        "feature-3-title": "Analytical Edge",
        "feature-3-desc": "Access to historical data, trend analysis, and volume metrics to stay ahead of the market sentiment.",
        "footer-text": "&copy; 2026 Geeks Trader. All rights reserved. Not affiliated with Polymarket.",
        "modal-title": "Request Access",
        "modal-name": "Name",
        "modal-email": "Email",
        "modal-phone": "Phone",
        "modal-submit": "Submit Request"
    },
    pt: {
        "hero-badge": "Ferramenta para Polymarket Em Breve",
        "hero-title": "Você vai ver os mercados preditivos de <span class=\"highlight\">outro jeito</span>",
        "hero-subtitle": "Software avançado para operar com precisão na Polymarket. Preveja resultados, analise tendências e interaja com o futuro das plataformas preditivas com uma vantagem analítica.",
        "btn-primary": "Solicitar Acesso",
        "text-coming-soon": "Em breve mais novidades",
        "stat-1-label": "Precisão da Previsão",
        "stat-2-label": "Mercados Analisados",
        "feature-1-title": "Inteligência Preditiva",
        "feature-1-desc": "Aproveite análises avançadas para avaliar probabilidades e tomar decisões baseadas em dados sobre eventos globais.",
        "feature-2-title": "Execução em Tempo Real",
        "feature-2-desc": "Conecte-se diretamente à Polymarket e execute suas previsões com latência mínima e alta confiabilidade.",
        "feature-3-title": "Vantagem Analítica",
        "feature-3-desc": "Acesso a dados históricos, análise de tendências e métricas de volume para ficar à frente do sentimento do mercado.",
        "footer-text": "&copy; 2026 Geeks Trader. Todos os direitos reservados. Não afiliado à Polymarket.",
        "modal-title": "Solicitar Acesso",
        "modal-name": "Nome",
        "modal-email": "E-mail",
        "modal-phone": "Telefone",
        "modal-submit": "Enviar Solicitação"
    },
    es: {
        "hero-badge": "Herramienta para Polymarket Próximamente",
        "hero-title": "Verás los mercados predictivos de <span class=\"highlight\">otra manera</span>",
        "hero-subtitle": "Software avanzado para operar con precisión en Polymarket. Pronostica resultados, analiza tendencias y participa en el futuro de las plataformas predictivas con una ventaja analítica.",
        "btn-primary": "Solicitar Acceso",
        "text-coming-soon": "Pronto más novedades",
        "stat-1-label": "Precisión de Predicción",
        "stat-2-label": "Mercados Analizados",
        "feature-1-title": "Inteligencia Predictiva",
        "feature-1-desc": "Aprovecha análisis avanzados para evaluar probabilidades y tomar decisiones basadas en datos sobre eventos globales.",
        "feature-2-title": "Ejecución en Tiempo Real",
        "feature-2-desc": "Conéctate directamente a Polymarket y ejecuta tus predicciones con latencia mínima y alta confiabilidad.",
        "feature-3-title": "Ventaja Analítica",
        "feature-3-desc": "Acceso a datos históricos, análisis de tendencias y métricas de volumen para mantenerte actualizado con el sentimiento del mercado.",
        "footer-text": "&copy; 2026 Geeks Trader. Todos los derechos reservados. No afiliado a Polymarket.",
        "modal-title": "Solicitar Acceso",
        "modal-name": "Nombre",
        "modal-email": "Correo Electrónico",
        "modal-phone": "Teléfono",
        "modal-submit": "Enviar Solicitud"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langBtns = document.querySelectorAll('.lang-btn');

    // Set initial language based on browser preference
    let currentLang = 'en';
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browserLang.startsWith('pt')) {
        currentLang = 'pt';
    } else if (browserLang.startsWith('es')) {
        currentLang = 'es';
    }

    // Initialize intl-tel-input for phone field
    const phoneInput = document.querySelector("#phone");
    let iti = null;

    if (phoneInput) {
        iti = window.intlTelInput(phoneInput, {
            initialCountry: "us",
            preferredCountries: ["us", "br", "gb", "es"],
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.10/build/js/utils.js",
            separateDialCode: true,
            customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
                return selectedCountryPlaceholder;
            }
        });

        // Force dark background on search input when dropdown opens
        phoneInput.addEventListener('countrychange', function() {
            setTimeout(() => {
                const searchInput = document.querySelector('.iti__search-input');
                if (searchInput) {
                    searchInput.style.backgroundColor = '#0f1419';
                    searchInput.style.color = '#ffffff';
                }
            }, 50);
        });

        // Observer to watch for search input creation
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length) {
                    const searchInput = document.querySelector('.iti__search-input');
                    if (searchInput) {
                        searchInput.style.setProperty('background-color', '#0f1419', 'important');
                        searchInput.style.setProperty('background', '#0f1419', 'important');
                        searchInput.style.setProperty('color', '#ffffff', 'important');
                    }
                }
            });
        });

        // Start observing
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Also force style when clicking on flag (opening dropdown)
        const flagContainer = document.querySelector('.iti__flag-container');
        if (flagContainer) {
            flagContainer.addEventListener('click', function() {
                setTimeout(() => {
                    const searchInput = document.querySelector('.iti__search-input');
                    if (searchInput) {
                        // Disable autocomplete
                        searchInput.setAttribute('autocomplete', 'off');
                        searchInput.setAttribute('autocorrect', 'off');
                        searchInput.setAttribute('autocapitalize', 'off');
                        searchInput.setAttribute('spellcheck', 'false');

                        searchInput.style.setProperty('background-color', '#0f1419', 'important');
                        searchInput.style.setProperty('background', '#0f1419', 'important');
                        searchInput.style.setProperty('color', '#ffffff', 'important');
                        searchInput.style.setProperty('-webkit-box-shadow', '0 0 0 1000px #0f1419 inset', 'important');
                        searchInput.style.setProperty('box-shadow', '0 0 0 1000px #0f1419 inset', 'important');

                        // Force on input event too
                        searchInput.addEventListener('input', function() {
                            this.style.setProperty('background-color', '#0f1419', 'important');
                            this.style.setProperty('color', '#ffffff', 'important');
                        });
                    }
                }, 100);
            });
        }
    }

    function updateLanguage(lang) {
        // Update texts
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        // Update active button
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Add click listeners to language buttons
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');
            if (currentLang !== selectedLang) {
                currentLang = selectedLang;
                updateLanguage(currentLang);

                // Google Analytics: Track language change
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'language_change', {
                        'event_category': 'engagement',
                        'event_label': selectedLang,
                        'value': selectedLang
                    });
                }

                // Add a small animation effect
                document.body.style.opacity = '0.8';
                setTimeout(() => {
                    document.body.style.opacity = '1';
                }, 150);
            }
        });
    });

    // Initial render
    updateLanguage(currentLang);

    // Modal Logic
    const modal = document.getElementById('accessModal');
    const btnRequest = document.getElementById('btn-request');
    const closeBtn = document.querySelector('.close-btn');

    if (btnRequest && modal) {
        btnRequest.addEventListener('click', () => {
            modal.classList.add('show');

            // Google Analytics: Track modal open
            if (typeof gtag !== 'undefined') {
                gtag('event', 'open_request_modal', {
                    'event_category': 'engagement',
                    'event_label': 'Request Access Button',
                    'language': currentLang
                });
            }
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Form submission
    const form = document.getElementById('accessForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Validate phone number
            if (iti && !iti.isValidNumber()) {
                const errorMessages = {
                    en: 'Please enter a valid phone number',
                    pt: 'Por favor, insira um número de telefone válido',
                    es: 'Por favor, ingrese un número de teléfono válido'
                };
                alert(errorMessages[currentLang] || errorMessages['en']);
                return;
            }

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = iti ? iti.getNumber() : document.getElementById('phone').value;
            const submitBtn = form.querySelector('button[type="submit"]');

            // Hold original text
            const btnOriginalText = submitBtn.innerText;
            const sendingMessages = {
                en: 'Sending...',
                pt: 'Enviando...',
                es: 'Enviando...'
            };
            submitBtn.innerText = sendingMessages[currentLang] || 'Sending...';
            submitBtn.disabled = true;

            try {
                // Send AJAX POST request using formsubmit.co
                const response = await fetch("https://formsubmit.co/ajax/ec441e1907c35e09e60b9eec83dee60f", {
                    method: "POST",
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        Nome: name,
                        Email: email,
                        Telefone: phone,
                        _subject: `New Access Request - GeeksTrader - ${new Date().toLocaleDateString('pt-BR')} ${new Date().toLocaleTimeString('pt-BR')}`
                    })
                });

                if (response.ok) {
                    // Google Analytics: Track successful form submission (conversion)
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'generate_lead', {
                            'event_category': 'conversion',
                            'event_label': 'Access Request Form',
                            'language': currentLang,
                            'currency': 'USD',
                            'value': 1.0
                        });
                    }

                    alert(currentLang === 'pt' ? 'Solicitação enviada com sucesso! Entraremos em contato.' : currentLang === 'es' ? '¡Solicitud enviada con éxito! Nos pondremos en contacto.' : 'Request successfully submitted! We will contact you.');
                    form.reset();
                    modal.classList.remove('show');
                } else {
                    // Google Analytics: Track form submission error
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'form_error', {
                            'event_category': 'error',
                            'event_label': 'Form Submission Failed',
                            'language': currentLang
                        });
                    }

                    alert('Houve um erro ao enviar. Tente novamente mais tarde.');
                }
            } catch (error) {
                console.error('Error submitting form:', error);

                // Google Analytics: Track network error
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'exception', {
                        'description': 'Form submission network error',
                        'fatal': false,
                        'language': currentLang
                    });
                }

                alert('Erro na conexão. Tente novamente.');
            } finally {
                // Restore button
                submitBtn.innerText = btnOriginalText;
                submitBtn.disabled = false;
            }
        });
    }
});
