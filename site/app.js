const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

const reveals = document.querySelectorAll('.reveal');

reveals.forEach((el, index) => {
  const delay = 100 + index * 80;
  window.setTimeout(() => {
    el.classList.add('is-visible');
  }, delay);
});
