const accordions = document.querySelectorAll('[data-accordion]');

accordions.forEach(btn => {
  btn.addEventListener('click', function () {
    const panel = this.nextElementSibling;

    const isOpen = this.dataset.active === 'true';
    this.dataset.active = (!isOpen).toString();

    if (isOpen) {
      panel.style.maxHeight = null;
      delete panel.dataset.active;
    } else {
      panel.dataset.active = 'true';
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});
