(() => {
  const root = document.documentElement;
  const acts = [...document.querySelectorAll('[data-chapter]')];
  const label = document.querySelector('.rail-label');
  const tokens = [...document.querySelectorAll('.rail-token')];
  const orderRows = [...document.querySelectorAll('.order-slip-rail .slip-row span')];
  const orderStamp = document.querySelector('.order-slip-rail .slip-stamp');
  const orderSlip = document.querySelector('.order-slip-rail');
  const queueAct = document.querySelector('.menu-stagger');
  const queuePeople = [...document.querySelectorAll('.queue-people li')];
  const choiceTokens = [...document.querySelectorAll('.choice-tokens i')];
  const toppingCards = [...document.querySelectorAll('.topping-card')];
  const heroWaveTitle = document.querySelector('.hero-wave-copy strong');
  const heroWaveKicker = document.querySelector('.hero-wave-copy span');
  const heroWaveMarks = [...document.querySelectorAll('.hero-wave-meter i')];
  const heroVideo = document.querySelector('.hero-scrub-video');
  const heroToppingLabel = document.querySelector('.hero-topping-label');
  const heroToppingKicker = heroToppingLabel?.querySelector('span');
  const heroToppingName = heroToppingLabel?.querySelector('strong');
  const siteNav = document.querySelector('.site-nav');
  const dishPreview = document.querySelector('.dish-preview');
  const dishPreviewImage = dishPreview?.querySelector('img');
  const dishPreviewName = dishPreview?.querySelector('b');
  const dishPreviewDescription = dishPreview?.querySelector('figcaption span');
  const dishButtons = [...document.querySelectorAll('.top-ten-list button')];
  let heroVideoTarget = 0;
  let heroVideoSeekFrame = 0;
  const clamp = (value) => Math.min(1, Math.max(0, value));

  const showDish = (button) => {
    if (!button || !dishPreviewImage || !dishPreviewName || !dishPreviewDescription) return;
    dishButtons.forEach((item) => item.classList.toggle('is-selected', item === button));
    dishPreviewImage.src = button.dataset.image;
    dishPreviewImage.alt = `${button.textContent.trim()}參考相片`;
    dishPreviewName.textContent = button.textContent.trim();
    dishPreviewDescription.textContent = button.dataset.description || '';
  };

  dishButtons.forEach((button) => {
    button.addEventListener('mouseenter', () => showDish(button));
    button.addEventListener('focus', () => showDish(button));
    button.addEventListener('click', () => showDish(button));
  });

  const seekHeroVideo = () => {
    heroVideoSeekFrame = 0;
    if (!heroVideo || heroVideo.readyState < 1 || !Number.isFinite(heroVideo.duration)) return;
    const safeEnd = Math.max(0, heroVideo.duration - .045);
    const nextTime = Math.min(safeEnd, Math.max(.001, heroVideoTarget));
    if (Math.abs(heroVideo.currentTime - nextTime) > .012) heroVideo.currentTime = nextTime;
  };

  const scheduleHeroVideoSeek = () => {
    if (!heroVideoSeekFrame) heroVideoSeekFrame = requestAnimationFrame(seekHeroVideo);
  };

  const toppingWaves = [
    { start: .06, end: .24, title: '招牌登場', kicker: '上湯花膠 · 玻璃辣魷魚 · 瑞士雞中翼' },
    { start: .25, end: .39, title: '老香港滷味', kicker: '南乳豬手 · 滷水豬大腸' },
    { start: .40, end: .58, title: '手作滋味', kicker: '自制韭菜餃 · 手打魚肉 · 秘製牛孖根' },
    { start: .59, end: .72, title: '清甜收結', kicker: '清甜蘿蔔 · 蠔皇小花菇' }
  ];
  const entrances = [
    [-105,-38], [105,-42], [86,62], [-90,-32], [90,-30],
    [-108,-28], [108,-34], [-92,62], [-76,-24], [76,-26]
  ];

  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    const pageProgress = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
    root.style.setProperty('--page-percent', `${(pageProgress * 100).toFixed(2)}%`);

    const hero = document.querySelector('.hero-scroll');
    if (hero) {
      const rect = hero.getBoundingClientRect();
      const travel = Math.max(1, hero.offsetHeight - innerHeight);
      const heroProgress = Math.min(1, Math.max(0, -rect.top / travel));
      siteNav?.classList.toggle('is-hero', heroProgress < .995);
      if (heroVideo && heroVideo.readyState >= 1 && Number.isFinite(heroVideo.duration)) {
        heroVideoTarget = heroProgress * Math.max(0, heroVideo.duration - .045);
        scheduleHeroVideoSeek();
        const toppingMoments = [
          { start: 1.55, end: 2.90, kicker: 'SWISS CHICKEN WING', name: '瑞士雞翼' },
          { start: 5.55, end: 6.55, kicker: 'SUPERIOR SOUP FISH MAW', name: '上湯花膠' },
          { start: 10.55, end: 11.70, kicker: 'FERMENTED PORK KNUCKLE', name: '南乳豬手' }
        ];
        const activeTopping = toppingMoments.find((item) => heroVideoTarget >= item.start && heroVideoTarget <= item.end);
        if (heroToppingLabel && heroToppingKicker && heroToppingName) {
          heroToppingLabel.classList.toggle('is-visible', Boolean(activeTopping));
          heroToppingKicker.textContent = activeTopping?.kicker || '';
          heroToppingName.textContent = activeTopping?.name || '';
        }
      }
      const stage = hero.querySelector('.hero-cinematic-stage');
      const handoff = clamp((heroProgress - .87) / .11);
      const finalReveal = clamp((heroProgress - .72) / .10);
      root.style.setProperty('--hero-p', heroProgress.toFixed(4));
      root.style.setProperty('--hero-shade-opacity', (1 - heroProgress * .55).toFixed(3));
      root.style.setProperty('--hero-intro-opacity', (1 - clamp(heroProgress / .22)).toFixed(3));
      root.style.setProperty('--hero-intro-y', `${(-heroProgress * 22).toFixed(2)}px`);
      root.style.setProperty('--hero-finish-opacity', clamp((heroProgress - .94) / .05).toFixed(3));
      root.style.setProperty('--hero-finish-y', `${((1 - heroProgress) * 28).toFixed(2)}px`);
      root.style.setProperty('--hero-y', `${(30 - heroProgress * 58 - handoff * 44).toFixed(2)}px`);
      root.style.setProperty('--hero-rot-x', `${(7 - heroProgress * 7).toFixed(2)}deg`);
      root.style.setProperty('--hero-rot-z', `${(-1.2 + heroProgress * 1.2).toFixed(2)}deg`);
      root.style.setProperty('--hero-scale', (.80 + finalReveal * .18 + handoff * .42).toFixed(4));
      root.style.setProperty('--hero-steam-opacity', (.12 + finalReveal * .44).toFixed(3));
      const wordmarkIn = clamp((heroProgress - .73) / .08);
      const wordmarkOut = 1 - clamp((heroProgress - .89) / .06);
      root.style.setProperty('--hero-wordmark-opacity', (wordmarkIn * wordmarkOut).toFixed(3));
      root.style.setProperty('--noodle-opacity', clamp((heroProgress - .87) / .055).toFixed(3));
      root.style.setProperty('--noodle-scale', clamp((heroProgress - .87) / .10).toFixed(3));
      root.style.setProperty('--bowl-veil', (.48 * (1 - clamp(heroProgress / .74))).toFixed(3));

      let activeWave = -1;
      toppingWaves.forEach((wave, index) => {
        if (heroProgress >= wave.start && heroProgress <= wave.end) activeWave = index;
      });
      if (heroWaveTitle && heroWaveKicker) {
        if (heroProgress < .055) {
          heroWaveTitle.textContent = '由麵與湯開始';
          heroWaveKicker.textContent = '文記十選';
        } else if (activeWave >= 0) {
          heroWaveTitle.textContent = toppingWaves[activeWave].title;
          heroWaveKicker.textContent = toppingWaves[activeWave].kicker;
        } else if (heroProgress < .87) {
          heroWaveTitle.textContent = '十款招牌，一碗文記';
          heroWaveKicker.textContent = '全部落碗';
        } else {
          heroWaveTitle.textContent = '沿着這一段麵線';
          heroWaveKicker.textContent = '進入第一段麵線';
        }
      }
      heroWaveMarks.forEach((mark,index) => mark.classList.toggle('is-live', index === activeWave || (activeWave < 0 && heroProgress >= .72)));

      if (stage) toppingCards.forEach((card,index) => {
        const wave = toppingWaves[Number(card.dataset.wave) - 1];
        const duration = wave.end - wave.start;
        const reveal = clamp((heroProgress - wave.start) / (duration * .24));
        const merge = clamp((heroProgress - (wave.end - duration * .36)) / (duration * .36));
        const visible = reveal * (1 - merge);
        const targetX = stage.clientWidth * .5 - (card.offsetLeft + card.offsetWidth * .5);
        const targetY = stage.clientHeight * .67 - (card.offsetTop + card.offsetHeight * .5);
        const entry = entrances[index];
        const x = entry[0] * (1 - reveal) + targetX * merge;
        const y = entry[1] * (1 - reveal) + targetY * merge;
        const scale = .76 + reveal * .24 - merge * .64;
        const rotate = (index % 2 ? 4 : -4) * (1 - merge);
        card.style.opacity = visible.toFixed(3);
        card.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,${(1-merge)*55}px) rotate(${rotate.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      });
    }

    if (queueAct) {
      const rect = queueAct.getBoundingClientRect();
      const queueProgress = clamp((innerHeight * .88 - rect.top) / Math.max(innerHeight, queueAct.offsetHeight * .78));
      queuePeople.forEach((person, index) => {
        const local = clamp((queueProgress - index * .07) / .62);
        const distance = 24 + index * 7;
        person.style.setProperty('--advance', `${(-local * distance).toFixed(2)}px`);
      });
      choiceTokens.forEach((token, index) => {
        const local = clamp((queueProgress - (.28 + index * .13)) / .22);
        token.style.setProperty('--token-rise', `${((1 - local) * 10).toFixed(2)}px`);
        token.style.setProperty('--token-opacity', (.35 + local * .65).toFixed(3));
      });
    }
  };

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      acts.forEach((act) => act.classList.toggle('is-current', act === entry.target));
      if (label) label.textContent = entry.target.dataset.chapter;
      const index = acts.indexOf(entry.target);
      if (orderSlip) orderSlip.style.opacity = index >= 2 && index <= 4 ? '1' : '0';
      tokens.forEach((token, tokenIndex) => token.classList.toggle('is-live', index >= tokenIndex + 1));
      orderRows.forEach((row, rowIndex) => {
        const revealAt = rowIndex < 2 ? 2 : 3;
        row.style.opacity = index >= revealAt ? '1' : '.2';
      });
      if (orderStamp) {
        const complete = index >= 4;
        orderStamp.style.opacity = complete ? '1' : '.16';
        orderStamp.style.transform = complete ? 'rotate(-8deg) scale(1)' : 'rotate(-8deg) scale(.8)';
        orderStamp.textContent = complete ? '完成' : '落單';
      }
    }
  }, { rootMargin: '-35% 0px -50% 0px', threshold: 0 });

  acts.forEach((act) => observer.observe(act));
  if (heroVideo) {
    heroVideo.pause();
    heroVideo.addEventListener('loadedmetadata', update);
    heroVideo.addEventListener('durationchange', update);
  }
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
})();
