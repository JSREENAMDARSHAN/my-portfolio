<script>
  // Instant 0-lag mouse spotlight tracker
  document.addEventListener('mousemove', e => {
    document.body.style.setProperty('--mouse-x', e.clientX + 'px');
    document.body.style.setProperty('--mouse-y', e.clientY + 'px');
  });

  // Mobile navigation toggle
  const toggle   = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  toggle.addEventListener('click', () => { navLinks.classList.toggle('open'); toggle.classList.toggle('active'); });
  function closeNav() { navLinks.classList.remove('open'); toggle.classList.remove('active'); }

  // Intersection Observer for scroll reveal
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if(e.isIntersecting){ e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // Stat counter animation
  function animateCount(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    if(target===0){ el.textContent='0'+suffix; return; }
    let start=null;
    const step = ts => {
      if(!start) start=ts;
      const progress = Math.min((ts-start)/1500, 1);
      const current = progress * target;
      el.textContent = (Number.isInteger(target) ? Math.floor(current) : current.toFixed(2)) + suffix;
      if(progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.querySelectorAll('.stat-num').forEach(animateCount); } });
  }, {threshold:0.3}).observe(document.querySelector('.stats-bar'));
</script>
