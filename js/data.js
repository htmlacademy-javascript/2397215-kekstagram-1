import { getRandomElement, getRandomNumber } from './util.js';

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

const Like = {
  MIN: 15,
  MAX: 200
};

const Comment = {
  MIN: 1,
  MAX: 10
};

const IdComment = {
  MIN: 1,
  MAX: 100
};

const PHOTO_NUMBER = 25;

const generateComment = () => ({
  id: getRandomNumber(IdComment.MIN, IdComment.MAX),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES)
});

const generateComments = () => Array.from({ length: getRandomNumber(Comment.MIN, Comment.MAX)}, (v, i) => generateComment(i + 1));

const generatePhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: `Описание фотографии номер ${id}` ,
  likes: getRandomNumber(Like.MIN, Like.MAX),
  comments: generateComments()
});

const generatePhotos = () => Array.from({ length: PHOTO_NUMBER }, (v, i) => generatePhoto(i + 1));

export {generatePhotos};
