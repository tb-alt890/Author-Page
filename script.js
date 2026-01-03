document.getElementById("contactBtn").addEventListener("click", function() {
  alert("Thanks for reaching out! Trevor will get back to you soon.");
});

window.addEventListener('scroll', () => {
  const topbar = document.querySelector('.topbar');

  if (window.scrollY > 50) {
    topbar.classList.add('shrink');
  } else {
    topbar.classList.remove('shrink');
  }
});
