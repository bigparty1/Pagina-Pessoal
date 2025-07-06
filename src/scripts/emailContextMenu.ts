document.addEventListener('DOMContentLoaded', () => {
    const emailContact = document.getElementById('email-contact');
    const emailMenu = document.getElementById('email-menu');
    const copyBtn = document.getElementById('copy-email');
    const openBtn = document.getElementById('open-mail');
    const emailText = document.getElementById('email-text')?.textContent?.trim() || '';

    if (emailContact && emailMenu && copyBtn && openBtn) {
        emailContact.addEventListener('click', (e) => {
            e.preventDefault();
            // Posição do menu
            const rect = emailContact.getBoundingClientRect();
            emailMenu.style.left = `${rect.left + window.scrollX}px`;
            emailMenu.style.top = `${rect.bottom + window.scrollY}px`;
            emailMenu.classList.add('active');
        });

        // Copiar e-mail
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(emailText);
            emailMenu.classList.remove('active');
        });

        // Abrir app de e-mail
        openBtn.addEventListener('click', () => {
            window.location.href = `mailto:${emailText}`;
            emailMenu.classList.remove('active');
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (
                emailMenu.classList.contains('active') &&
                !emailMenu.contains(e.target as Node) &&
                !emailContact.contains(e.target as Node)
            ) {
                emailMenu.classList.remove('active');
            }
        });
    }
});