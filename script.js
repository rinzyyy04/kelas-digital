console.log("Website Kelas Digital 4.0 loaded!");

// Hover animasi kartu
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.03)";
    card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // ✅ Popup selamat datang
  const toast = document.createElement("div");
  toast.textContent = "Selamat datang di Kelas Digital!";
  Object.assign(toast.style, {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    background: "#000",
    color: "#fff",
    padding: "15px 25px",
    borderRadius: "10px",
    boxShadow: "0 5px 10px rgba(0,0,0,0.3)",
    opacity: "0",
    transition: "opacity 0.5s ease",
    zIndex: 999
  });
  document.body.appendChild(toast);
  setTimeout(() => (toast.style.opacity = "1"), 300);
  setTimeout(() => (toast.style.opacity = "0"), 3500);

  // ✅ Efek Ketikan
  const teks = "Mencipta, Berkarya, dan Berkembang di Era digital";
  const el = document.getElementById("typingText");
  let i = 0;

  function ketikTeks() {
    if (!el) return;
    if (i < teks.length) {
      el.innerHTML += teks.charAt(i);
      i++;
      setTimeout(ketikTeks, 100);
    }
  }
  ketikTeks();

  // ✅ Quote motivasi random saat load
  const quotes = [
  "Belajar hari ini adalah investasi untuk masa depan.",
  "Apa yang kamu lakukan hari ini, menentukan masa depanmu.",
  "Anak TKJ bukan cuma bisa ngoding, tapi juga ngelangkah.",
  "Terus berkembang, karena diam gak bikin skill naik.",
  "Kesalahan itu proses, bukan kegagalan."
];

const motivasiText = document.getElementById("motivasiText");
let index = 0;

function gantiQuoteTerus() {
  if (motivasiText) {
    motivasiText.textContent = quotes[index];
    index = (index + 1) % quotes.length;
  }
}

gantiQuoteTerus(); // awal
setInterval(gantiQuoteTerus, 10000); // tiap 10 detik ganti
});

// ✅ Dark Mode: bintang & toggle
const toggle = document.getElementById('darkModeToggle');
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let stars = [];
const numStars = 100;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createStars() {
  stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function moveStars() {
  for (let star of stars) {
    star.x += star.vx;
    star.y += star.vy;
    if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
    if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;
  }
}

function animateStars() {
  drawStars();
  moveStars();
  requestAnimationFrame(animateStars);
}

createStars();
animateStars();

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? "Light Mode" : "Dark Mode";
  canvas.style.display = document.body.classList.contains('dark-mode') ? "block" : "none";
});

// ✅ Hacker Mode
const hackerBtn = document.getElementById("hackerToggle");
hackerBtn.addEventListener("click", () => {
  document.body.classList.toggle("hacker-mode");
  hackerBtn.textContent = document.body.classList.contains("hacker-mode") ? "Normal Mode" : "Hacker Mode";
});

// ✅ Efek percikan emas
document.addEventListener("mousemove", function (e) {
  const spark = document.createElement("div");
  spark.classList.add("spark");
  spark.style.left = e.clientX + "px";
  spark.style.top = e.clientY + "px";
  document.body.appendChild(spark);
  setTimeout(() => spark.remove(), 800);
});