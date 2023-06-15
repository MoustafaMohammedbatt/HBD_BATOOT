const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const header = document.getElementById('header');
const loading = document.getElementById('loading');
const currentYear = new Date().getFullYear();
const newYearTime =new Date(`August 20 ${currentYear } 00:00:00`);

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24); 
  const h = Math.floor(diff / 1000 / 60 / 60) % 24; 
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = h <0 ? d + 364: d;
  hours.innerHTML = h <0 ? h+ 23 :h < 10 ? '0' + h : h; // 01:50:03
  minutes.innerHTML = m <0 ? m+ 59 :m < 10 ? '0' + m : m;
  seconds.innerHTML = s <0 ? s+ 59 :s < 10 ? '0' + s : s;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
  header.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);
