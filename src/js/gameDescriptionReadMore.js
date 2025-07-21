const readMoreOpenBtn = document.querySelector('[data-readmore="open"]');
const readMoreHiddenText = document.querySelector('[data-hiddentext="closed"]');

readMoreOpenBtn.addEventListener('click', e => {
  e.preventDefault();
  readMoreHiddenText.dataset.hiddentext = 'open';
  readMoreOpenBtn.dataset.readmore = 'closed';
});
