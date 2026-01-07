 const slider = document.querySelector('.slider');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  const cardWidth = 260;
  const gap = 25;
  const step = cardWidth + gap + gap;

  // ===== Smooth Scroll Function =====
  function smoothScrollBy(element, distance, duration = 550) {
    const start = element.scrollLeft;
    const startTime = performance.now();

    function animate(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeInOutCubic
      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      element.scrollLeft = start + distance * ease;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  // ===== Buttons =====
  nextBtn.addEventListener('click', () => {
    smoothScrollBy(slider, -step, 750);


  });

  prevBtn.addEventListener('click', () => {
    smoothScrollBy(slider, step, 750);

  });