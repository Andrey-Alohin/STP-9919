const LOCAL_KEY = 'user-choise';
const cookiesModal = document.querySelector('[data-modal-cookies]');
const cookiesBtns = document.querySelectorAll('[data-modal-btn]');
const loader = document.querySelector('[data-loader]');

function handleTransitionEnd(e) {
  if (e.propertyName === 'transform') {
    e.target.remove();
    e.target.removeEventListener('transitionend', handleTransitionEnd);
  }
}

if (loader) {
  window.addEventListener('load', () => {
    loader.dataset.loader = 'false';

    loader.addEventListener('transitionend', handleTransitionEnd);
  });
}

const clickOnBtn = e => {
  const value = e.target.dataset.modalBtn;
  localStorage.setItem(LOCAL_KEY, value);
  cookiesModal.dataset.modalCookies = 'false';
  document.body.dataset.modalWindow = 'close';
  cookiesModal.addEventListener('transitionend', handleTransitionEnd);
};

if (cookiesModal) {
  document.addEventListener('DOMContentLoaded', () => {
    const localData = localStorage.getItem(LOCAL_KEY);
    if (typeof localData === 'string') {
      cookiesModal.remove();
      return;
    }
    cookiesModal.dataset.modalCookies = 'true';
    document.body.dataset.modalWindow = 'open';
    cookiesBtns.forEach(btn => {
      btn.addEventListener('click', clickOnBtn);
    });
  });
}
