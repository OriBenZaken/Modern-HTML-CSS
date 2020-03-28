console.log('Hi');
const items =  document.querySelectorAll('#timeline li');

const isInViewport = el => {
  // provides an element’s position within the viewport
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    // There are two ways to check the viewport’s width. Some browsers support window.innerWidth, other’s support document.documentElement.clientWidth, and some support both.
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () => {
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show')
    }
  });
};

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);