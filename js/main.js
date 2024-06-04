const NAMES = [
  'Артём',
  'Иван',
  'Ольга',
  'Алина',
  'Дима',
  'Мария',
  'Алексей',
  'Анна',
  'Николай',
  'Татьяна'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const like = {
  MIN: 15,
  MAX: 200
};

const randomComments = {
  MIN: 1,
  MAX: 10
};

const numberOfPhotos = {
  NUMBER: 25
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomElement = (items) => items[getRandomNumber(0, items.length - 1)];

const generateComment = (id) => ({
  id: id,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES)
});

const generateComments = () => Array.from({ length: randomComments.MAX}, (v, i) => generateComment(i));

const generatePhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: `Описание фотографии номер ${id}` ,
  likes: getRandomNumber(like.MIN, like.MAX),
  comments: generateComments()
});

const generatePhotos = () => Array.from({ length: numberOfPhotos.NUMBER }, (v, i) => generatePhoto(i));

generatePhotos();

