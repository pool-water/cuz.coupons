/**
 *
 */
export function position(el) {
  const rect = el.getBoundingClientRect();
  return  rect.top;
}


/**
 * Is in Viewport?
 */
export function isInViewport(el) {
  const rect = el.getBoundingClientRect();

  const h = window.innerHeight || document.documentElement.clientHeight;

  if (rect.top < 0 && rect.bottom < 0) {
    return false;
  }

  if (rect.top > h && rect.bottom > h) {
    return false;
  }

  return true;
}


/**
 * Get Scroll Percent
 *
 * Return the %-scrolled. 0.00 at top and 1.00 at bottom.
 */
export function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
  return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
}
