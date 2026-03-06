export default function decorate(block) {
  const title = block.querySelector('p');
  if (title) {
    title.style.color = 'red';
  }
}
