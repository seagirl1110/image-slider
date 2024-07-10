const root = document.querySelector('#root');

const images = [
  'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
  'https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688461053_kartin-papik-pro-p-kartinki-priroda-leto-krasivie-v-khoroshem-56.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg',
  'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400',
];

const createEl = (tag, className) => {
  const el = document.createElement(tag);
  el.setAttribute('class', className);
  return el;
};

const frame = createEl('div', 'frame');
const cards = createEl('div', 'cards');
const triggers = createEl('div', 'triggers');

const btnPrev = createEl('button', 'triggers__btn btn--prev');
btnPrev.textContent = '<';
const btnNext = createEl('button', 'triggers__btn btn--next');
btnNext.textContent = '>';

triggers.append(btnPrev, btnNext);
frame.append(cards, triggers);
root.append(frame);

images.forEach((imageUrl, index) => {
  const card = createEl('div', `card card--${index + 1}`);
  card.style.backgroundImage = `url(${imageUrl})`;

  cards.append(card);
});

let sliderIndex = 0;

const toggleImage = (direction) => {
  if (direction === 'next' && sliderIndex !== images.length - 1) {
    sliderIndex += 1;
  } else if (direction === 'prev' && sliderIndex !== 0) {
    sliderIndex -= 1;
  }
  cards.style.left = `${sliderIndex * -500}px`;
};

btnPrev.addEventListener('click', () => {
  toggleImage('prev');
});
btnNext.addEventListener('click', () => {
  toggleImage('next');
});
