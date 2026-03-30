const wall = document.querySelector('.wall');

function right() {
    wall.classList.toggle('right');
}

document.querySelectorAll('.password-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
        const field = btn.closest('.password-field');
        const input = field.querySelector('input');
        const eye = btn.querySelector('.icon-eye');
        const eyeOff = btn.querySelector('.icon-eye-off');
        const show = input.type === 'password';
        input.type = show ? 'text' : 'password';
        btn.setAttribute('aria-pressed', String(show));
        btn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
        eye.classList.toggle('hidden', show);
        eyeOff.classList.toggle('hidden', !show);
    });
});