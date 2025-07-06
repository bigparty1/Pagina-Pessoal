document.addEventListener('DOMContentLoaded', () => {
    const cellphoneContact = document.getElementById('cellphone-contact');
    const cellphoneMenu = document.getElementById('cellphone-menu');
    const copyBtn = document.getElementById('copy-cellphone');
    const openBtn = document.getElementById('open-cellphone');
    const cellphoneText = document.getElementById('cellphone-text')?.textContent?.trim() || '';

    if (cellphoneContact && cellphoneMenu && copyBtn && openBtn) {
        cellphoneContact.addEventListener('click', (e) => {
            e.preventDefault();
            // Posição do menu
            const rect = cellphoneContact.getBoundingClientRect();
            cellphoneMenu.style.left = `${rect.left + window.scrollX}px`;
            cellphoneMenu.style.top = `${rect.bottom + window.scrollY}px`;
            cellphoneMenu.classList.add('active');
        });

        // Copiar e-mail
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(cellphoneText);
            cellphoneMenu.classList.remove('active');
        });

        // Abrir app de e-mail
        openBtn.addEventListener('click', () => {
            window.location.href = `tel:${cellphoneText}`;
            cellphoneMenu.classList.remove('active');
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (
                cellphoneMenu.classList.contains('active') &&
                !cellphoneMenu.contains(e.target as Node) &&
                !cellphoneContact.contains(e.target as Node)
            ) {
                cellphoneMenu.classList.remove('active');
            }
        });
    }
});