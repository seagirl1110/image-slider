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
const rounds = createEl('div', 'rounds');

const btnPrev = createEl('button', 'triggers__btn');
btnPrev.textContent = '<';
const btnNext = createEl('button', 'triggers__btn');
btnNext.textContent = '>';

triggers.append(btnPrev, btnNext);
frame.append(cards, triggers, rounds);
root.append(frame);

let sliderIndex = 0;

setRoundBtnSelected = (btnCurrent) => {
  const btnSelected = rounds.querySelector('.rounds__btn--selected');
  if (btnSelected) {
    btnSelected.classList.remove('rounds__btn--selected');
  }
  btnCurrent.classList.add('rounds__btn--selected');
};

const toggleImage = (direction) => {
  if (direction === 'next' && sliderIndex !== images.length - 1) {
    sliderIndex += 1;
  } else if (direction === 'prev' && sliderIndex !== 0) {
    sliderIndex -= 1;
  }
  cards.style.left = `${sliderIndex * -500}px`;

  const roundsBtnColl = rounds.querySelectorAll('.rounds__btn');
  setRoundBtnSelected(roundsBtnColl[sliderIndex]);
};

images.forEach((imageUrl, index) => {
  const card = createEl('div', 'card');
  card.style.backgroundImage = `url(${imageUrl})`;
  cards.append(card);

  const roundBtn = createEl('button', 'rounds__btn');
  if (index === sliderIndex) {
    roundBtn.classList.add('rounds__btn--selected');
  }
  rounds.append(roundBtn);

  roundBtn.addEventListener('click', function () {
    sliderIndex = index;
    cards.style.left = `${sliderIndex * -500}px`;

    setRoundBtnSelected(this);
  });
});

btnPrev.addEventListener('click', () => {
  toggleImage('prev');
});
btnNext.addEventListener('click', () => {
  toggleImage('next');
});
