const toggleBtn = document.querySelector('[data-action="open"]'); // your burger button
const burgerMenuEl = document.querySelector('[data-visible]');

const closeMenu = e => {
  if (
    e.target.matches('a[href^="#"]') &&
    document.body.dataset.modalWindow === 'open'
  ) {
    document.body.dataset.modalWindow = 'close';
    burgerMenuEl.dataset.visible = 'no';
  }
};

toggleBtn.addEventListener('click', e => {
  e.preventDefault();
  const isOpen = burgerMenuEl.dataset.visible === 'yes';
  if (isOpen) {
    document.body.dataset.modalWindow = 'close';
    burgerMenuEl.dataset.visible = 'no';
  } else {
    document.body.dataset.modalWindow = 'open';
    burgerMenuEl.dataset.visible = 'yes';
  }
});

burgerMenuEl.addEventListener('click', closeMenu);
