console.log('hi');
const shareBtn = document.querySelector('.share');
const icons = document.querySelector('.social-icons');

const showLinks = () => {
  icons.classList.toggle('hidden');
  shareBtn.classList.toggle('open');
};

shareBtn.addEventListener('click', showLinks);
