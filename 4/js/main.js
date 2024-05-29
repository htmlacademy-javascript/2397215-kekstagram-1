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

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomElement = (arr) => {
  const randomIndex = getRandomNumber(0, arr.length - 1);

  return arr[randomIndex];
};

const generateComment = (id) => {
  const avatar = 'img/avatar-{{getRandomNumber(1, 6)}}.svg';
  const message = getRandomElement(MESSAGES);
  const name = getRandomElement(NAMES);

  return {
    id: id,
    avatar: avatar,
    message: message,
    name: name
  };
};

const generatePhotosDescription = (id) => {
  const url = 'photos/' + {id} + '.jpg';
  const description = 'Описание фотографии номер' + {id};
  const likes = getRandomNumber (15, 200);
  const comments = generateComment(getRandomNumber(1, 10));

  return {
    id: id,
    url: url,
    description: description,
    likes: likes,
    comments: comments,
  };
};

const generatePhotos = () => {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    photos.push(generatePhotosDescription(i));
  }
  return photos;

};

generatePhotos();
