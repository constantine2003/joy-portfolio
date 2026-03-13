/**
 * scrollReveal — Svelte action
 * Usage: <div use:scrollReveal>...</div>
 * Usage with options: <div use:scrollReveal={{ delay: 200, y: 32 }}>
 */
export function scrollReveal(node, options = {}) {
  const {
    threshold = 0.15,
    delay = 0,
    duration = 650,
    y = 36,
  } = options;

  node.style.opacity = '0';
  node.style.transform = `translateY(${y}px)`;
  node.style.transition = `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`;
  node.style.willChange = 'opacity, transform';

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.style.opacity = '1';
          node.style.transform = 'translateY(0)';
          observer.unobserve(node);
        }
      });
    },
    { threshold }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}