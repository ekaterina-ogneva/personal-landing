// === Тёмная тема ===
const themeToggle = document.getElementById('theme-toggle');

// Загружаем сохранённую тему
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
  themeToggle.textContent = '☀️';
}

// Переключаем тему
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙';
  }
});

// === Форма ===
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (email && message) {
    status.textContent = 'Спасибо! Я скоро отвечу вам.';
    status.style.color = 'green';
    form.reset();
  }
});