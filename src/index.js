
document.addEventListener('DOMContentLoaded', () => {
    showToast("Obrigado por visitar meu projeto!");
});

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show';
    setTimeout(() => {
        toast.className = toast.className.replace('show', '');
    }, 5000);
}