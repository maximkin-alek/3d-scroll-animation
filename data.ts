import styles from './app/page.module.css';
import { FrameType } from './types';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const initialFrames: FrameType[] = [
  {
    variant: 'title',
    title: 'Наши коты:',
    subtitle: 'Рыжий',
    subtitleClassName: styles.firstSubtitle,
  },
  {
    variant: 'photo',
    slidePosition: 'left',
    image: `url(${basePath}/images/r1.jpg)`,
  },
  {
    variant: 'video',
    slidePosition: 'right',
    videoSrc: `${basePath}/media/r-video.mp4`,
    withDarkBg: true,
  },
  { variant: 'empty' },
  {
    variant: 'text',
    textTitle: 'Был снят с дерева во дворе',
    textContent: `Любит смотреть в окно и наблюдать за птицами. Всегда пытается выскочить за
              входную дверь и изучить новые территории. Старается помочь по работе. Любит гладиться, но иногда
              говнится и делает кусь )`,
    slidePosition: 'right',
  },
  { variant: 'empty' },
  {
    variant: 'photo',
    slidePosition: 'left',
    image: `url(${basePath}/images/r2.jpg)`,
    withDarkBg: true,
  },
  { variant: 'empty' },
  {
    variant: 'photo',
    slidePosition: 'right',
    image: `url(${basePath}/images/r3.jpg)`,
    withDarkBg: true,
  },
  { variant: 'empty' },
  {
    variant: 'photo',
    slidePosition: 'left',
    image: `url(${basePath}/images/r4.jpg)`,
    withDarkBg: true,
  },
  { variant: 'empty' },
  {
    variant: 'title',
    title: '',
    subtitle: 'Афина',
    subtitleClassName: styles.secondSubtitle,
  },
  {
    variant: 'photo',
    slidePosition: 'right',
    image: `url(${basePath}/images/a1.jpg)`,
    withDarkBg: true,
  },
  {
    variant: 'text',
    textTitle: 'Переехала из приюта',
    textContent: `Гурман каких мало, искренне любит поесть ) Также поспать, иногда поиграть и
              погладиться. Не любит других котов, но тут уж ничего не поделать.`,
    slidePosition: 'left',
  },
  { variant: 'empty' },
  {
    variant: 'photo',
    slidePosition: 'right',
    image: `url(${basePath}/images/a2.jpg)`,
    withDarkBg: true,
  },
  { variant: 'empty' },
  {
    variant: 'photo',
    slidePosition: 'left',
    image: `url(${basePath}/images/a3.jpg)`,
  },
  { variant: 'empty' },
  {
    variant: 'photo',
    slidePosition: 'right',
    image: `url(${basePath}/images/a4.jpg)`,
  },
  {
    variant: 'title',
    title: '',
    subtitle: 'Бузя',
    subtitleClassName: styles.secondSubtitle,
  },
  {
    variant: 'photo',
    slidePosition: 'left',
    image: `url(${basePath}/images/b3.jpg)`,
    withDarkBg: true,
  },
  { variant: 'empty' },
  {
    variant: 'text',
    textTitle: 'Она же Бузина',
    textContent: `Была подобрана на улице котенком. Вылечили, выкормили, вырастили. Считает
              необходимым принимать живое участие во всех домашних делах, и в целом
              проводить побольше времени в обществе. Если все легли спать, то это лучшее
              время достать самую шумную игрушку и начать гонять её по всему дому. Очень
              любит Рыжего.`,
    slidePosition: 'right',
  },
  { variant: 'empty' },
  {
    variant: 'photo',
    slidePosition: 'left',
    image: `url(${basePath}/images/b4.jpg)`,
    withDarkBg: true,
  },
  { variant: 'empty' },
  {
    variant: 'photo',
    slidePosition: 'right',
    image: `url(${basePath}/images/b2.jpg)`,
  },
  { variant: 'empty' },
  {
    variant: 'photo',
    slidePosition: 'left',
    image: `url(${basePath}/images/b1.jpg)`,
    withDarkBg: true,
  },
  {
    variant: 'text',
    textTitle: '',
    textContent: 'Без кота жизнь не та ≽^•⩊•^≼',
  },
];
