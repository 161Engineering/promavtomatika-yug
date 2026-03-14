const menuToggle = document.querySelector('[data-menu-toggle]');
const siteNav = document.querySelector('[data-site-nav]');
const contactForm = document.querySelector('[data-contact-form]');
const yearSlot = document.querySelector('[data-year]');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const notice = contactForm.querySelector('[data-form-notice]');
    if (notice) {
      notice.textContent = 'Форма работает как статическая заглушка. Подключите обработчик на стороне сервера или CRM.';
    }
    contactForm.reset();
  });
}

if (yearSlot) {
  yearSlot.textContent = String(new Date().getFullYear());
}