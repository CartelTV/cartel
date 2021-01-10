export const debounce = (callback, delay = 250) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      callback(...args);
    }, delay);
  };
};

// handle showing/hiding nav on scroll up/down
let lastScroll = 0;
export const handleNavVisibility = navEl => {
  const currentScroll = window.pageYOffset;
  if (currentScroll === 0) {
    navEl.classList.remove('is-visible');
    return;
  }

  if (
    currentScroll > 50 &&
    currentScroll > lastScroll &&
    !navEl.classList.contains('is-hidden')
  ) {
    // down
    navEl.classList.remove('is-visible');
    navEl.classList.add('is-hidden');
  } else if (
    currentScroll < lastScroll &&
    navEl.classList.contains('is-hidden')
  ) {
    // up
    navEl.classList.remove('is-hidden');
    navEl.classList.add('is-visible');
  }
  lastScroll = currentScroll;
};
