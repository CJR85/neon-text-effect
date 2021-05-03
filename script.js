const btn = document.getElementById('btn');

btn.onclick = function () {
  if (btn.classList.contains('neon')) {
    btn.classList.remove('neon');
  } else {
    btn.classList.add('neon');
  }
};
