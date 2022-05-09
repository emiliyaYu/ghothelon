import * as generator from 'russian-nouns-js';

const creator = new generator.Engine();

/**
 * Возвращает обьект слова во всех формах(мужской, женский, средний, общий)
 * */
const getWordsByGenders = (text) => {
  const genders = Object.values(generator.Gender);

  return genders.map((gender) => ({
    text,
    gender,
  }));
};

/**
 * Генерирует обьект, где ключ это возможная форма слова а значение это ссылка
 * @param word слово которое приобразуется во все его формы
 * @param link ссылка, на которую будет перенаправлен пользователь
 * @returns {Object} {'машина': https://ссылка-на-машину, 'машиной': https://ссылка-на-машину, etc...}
 * */
const wordFormsGenerator = (word, link) => {
  const wordsByGender = getWordsByGenders(word);

  return wordsByGender.reduce((acc, gender) => {
    // добавляем множественное число
    const pluralizedWord = creator.pluralize(gender);
    acc[pluralizedWord] = link;

    // генерим слова для каждого падежа
    generator.CASES.forEach((declension) => {
      const newFormOfWord = creator.decline(gender, declension)[0];
      acc[newFormOfWord] = link;
    });

    return acc;
  }, {});
};

export { wordFormsGenerator };
