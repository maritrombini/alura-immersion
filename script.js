const greetingElement = document.getElementById('greeting');

const currentHour = new Date().getHours();

const greetingMessage =
  currentHour >= 5 && currentHour < 12
    ? 'Good Morning'
    : currentHour >= 12 && currentHour < 18
    ? 'Good Afternoon'
    : 'Good evening';

greetingElement.textContent = greetingMessage;

// GRID INTELIGENTE
const container = document.querySelector('.offer__list-item');

const observer = new ResizeObserver(() => {
  const containerWidth = container.offsetWidth;
  const numColumns = Math.floor(containerWidth / 200);

  container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;

  console.log({ container });
  console.log({ numColumns });
});
observer.observe(container);
