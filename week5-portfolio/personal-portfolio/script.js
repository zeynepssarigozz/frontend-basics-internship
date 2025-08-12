window.onload = function() {
  const header = document.querySelector("header h1");
  header.style.transition = "color 1s";
  header.style.color = "#ffe082";
  setTimeout(() => header.style.color = "white", 1500);

  if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-toggle').textContent = 'Aydınlık Mod';
  }
};

function greetUser() {
  let name = prompt("Adınızı girin:");
  const greetingDiv = document.getElementById("greeting");
  if(name && name.trim() !== "") {
    greetingDiv.textContent = `Sayfama hoş geldin, ${name.trim()}! 💙`;
  } else {
    greetingDiv.textContent = "Sayfama hoş geldin, Ziyaretçi! 💙";
  }
  greetingDiv.classList.remove("visible");
  void greetingDiv.offsetWidth;
  greetingDiv.classList.add("visible");
}

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Aydınlık Mod';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = 'Karanlık Mod';
    localStorage.setItem('theme', 'light');
  }
});
