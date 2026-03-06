export default function decorate(block) {
  const title = block.querySelector('h2');
  if (title) {
    title.style.color = 'red';
  }
}
