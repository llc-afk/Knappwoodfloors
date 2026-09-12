const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.classList.toggle('open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightbox = () => lightbox.classList.remove('open');

document.querySelectorAll('.gallery-item').forEach((item) => item.addEventListener('click', () => {
  const image = item.querySelector('img');
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = item.dataset.caption;
  lightbox.classList.add('open');
  lightbox.querySelector('button').focus();
}));

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeLightbox(); });

document.getElementById('estimate-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const details = document.getElementById('message').value.trim();
  const text = `Hi Knapp Wood Floors! My name is ${name}. I am interested in ${service}. My phone number is ${phone}. Project details: ${details}`;
  window.location.href = `sms:+19143965534?body=${encodeURIComponent(text)}`;
});

document.getElementById('year').textContent = new Date().getFullYear();
