console.log("Website Kelas Digital 4.0 loaded!");

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

  
window.onload = () => {
    const toast = document.createElement("div");
    toast.textContent = "Selamat datang di Kelas Digital!";
    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.right = "30px";
    toast.style.background = "#000";
    toast.style.color = "#fff";
    toast.style.padding = "15px 25px";
    toast.style.borderRadius = "10px";
    toast.style.boxShadow = "0 5px 10px rgba(0,0,0,0.3)";
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.5s ease";
  
    document.body.appendChild(toast);
    setTimeout(() => toast.style.opacity = "1", 300);
    setTimeout(() => toast.style.opacity = "0", 3000);
  };

  const text = "Mencipta, Berkarya, dan Berkembang di Era Digital!";
    let index = 0;
    const typingText = document.getElementById("typing-text");
    const cursor = document.querySelector(".cursor");
  
    function type() {
      if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
      } else {
        cursor.style.display = 'none';
      }
    }
  
    window.onload = type;

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

// Dark Mode Toggle
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggle.textContent = "Light Mode";
    canvas.style.display = "block"; // Tampilkan bintang
  } else {
    toggle.textContent = "Dark Mode";
    canvas.style.display = "none"; // Sembunyikan bintang
  }
});

const hackerBtn = document.getElementById("hackerToggle");

hackerBtn.addEventListener("click", () => {
  document.body.classList.toggle("hacker-mode");

  if (document.body.classList.contains("hacker-mode")) {
    hackerBtn.textContent = "Normal Mode";
  } else {
    hackerBtn.textContent = "Hacker Mode";
  }
});

document.addEventListener("mousemove", function (e) {
  const spark = document.createElement("div");
  spark.classList.add("spark");
  spark.style.left = e.clientX + "px";
  spark.style.top = e.clientY + "px";
  document.body.appendChild(spark);

  setTimeout(() => {
    spark.remove();
  }, 800); // Sesuai durasi animasi fadeOut
});


