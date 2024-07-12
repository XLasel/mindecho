export const navLinks = [
  { label: "Главная", route: "/" },
  { label: "Дневник эмоций", route: "/diary" },
];

export type NameSectionProps = {
  title: string;
  idFormInput: string;
};

export type SectionDataProps = { [key: string]: NameSectionProps };

export const sectionData: SectionDataProps = {
  situation: {
    title: "Ситуация",
    idFormInput: "situation",
  },
  emotions: {
    title: "Ваши эмоции",
    idFormInput: "emotions",
  },
  automaticThoughts: {
    title: "Автоматические мысли",
    idFormInput: "automatic-thoughts",
  },
  physicalSensations: {
    title: "Ощущения в теле",
    idFormInput: "physical-sensations",
  },
  behavior: {
    title: "Поведение",
    idFormInput: "behavior",
  },
  discomfortLevel: {
    title: "Уровень дискомфорта",
    idFormInput: "discomfort-level",
  },
  cognitiveDistortions: {
    title: "Когнитивные искажения",
    idFormInput: "cognitive-distortions",
  },
  adaptiveResponse: {
    title: "Адаптивный ответ",
    idFormInput: "adaptive-response",
  },
};

export const idFormInputArray = Object.values(sectionData).map(
  (section) => section.idFormInput,
);

// export const sectionData: SectionDataProps[] = [
//   {
//     positionId: 0,
//     title: "Ситуация",
//     idFormInput: 'situation'
//   },
//   {
//     positionId: 1,
//     title: "Ситуация",
//     title: "New Interactions",
//   },
//   {
//     positionId: 2,
//     title: "Ai Mic",
//   },
//   {
//     positionId: 3,
//     title: "Trusted Contacts",
//   },
// ];

export interface Emoji {
  name: string;
  emoji: string;
  label: string;
}

export interface EmotionGroup {
  label: string;
  emojis: Emoji[];
}

export interface EmotionGroups {
  joy: EmotionGroup;
  sadness: EmotionGroup;
  anger: EmotionGroup;
  fear: EmotionGroup;
  shame: EmotionGroup;
  disgust: EmotionGroup;
  surprise: EmotionGroup;
  other: EmotionGroup;
}

export const emotionGroups: EmotionGroups = {
  joy: {
    label: "Счастье",
    emojis: [
      { name: "joy_happy", emoji: "😊", label: "Счастье" },
      { name: "joy_love", emoji: "😍", label: "Любовь" },
      { name: "joy_pleasure", emoji: "😏", label: "Удовольствие" },
      { name: "joy_satisfaction", emoji: "😌", label: "Удовлетворение" },
      { name: "joy_gratitude", emoji: "🤗", label: "Признательность" },
      { name: "joy_confidence", emoji: "😎", label: "Уверенность" },
      { name: "joy_admiration", emoji: "🤩", label: "Восхищение" },
      { name: "joy_calm", emoji: "😇", label: "Спокойствие" },
      { name: "joy_fun", emoji: "🤪", label: "Веселье" },
    ],
  },
  sadness: {
    label: "Грусть",
    emojis: [
      { name: "sadness_sad", emoji: "😢", label: "Грусть" },
      { name: "sadness_disappointment", emoji: "😞", label: "Разочарование" },
      { name: "sadness_sorrow", emoji: "😔", label: "Печаль" },
      { name: "sadness_sadness", emoji: "😟", label: "Огорчение" },
      { name: "sadness_deep_sadness", emoji: "😭", label: "Сильная грусть" },
    ],
  },
  anger: {
    label: "Злость",
    emojis: [
      { name: "anger_anger", emoji: "😡", label: "Злость" },
      { name: "anger_irritation", emoji: "😤", label: "Раздражение" },
      { name: "anger_spitefulness", emoji: "😈", label: "Злорадство" },
    ],
  },
  fear: {
    label: "Страх",
    emojis: [
      { name: "fear_fear", emoji: "😨", label: "Страх" },
      { name: "fear_anxiety", emoji: "😖", label: "Тревога" },
      { name: "fear_fright", emoji: "😰", label: "Испуг" },
      { name: "fear_shock", emoji: "🤯", label: "Шок" },
    ],
  },
  shame: {
    label: "Смущение",
    emojis: [
      { name: "shame_embarrassment", emoji: "😬", label: "Смущение" },
      { name: "shame_shyness", emoji: "😖", label: "Стеснение" },
    ],
  },
  disgust: {
    label: "Отвращение",
    emojis: [{ name: "disgust_disgust", emoji: "🤢", label: "Отвращение" }],
  },
  surprise: {
    label: "Удивление",
    emojis: [
      { name: "surprise_surprise", emoji: "😲", label: "Удивление" },
      { name: "surprise_thought", emoji: "🤔", label: "Размышление" },
    ],
  },
  other: {
    label: "Прочие эмоции",
    emojis: [
      { name: "other_boredom", emoji: "😒", label: "Скука" },
      { name: "other_tiredness", emoji: "😴", label: "Усталость" },
      { name: "other_confusion", emoji: "😕", label: "Растерянность" },
      { name: "other_relief", emoji: "😅", label: "Облегчение" },
    ],
  },
};

export interface CognitiveBias {
  id: string;
  title: string;
  description: string;
  examples?: string[];
}

export const biases: CognitiveBias[] = [
  {
    id: "everythingOrNothing",
    title: "Мышление «Всё Или Ничего»",
    description:
      "Максимализм в оценке и суждениях, когда вы видите мир в черно-белых тонах, отказываясь от компромиссов и упуская промежуточные варианты.",
    examples: [
      "«Я должен сдать сессию на одни пятерки – в противном случае это будет провал»",
    ],
  },
  {
    id: "overgeneralization",
    title: "Сверхобобщение",
    description: "Суждение о ситуации в целом по частному случаю.",
    examples: [
      "Начальник указал подчиненному на его ошибку, и тот думает: «Я всегда все делаю неправильно»",
    ],
  },
  {
    id: "negativeFilter",
    title: "Негативный Фильтр (Туннельное Мышление)",
    description:
      "Фокусирование внимания на негативных аспектах ситуации, игнорируя положительные.",
  },
  {
    id: "discountingThePositive",
    title: "Обесценивание Положительного",
    description:
      "Вы отказываетесь от положительного опыта, настаивая на том, что по той или иной причине он «не в счет». все плюсы перестают казаться заслуженными, а считаются сами собой разумеющимися и неважными.",
    examples: [
      "«То, что я прошла это собеседование – не моя заслуга. Оно было несложным. Его мог бы пройти любой»",
      "«Я хорошо справился с проектом, но это ничего не говорит о моей компетентности; мне просто повезло»",
    ],
  },
  {
    id: "mindreading",
    title: "Чтение Мыслей",
    description:
      "Вы предполагаете о том, что знаете, что думают или чувствуют другие люди, не обладая достаточной информацией для этого.",
    examples: ["«Он считает меня бездарностью»"],
  },
  {
    id: "fortuneTelling",
    title: "Ошибка Предсказания",
    description:
      "Вы предвосхищаете негативный исход событий и чувствуете уверенность в том, что ваш прогноз - это свершившийся факт.",
    examples: ["«Я не пройду это собеседование»"],
  },
  {
    id: "catastrophizing",
    title: "Катастрофизация",
    description:
      "Когнитивное искажение, при котором мы преувеличиваем значимость и интенсивность событий.",
    examples: ["«Моя статья никому не интересна. Это – полный крах»"],
  },
  {
    id: "magnificationAndMinimization",
    title: "Преувеличение И Преуменьшение",
    description:
      "Когда мы оцениваем себя, другого человека или ситуацию и безосновательно преувеличиваем негативные аспекты и/или преуменьшаем позитивные.",
    examples: [
      "«Когда меня оценивают средне, это доказывает, что я посредственность. Когда я получаю хорошие оценки, это не доказывает, что я умен»",
    ],
  },
  {
    id: "emotionalReasoning",
    title: "Эмоциональное Обоснование",
    description:
      "Вы делаете умозаключение только исходя из того, что чувствуете, а не из реальных фактов: «Я так чувствую - следовательно, это так».",
    examples: ["«Я чувствую себя идиотом, значит, я идиот»"],
  },
  {
    id: "shouldStatements",
    title: "Долженствование",
    description:
      "Четкие, негибкие представления о том, как должны вести себя мы или другие люди, включающие переоценивание возможных негативных последствий несоответствия этим ожиданиям.",
    examples: [
      "«Я должен всегда поступать по-совести»",
      "«Они должны быть более ответственными»",
      "«Мир должен быть более справедливым»",
    ],
  },
  {
    id: "labeling",
    title: "«Навешивание Ярлыков»",
    description:
      "Вынесение обобщающего суждения о себе или о других на основе ограниченных или поверхностных наблюдений.",
    examples: ["«Я неудачник. Он плохой человек»"],
  },
  {
    id: "personalization",
    title: "Персонализация",
    description:
      "Это принятие всех последствий события (зачастую негативных) на свой счет и взваливание на себя ответственности за чужие поступки и действия сторонних факторов.",
    examples: [
      "Сайт сломался после моей рекомендации добавить форму, это я виноват (притом, что форму делал непрофессиональный разработчик).",
    ],
  },
  {
    id: "retrospectiveDistortion",
    title: "Ретроспективное Искажение",
    description:
      "Ошибка в связи предыдущих и текущих событий с позиции «всё к этому шло» или «я знал, что так будет!». Текущие события могут выглядеть более предсказуемыми ретроспективно, хотя в прошлом никто не мог подумать, что они произойдут.",
    examples: [
      "Я знал, что будет много правок. Клиент с первой встречи мне не понравился (хотя после встречи такой мысли не было).",
      "Миша уволился. Ну, всё к этому уже год шло, он какой-то грустный всегда ходил (хотя Миша был замечен грустным всего однажды и грустил по другой причине).",
    ],
  },
];
