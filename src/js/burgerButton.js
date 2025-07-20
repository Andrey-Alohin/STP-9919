const toggleBtn = document.querySelector('[data-action="open"]'); // your burger button
const burgerMenuEl = document.querySelector('[data-visible]');
const link = document.querySelectorAll('a');

toggleBtn.addEventListener('click', e => {
  e.preventDefault();
  const isOpen = burgerMenuEl.dataset.visible === 'yes';
  burgerMenuEl.dataset.visible = isOpen ? 'no' : 'yes';
});

burgerMenuEl.addEventListener('click', e => {
  if (e.target.matches('a[href^="#"]')) {
    burgerMenuEl.dataset.visible = 'no';
  }
});
