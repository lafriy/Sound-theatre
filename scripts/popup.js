const data = [
  {
    url: './assets/img/bar-js/1.png',
    heading: 'Газировка',
    slogan: 'Освежающий вкус!',
    text: 'Необычный свежий и прохладительный напиток, который часто употребляют в окенане: газировка со вкусом водорослей.',
    subtext:
      'Подходит для гурманов и любителей соленого. В состав входят: водоросли, содовая, соль.',
  },
  {
    url: './assets/img/bar-js/2.png',
    heading: 'Коктейль',
    slogan: 'Мягкое послевкусие!',
    text: 'Нежный коктейль из кораллов с желейными кусочками льда. Пленительный вкус и звонкий аромат.',
    subtext:
      'Безалкогольный напиток. В состав входят: сухой коралловый порошок, вода, лед, ароматизаторы.',
  },
  {
    url: './assets/img/bar-js/3.png',
    heading: 'Соленое вино',
    slogan: 'бодрящий аромат и вкус!',
    text: 'Лимитированная серия уникального вина столетней выдержки в глубоком подводном погребе.',
    subtext: 'В состав входят: спирт, сладкая соль, вода.',
  },
  {
    url: './assets/img/bar-js/4.png',
    heading: 'Морская зелень «на пару»',
    slogan: '',
    text: 'Отборный подводный мох, прошедший термообработку жидким азотом, покрытый инеем.',
    subtext:
      'Подается вместе с небольшим количеством кислой икры. В состав входят: Мох, соль, кислая икра.',
  },
  {
    url: './assets/img/bar-js/5.png',
    heading: 'Хрустящие хлопья',
    slogan: 'хлопья со вкусом мела!',
    text: 'Хрустящие кусочки сушеного мела с добавлением различных приправ и воды.',
    subtext: '',
  },
  {
    url: './assets/img/bar-js/6.png',
    heading: 'Тарелка с запеченными ракушками',
    slogan: 'Лучшая закуска!',
    text: 'Тарелка, наполненная запечеными ракушками с добалением различных освежающих специй',
    subtext:
      'Хорошая закуска к основному блюду. В состав входят: ракушки, специи.',
  },
];

const overlayEl = document.querySelector('.overlay');
const popupEl = document.querySelector('.popup');

const popupItemEls = document.querySelectorAll('.menu-section__item');
const popupCloseBtnEl = document.querySelector('.popup__close-btn');
const popupHeadingEl = document.querySelector('.popup__heading');
const popupSloganEl = document.querySelector('.popup__slogan');
const popupImageEl = document.querySelector('.popup__img');
const popupTextEl = document.querySelector('.popup__text');
const popupSubTextEl = document.querySelector('.popup__subtext');

popupItemEls.forEach((item, idx) =>
  item.addEventListener('click', () => {
    overlayEl.classList.add('active');
    document.body.classList.add('no-scroll');

    const info = data[idx];

    popupHeadingEl.textContent = info.heading;
    popupSloganEl.textContent = info.slogan;
    popupImageEl.src = info.url;
    popupTextEl.textContent = info.text;
    popupSubTextEl.textContent = info.subtext;
  })
);

popupCloseBtnEl.addEventListener('click', () => {
  overlayEl.classList.remove('active');
  document.body.classList.remove('no-scroll');
});
