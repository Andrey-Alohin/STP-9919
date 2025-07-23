const accordions = document.querySelectorAll('[data-accordion]');

accordions.forEach(btn => {
  btn.addEventListener('click', function () {
    const isOpen = this.dataset.active === 'true';
    this.dataset.active = (!isOpen).toString();

    const panel = this.nextElementSibling;
    if (isOpen) {
      panel.style.maxHeight = null;
      delete panel.dataset.active;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      panel.dataset.active = 'true';
    }
  });
});
