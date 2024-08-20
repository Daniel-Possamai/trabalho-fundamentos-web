// Adiciona um evento que será executado quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Exibe uma notificação toast com a mensagem de boas-vindas
    showToast("Obrigado por visitar meu projeto!");
});

// Função para exibir uma notificação toast
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show';
    // Remove a classe 'show' após 5 segundos para ocultar a notificação
    setTimeout(() => {
        toast.className = toast.className.replace('show', '');
    }, 5000);
}