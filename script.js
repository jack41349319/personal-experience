const toggle = document.querySelector('.lang-toggle');
let language = 'en';
function setLanguage(next) {
  language = next;
  document.documentElement.lang = language === 'en' ? 'en' : 'zh-Hant';
  document.body.classList.toggle('zh', language === 'zh');
  document.querySelectorAll('[data-en]').forEach((el) => { el.innerHTML = el.dataset[language]; });
  toggle.querySelectorAll('span').forEach((el) => el.classList.toggle('active', (language === 'en' && el.textContent === 'EN') || (language === 'zh' && el.textContent === '中')));
  document.title = language === 'en' ? 'Jacky Lin — Personal Experience' : '林家正 — 個人經歷';
}
toggle.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
document.querySelectorAll('.float-card').forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - .5) * 5;
    const y = ((event.clientY - rect.top) / rect.height - .5) * -5;
    card.style.transform = `translateY(-10px) rotateX(${y}deg) rotateY(${x}deg)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});
