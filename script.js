// Music Toggle
const music = document.getElementById('bgMusic');
const toggleMusicBtn = document.getElementById('toggleMusic');
let isPlaying = false;

toggleMusicBtn.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    toggleMusicBtn.textContent = '🔇 Musik OFF';
  } else {
    music.play().catch(err => console.log("Music play error:", err));
    toggleMusicBtn.textContent = '🔊 Musik ON';
  }
  isPlaying = !isPlaying;
});

// Dark Mode ON/OFF
const darkModeBtn = document.getElementById("toggleDarkMode");


darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.galeri-img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('show');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('show');
});

// Tombol "Lihat Galeri" tambah gambar
const lihatGaleriBtn = document.getElementById("lihat-galeri");
lihatGaleriBtn.addEventListener("click", () => {
  const galeri = document.querySelector(".galeri-grid");

  const newImages = [
    "images/kenangan4.jpg",
    "images/kenangan5.jpg",
    "images/kenangan6.jpg",
    "images/kenangan11.jpg",
    "images/kenangan12.jpg",
    "images/kenangan13.jpg",
    "images/kenangan14.jpg",
    "images/kenangan15.jpg",
    "images/kenangan16.jpg",
    "images/kenangan17.jpg",
    "images/kenangan20.jpg",
    "images/kenangan21.jpg",
    "images/kenangan22.jpg",
    "images/kenangan23.jpg",
    "images/kenangan24.jpg",
    "images/kenangan25.jpg",
    "images/kenangan26.jpg",
    "images/kenangan27.jpg",
    "images/kenangan28.jpg",
    "images/kenangan29.jpg",
    "images/kenangan30.jpg",
    "images/kenangan31.jpg",
    "images/kenangan32.jpg",
    "images/kenangan33.jpg",
    "images/kenangan34.jpg",
    "images/kenangan35.jpg",
    "images/kenangan36.jpg",
    "images/kenangan37.jpg",
    "images/kenangan38.jpg",
    "images/kenangan39.jpg",
    "images/kenangan40.jpg",
    "images/kenangan41.jpg",
    "images/kenangan42.jpg",
    "images/kenangan43.jpg",
    "images/kenangan44.jpg",
    "images/kenangan45.jpg",
    "images/kenangan46.jpg",
    "images/kenangan47.jpg",
  ];

  newImages.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Kegiatan Tambahan";
    img.className = "galeri-img";
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("show");
    });
    galeri.appendChild(img);
  });

  lihatGaleriBtn.style.display = "none";
});

const fadeInElements = document.querySelectorAll(".fade-in-up");

const observerFade = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, index * 150); // delay antar elemen
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

fadeInElements.forEach(el => observerFade.observe(el));

// Scroll Fade-in-up
const fadeElements = document.querySelectorAll('.fade-in-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(el => observer.observe(el));

