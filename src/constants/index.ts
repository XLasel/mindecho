import type { CognitiveBias, EmotionGroups, SectionDataType } from './types';

export const ROUTES = {
  HOME: `/`,
  DIARY: `/diary`,
  DIARY_ADD: `/diary/add`,
  DIARY_ENTRY: (id: string) => `/diary/${id}`,
  DIARY_EDIT: (id: string) => `/diary/${id}/edit`,
  USEFUL_MATERIALS: `/useful-materials`,
  MATERIALS_ENTRY: (id: string) => `/useful-materials/${id}`,
  NOT_FOUND: `/404`,
};

export const navLinks = [
  { label: 'Главная', route: ROUTES.HOME },
  { label: 'Дневник эмоций', route: ROUTES.DIARY },
  { label: 'Полезные материалы', route: ROUTES.USEFUL_MATERIALS },
];

export const IMAGE = {
  welcomeIllustration: new URL('@/assets/welcome.png', import.meta.url).href,
  kptDiagram: new URL('@/assets/kpt-diagram.png', import.meta.url).href,
  invitation: new URL('@/assets/invitation.png', import.meta.url).href,
  bScientificApproach: new URL(
    '@/assets/b-scientific-approach.png',
    import.meta.url
  ).href,
  bAvailability: new URL('@/assets/b-availability.png', import.meta.url).href,
  bSafety: new URL('@/assets/b-safety.png', import.meta.url).href,
  bSupport: new URL('@/assets/b-support.png', import.meta.url).href,
  notesImage: new URL('@/assets/notes-image.png', import.meta.url).href,
  noContent: new URL('@/assets/no-content.png', import.meta.url).href,
  cognitiveBias: new URL('@/assets/content/cognitive-bias.png', import.meta.url)
    .href,
  meditationMindfulness: new URL(
    '@/assets/content/meditation-mindfulness.png',
    import.meta.url
  ).href,
};

export const sectionData: SectionDataType = {
  situation: {
    title: 'Ситуация',
    idFormInput: 'situation',
  },
  emotions: {
    title: 'Ваши эмоции',
    idFormInput: 'emotions',
  },
  automaticThoughts: {
    title: 'Автоматические мысли',
    idFormInput: 'automatic-thoughts',
  },
  physicalSensations: {
    title: 'Ощущения в теле',
    idFormInput: 'physical-sensations',
  },
  behavior: {
    title: 'Поведение',
    idFormInput: 'behavior',
  },
  discomfortLevel: {
    title: 'Уровень дискомфорта',
    idFormInput: 'discomfort-level',
  },
  cognitiveDistortions: {
    title: 'Когнитивные искажения',
    idFormInput: 'cognitive-distortions',
  },
  adaptiveResponse: {
    title: 'Адаптивный ответ',
    idFormInput: 'adaptive-response',
  },
};

export type SectionIdFormInput =
  (typeof sectionData)[keyof typeof sectionData]['idFormInput'];

export const emotionGroups: EmotionGroups = {
  joy: {
    label: 'Счастье',
    emojis: [
      { name: 'joy_happy', emoji: '😊', label: 'Счастье' },
      { name: 'joy_love', emoji: '😍', label: 'Любовь' },
      { name: 'joy_pleasure', emoji: '😊', label: 'Удовольствие' },
      { name: 'joy_satisfaction', emoji: '😌', label: 'Удовлетворение' },
      { name: 'joy_gratitude', emoji: '🤗', label: 'Признательность' },
      { name: 'joy_confidence', emoji: '😎', label: 'Уверенность' },
      { name: 'joy_admiration', emoji: '🤩', label: 'Восхищение' },
      { name: 'joy_calm', emoji: '😇', label: 'Спокойствие' },
      { name: 'joy_fun', emoji: '🤪', label: 'Веселье' },
    ],
  },
  sadness: {
    label: 'Грусть',
    emojis: [
      { name: 'sadness_sad', emoji: '😢', label: 'Грусть' },
      { name: 'sadness_disappointment', emoji: '😞', label: 'Разочарование' },
      { name: 'sadness_sorrow', emoji: '😔', label: 'Печаль' },
      { name: 'sadness_sadness', emoji: '😟', label: 'Огорчение' },
      { name: 'sadness_deep_sadness', emoji: '😭', label: 'Сильная грусть' },
    ],
  },
  anger: {
    label: 'Злость',
    emojis: [
      { name: 'anger_anger', emoji: '😡', label: 'Злость' },
      { name: 'anger_irritation', emoji: '😤', label: 'Раздражение' },
      { name: 'anger_spitefulness', emoji: '😈', label: 'Злорадство' },
    ],
  },
  fear: {
    label: 'Страх',
    emojis: [
      { name: 'fear_fear', emoji: '😨', label: 'Страх' },
      { name: 'fear_anxiety', emoji: '😖', label: 'Тревога' },
      { name: 'fear_fright', emoji: '😰', label: 'Испуг' },
      { name: 'fear_shock', emoji: '🤯', label: 'Шок' },
    ],
  },
  shame: {
    label: 'Смущение',
    emojis: [
      { name: 'shame_embarrassment', emoji: '😬', label: 'Смущение' },
      { name: 'shame_shyness', emoji: '😖', label: 'Стеснение' },
    ],
  },
  disgust: {
    label: 'Отвращение',
    emojis: [{ name: 'disgust_disgust', emoji: '🤢', label: 'Отвращение' }],
  },
  surprise: {
    label: 'Удивление',
    emojis: [
      { name: 'surprise_surprise', emoji: '😲', label: 'Удивление' },
      { name: 'surprise_thought', emoji: '🤔', label: 'Размышление' },
    ],
  },
  other: {
    label: 'Прочие эмоции',
    emojis: [
      { name: 'other_boredom', emoji: '😒', label: 'Скука' },
      { name: 'other_tiredness', emoji: '😴', label: 'Усталость' },
      { name: 'other_confusion', emoji: '😕', label: 'Растерянность' },
      { name: 'other_relief', emoji: '😅', label: 'Облегчение' },
    ],
  },
};

export const biases: CognitiveBias[] = [
  {
    id: 'everythingOrNothing',
    title: 'Мышление «Всё Или Ничего»',
    description:
      'Максимализм в оценке и суждениях, когда мы выдим мир в черно-белых тонах, отказываясь от компромиссов и упуская промежуточные варианты.',
    examples: [
      '«Я должен сдать сессию на одни пятерки – в противном случае это будет провал»',
    ],
    emoji: '⚪⚫',
  },
  {
    id: 'overgeneralization',
    title: 'Сверхобобщение',
    description: 'Суждение о ситуации в целом по частному случаю.',
    examples: [
      'Начальник указал подчиненному на его ошибку, и тот думает: «Я всегда все делаю неправильно»',
    ],
    emoji: '🌐',
  },
  {
    id: 'negativeFilter',
    title: 'Негативный Фильтр',
    description:
      'Фокусирование внимания на негативных аспектах ситуации, игнорируя положительные.',
    emoji: '🔍',
  },
  {
    id: 'discountingThePositive',
    title: 'Обесценивание Положительного',
    description:
      'Отказ от положительного опыта, настаивание на том, что по той или иной причине он «не в счёт». Все плюсы перестают казаться заслуженными, а считаются сами собой разумеющимися и неважными.',
    examples: [
      '«То, что я прошла это собеседование – не моя заслуга. Оно было несложным. Его мог бы пройти любой»',
      '«Я хорошо справился с проектом, но это ничего не говорит о моей компетентности; мне просто повезло»',
    ],
    emoji: '🔽',
  },
  {
    id: 'mindreading',
    title: 'Чтение Мыслей',
    description:
      'Предположение о том, что знаете, что думают или чувствуют другие люди, не обладая достаточной информацией для этого.',
    examples: ['«Он считает меня бездарностью»'],
    emoji: '💭',
  },
  {
    id: 'fortuneTelling',
    title: 'Ошибка Предсказания',
    description:
      'Предвосхищение негативного исхода событий и уверенность в том, что ваш прогноз - это свершившийся факт.',
    examples: ['«Я не пройду это собеседование»'],
    emoji: '🔮',
  },
  {
    id: 'catastrophizing',
    title: 'Катастрофизация',
    description:
      'Когнитивное искажение, при котором мы преувеличиваем значимость и интенсивность событий.',
    examples: ['«Моя статья никому не интересна. Это – полный крах»'],
    emoji: '💥',
  },
  {
    id: 'magnificationAndMinimization',
    title: 'Преувеличение и Преуменьшение',
    description:
      'Когда мы оцениваем себя, другого человека или ситуацию и безосновательно преувеличиваем негативные аспекты и/или преуменьшаем позитивные.',
    examples: [
      '«Когда меня оценивают средне, это доказывает, что я посредственность. Когда я получаю хорошие оценки, это не доказывает, что я умен»',
    ],
    emoji: '🔍🔎',
  },
  {
    id: 'emotionalReasoning',
    title: 'Эмоциональное Обоснование',
    description:
      'Когда мы стороим умозаключение только исходя из того, что чувствуем, а не из реальных фактов: «Я так чувствую - следовательно, это так».',
    examples: ['«Он мне не нравится, чувствую, ему нельзя верить»'],
    emoji: '😣',
  },
  {
    id: 'shouldStatements',
    title: 'Долженствование',
    description:
      'Четкие, негибкие представления о том, как должны вести себя мы или другие люди, включающие переоценивание возможных негативных последствий несоответствия этим ожиданиям.',
    examples: [
      '«Я должен всегда поступать по-совести»',
      '«Они должны быть более ответственными»',
      '«Мир должен быть более справедливым»',
    ],
    emoji: '📜',
  },
  {
    id: 'labeling',
    title: '«Навешивание Ярлыков»',
    description:
      'Вынесение обобщающего суждения о себе или о других на основе ограниченных или поверхностных наблюдений.',
    examples: ['«Я неудачник. Он плохой человек»'],
    emoji: '🏷️',
  },
  {
    id: 'personalization',
    title: 'Персонализация',
    description:
      'Это принятие всех последствий события (зачастую негативных) на свой счет и взваливание на себя ответственности за чужие поступки и действия сторонних факторов.',
    examples: [
      'Сайт сломался после моей рекомендации добавить форму, это я виноват (притом, что форму делал непрофессиональный разработчик).',
    ],
    emoji: '🙋‍♂️',
  },
  {
    id: 'retrospectiveDistortion',
    title: 'Ретроспективное Искажение',
    description:
      'Ошибка в связи предыдущих и текущих событий с позиции «всё к этому шло» или «я знал, что так будет!». Текущие события могут выглядеть более предсказуемыми ретроспективно, хотя в прошлом никто не мог подумать, что они произойдут.',
    examples: [
      'Я знал, что будет много правок. Клиент с первой встречи мне не понравился (хотя после встречи такой мысли не было).',
      'Миша уволился. Ну, всё к этому уже год шло, он какой-то грустный всегда ходил (хотя Миша был замечен грустным всего однажды и грустил по другой причине).',
    ],
    emoji: '🔙',
  },
];

export const initialNotes: Note[] = [
  {
    id: '1',
    date: '2024-01-15T10:20:30Z',
    title: 'Рабочий день',
    situation: 'На работе не удалось выполнить задачу в срок.',
    automaticThoughts: [
      {
        thought: 'Я плохой специалист',
        response: 'Это единичный случай, все ошибаются',
      },
    ],
    emotions: {
      joy_happy: false,
      joy_love: false,
      joy_pleasure: false,
      joy_satisfaction: false,
      joy_gratitude: false,
      joy_confidence: false,
      joy_admiration: false,
      joy_calm: false,
      joy_fun: false,
      sadness_sad: true,
      sadness_disappointment: true,
      sadness_sorrow: false,
      sadness_sadness: true,
      sadness_deep_sadness: false,
      anger_anger: false,
      anger_irritation: false,
      anger_spitefulness: false,
      fear_fear: false,
      fear_anxiety: true,
      fear_fright: false,
      fear_shock: false,
      shame_embarrassment: false,
      shame_shyness: false,
      disgust_disgust: false,
      surprise_surprise: false,
      surprise_thought: false,
      other_boredom: false,
      other_tiredness: false,
      other_confusion: false,
      other_relief: false,
    },
    physicalSensations: 'Головная боль',
    behavior: 'Закрылась в кабинете, не общалась с коллегами',
    discomfortLevel: 7,
    cognitiveDistortions: {
      everythingOrNothing: true,
      overgeneralization: false,
      negativeFilter: true,
      discountingThePositive: false,
      mindreading: false,
      fortuneTelling: false,
      catastrophizing: false,
      magnificationAndMinimization: true,
      emotionalReasoning: true,
      shouldStatements: false,
      labeling: true,
      personalization: false,
      retrospectiveDistortion: false,
    },
    postComment:
      'Теперь, взглянув на ситуацию свежим взглядом, понимаю, что можно было попросить помощи у коллег',
    newDiscomfortLevel: 5,
  },
  {
    id: '2',
    date: '2024-02-05T15:45:00Z',
    title: 'Ссора с другом',
    situation: 'Поссорилась с другом из-за недопонимания.',
    automaticThoughts: [
      {
        thought: 'Мы больше не будем общаться',
        response: 'Это просто ссора, у нас было много хороших моментов',
      },
    ],
    emotions: {
      joy_happy: false,
      joy_love: false,
      joy_pleasure: false,
      joy_satisfaction: false,
      joy_gratitude: false,
      joy_confidence: false,
      joy_admiration: false,
      joy_calm: false,
      joy_fun: false,
      sadness_sad: true,
      sadness_disappointment: true,
      sadness_sorrow: true,
      sadness_sadness: true,
      sadness_deep_sadness: false,
      anger_anger: true,
      anger_irritation: true,
      anger_spitefulness: false,
      fear_fear: false,
      fear_anxiety: false,
      fear_fright: false,
      fear_shock: false,
      shame_embarrassment: false,
      shame_shyness: false,
      disgust_disgust: false,
      surprise_surprise: false,
      surprise_thought: false,
      other_boredom: false,
      other_tiredness: false,
      other_confusion: false,
      other_relief: false,
    },
    physicalSensations: 'Учащенное сердцебиение',
    behavior: 'Избегала контактов',
    discomfortLevel: 8,
    cognitiveDistortions: {
      everythingOrNothing: false,
      overgeneralization: true,
      negativeFilter: true,
      discountingThePositive: false,
      mindreading: false,
      fortuneTelling: true,
      catastrophizing: false,
      magnificationAndMinimization: true,
      emotionalReasoning: true,
      shouldStatements: false,
      labeling: false,
      personalization: false,
      retrospectiveDistortion: false,
    },
    postComment:
      'После разговора поняла, что недопонимание можно было решить спокойно',
    newDiscomfortLevel: 4,
  },
  {
    id: '3',
    date: '2024-03-10T18:00:00Z',
    title: 'Презентация проекта',
    situation: 'Выступала с презентацией нового проекта.',
    automaticThoughts: [
      {
        thought: 'Все подумают, что я ничего не знаю',
        response: 'Я хорошо подготовилась и знаю свой материал',
      },
      {
        thought: 'Мне не хватит времени',
        response: 'У меня есть достаточно времени, чтобы всё объяснить',
      },
    ],
    emotions: {
      joy_happy: false,
      joy_love: false,
      joy_pleasure: false,
      joy_satisfaction: false,
      joy_gratitude: false,
      joy_confidence: true,
      joy_admiration: false,
      joy_calm: false,
      joy_fun: false,
      sadness_sad: false,
      sadness_disappointment: false,
      sadness_sorrow: false,
      sadness_sadness: false,
      sadness_deep_sadness: false,
      anger_anger: false,
      anger_irritation: false,
      anger_spitefulness: false,
      fear_fear: true,
      fear_anxiety: true,
      fear_fright: false,
      fear_shock: false,
      shame_embarrassment: false,
      shame_shyness: false,
      disgust_disgust: false,
      surprise_surprise: false,
      surprise_thought: false,
      other_boredom: false,
      other_tiredness: false,
      other_confusion: false,
      other_relief: false,
    },
    physicalSensations: 'Трясутся руки',
    behavior: 'Забыла несколько слов в презентации',
    discomfortLevel: 6,
    cognitiveDistortions: {
      everythingOrNothing: false,
      overgeneralization: true,
      negativeFilter: false,
      discountingThePositive: true,
      mindreading: true,
      fortuneTelling: true,
      catastrophizing: false,
      magnificationAndMinimization: false,
      emotionalReasoning: true,
      shouldStatements: false,
      labeling: true,
      personalization: false,
      retrospectiveDistortion: false,
    },
    postComment:
      'После выступления поняла, что мои знания и подготовка были достаточными',
    newDiscomfortLevel: 3,
  },
  {
    id: '4',
    date: '2024-04-12T09:30:00Z',
    title: 'Неудачное свидание',
    situation: 'Свидание прошло не так, как ожидала.',
    automaticThoughts: [
      {
        thought: 'Я никому не интересна',
        response: 'Это всего одно свидание, не стоит обобщать',
      },
    ],
    emotions: {
      joy_happy: false,
      joy_love: false,
      joy_pleasure: false,
      joy_satisfaction: false,
      joy_gratitude: false,
      joy_confidence: false,
      joy_admiration: false,
      joy_calm: false,
      joy_fun: false,
      sadness_sad: true,
      sadness_disappointment: true,
      sadness_sorrow: false,
      sadness_sadness: true,
      sadness_deep_sadness: false,
      anger_anger: false,
      anger_irritation: false,
      anger_spitefulness: false,
      fear_fear: false,
      fear_anxiety: false,
      fear_fright: false,
      fear_shock: false,
      shame_embarrassment: true,
      shame_shyness: false,
      disgust_disgust: false,
      surprise_surprise: false,
      surprise_thought: false,
      other_boredom: false,
      other_tiredness: false,
      other_confusion: false,
      other_relief: false,
    },
    physicalSensations: 'Желудок скрутило',
    behavior: 'Не захотела продолжать общение',
    discomfortLevel: 7,
    cognitiveDistortions: {
      everythingOrNothing: false,
      overgeneralization: true,
      negativeFilter: true,
      discountingThePositive: false,
      mindreading: true,
      fortuneTelling: false,
      catastrophizing: false,
      magnificationAndMinimization: true,
      emotionalReasoning: true,
      shouldStatements: false,
      labeling: true,
      personalization: false,
      retrospectiveDistortion: false,
    },
    postComment:
      'Теперь понимаю, что одно свидание не определяет всю мою ценность',
    newDiscomfortLevel: 5,
  },
  {
    id: '5',
    date: '2024-05-01T14:30:00Z',
    title: 'Потеряла кошелек',
    situation: 'Потеряла кошелек с документами.',
    automaticThoughts: [
      {
        thought: 'Я такая невнимательная',
        response: 'Со всеми может случиться, главное принять меры',
      },
    ],
    emotions: {
      joy_happy: false,
      joy_love: false,
      joy_pleasure: false,
      joy_satisfaction: false,
      joy_gratitude: false,
      joy_confidence: false,
      joy_admiration: false,
      joy_calm: false,
      joy_fun: false,
      sadness_sad: true,
      sadness_disappointment: false,
      sadness_sorrow: true,
      sadness_sadness: true,
      sadness_deep_sadness: false,
      anger_anger: false,
      anger_irritation: true,
      anger_spitefulness: false,
      fear_fear: true,
      fear_anxiety: true,
      fear_fright: false,
      fear_shock: false,
      shame_embarrassment: false,
      shame_shyness: false,
      disgust_disgust: false,
      surprise_surprise: false,
      surprise_thought: false,
      other_boredom: false,
      other_tiredness: false,
      other_confusion: false,
      other_relief: false,
    },
    physicalSensations: 'Тяжесть в груди',
    behavior: 'Заблокировала карты и сообщила в полицию',
    discomfortLevel: 8,
    cognitiveDistortions: {
      everythingOrNothing: false,
      overgeneralization: true,
      negativeFilter: false,
      discountingThePositive: true,
      mindreading: false,
      fortuneTelling: true,
      catastrophizing: false,
      magnificationAndMinimization: false,
      emotionalReasoning: true,
      shouldStatements: false,
      labeling: true,
      personalization: false,
      retrospectiveDistortion: false,
    },
    postComment:
      'Теперь понимаю, что важны быстрые действия и не стоит винить себя',
    newDiscomfortLevel: 4,
  },
  {
    id: '6',
    date: '2024-06-18T12:00:00Z',
    title: 'Экзамен',
    situation: 'Сдавала экзамен в университете.',
    automaticThoughts: [
      { thought: 'Я провалюсь', response: 'Я готовилась и знаю материал' },
      {
        thought: 'Все будут лучше меня',
        response: 'Каждый готовился по-разному, и у всех свои сильные стороны',
      },
    ],
    emotions: {
      joy_happy: false,
      joy_love: false,
      joy_pleasure: false,
      joy_satisfaction: false,
      joy_gratitude: false,
      joy_confidence: false,
      joy_admiration: false,
      joy_calm: false,
      joy_fun: false,
      sadness_sad: false,
      sadness_disappointment: false,
      sadness_sorrow: false,
      sadness_sadness: false,
      sadness_deep_sadness: false,
      anger_anger: false,
      anger_irritation: false,
      anger_spitefulness: false,
      fear_fear: true,
      fear_anxiety: true,
      fear_fright: false,
      fear_shock: false,
      shame_embarrassment: false,
      shame_shyness: false,
      disgust_disgust: false,
      surprise_surprise: false,
      surprise_thought: false,
      other_boredom: false,
      other_tiredness: false,
      other_confusion: false,
      other_relief: false,
    },
    physicalSensations: 'Тряслись руки',
    behavior: 'Попросила дополнительное время',
    discomfortLevel: 7,
    cognitiveDistortions: {
      everythingOrNothing: false,
      overgeneralization: false,
      negativeFilter: true,
      discountingThePositive: true,
      mindreading: true,
      fortuneTelling: true,
      catastrophizing: false,
      magnificationAndMinimization: false,
      emotionalReasoning: true,
      shouldStatements: false,
      labeling: true,
      personalization: false,
      retrospectiveDistortion: false,
    },
    postComment: 'Теперь понимаю, что могу доверять своей подготовке и знаниям',
    newDiscomfortLevel: 3,
  },
  {
    id: '7',
    date: '2024-07-04T08:00:00Z',
    title: 'Опоздала на встречу',
    situation: 'Опоздала на важную встречу с клиентом.',
    automaticThoughts: [
      {
        thought: 'Клиент больше не захочет работать с нами',
        response: 'Один случай не определяет всё сотрудничество',
      },
    ],
    emotions: {
      joy_happy: false,
      joy_love: false,
      joy_pleasure: false,
      joy_satisfaction: false,
      joy_gratitude: false,
      joy_confidence: false,
      joy_admiration: false,
      joy_calm: false,
      joy_fun: false,
      sadness_sad: true,
      sadness_disappointment: true,
      sadness_sorrow: false,
      sadness_sadness: true,
      sadness_deep_sadness: false,
      anger_anger: false,
      anger_irritation: true,
      anger_spitefulness: false,
      fear_fear: false,
      fear_anxiety: true,
      fear_fright: false,
      fear_shock: false,
      shame_embarrassment: true,
      shame_shyness: false,
      disgust_disgust: false,
      surprise_surprise: false,
      surprise_thought: false,
      other_boredom: false,
      other_tiredness: false,
      other_confusion: false,
      other_relief: false,
    },
    physicalSensations: 'Напряженные мышцы',
    behavior: 'Извинилась и предложила альтернативное время',
    discomfortLevel: 6,
    cognitiveDistortions: {
      everythingOrNothing: false,
      overgeneralization: false,
      negativeFilter: true,
      discountingThePositive: false,
      mindreading: true,
      fortuneTelling: true,
      catastrophizing: false,
      magnificationAndMinimization: true,
      emotionalReasoning: true,
      shouldStatements: false,
      labeling: true,
      personalization: false,
      retrospectiveDistortion: false,
    },
    postComment:
      'Теперь понимаю, что важны извинения и готовность исправить ситуацию',
    newDiscomfortLevel: 3,
  },
  {
    id: '8',
    date: '2024-06-19T11:00:00Z',
    title: 'Получила критику',
    situation: 'Начальник раскритиковал мою работу.',
    automaticThoughts: [
      {
        thought: 'Я не справляюсь',
        response: 'Это возможность улучшить свои навыки',
      },
    ],
    emotions: {
      joy_happy: false,
      joy_love: false,
      joy_pleasure: false,
      joy_satisfaction: false,
      joy_gratitude: false,
      joy_confidence: false,
      joy_admiration: false,
      joy_calm: false,
      joy_fun: false,
      sadness_sad: true,
      sadness_disappointment: true,
      sadness_sorrow: false,
      sadness_sadness: true,
      sadness_deep_sadness: false,
      anger_anger: false,
      anger_irritation: true,
      anger_spitefulness: false,
      fear_fear: true,
      fear_anxiety: true,
      fear_fright: false,
      fear_shock: false,
      shame_embarrassment: false,
      shame_shyness: false,
      disgust_disgust: false,
      surprise_surprise: false,
      surprise_thought: false,
      other_boredom: false,
      other_tiredness: false,
      other_confusion: false,
      other_relief: false,
    },
    physicalSensations: 'Напряженные плечи',
    behavior: 'Поговорила с начальником о конкретных улучшениях',
    discomfortLevel: 7,
    cognitiveDistortions: {
      everythingOrNothing: false,
      overgeneralization: true,
      negativeFilter: true,
      discountingThePositive: false,
      mindreading: true,
      fortuneTelling: false,
      catastrophizing: false,
      magnificationAndMinimization: true,
      emotionalReasoning: true,
      shouldStatements: false,
      labeling: false,
      personalization: false,
      retrospectiveDistortion: false,
    },
    postComment: 'Теперь понимаю, что критика - это возможность для роста',
    newDiscomfortLevel: 4,
  },
  {
    id: '9',
    date: '2024-07-01T13:30:00Z',
    title: 'Проблемы со здоровьем',
    situation: 'Обнаружила у себя симптомы болезни.',
    automaticThoughts: [
      {
        thought: 'Это что-то серьезное',
        response: 'Нужно обратиться к врачу и не паниковать заранее',
      },
    ],
    emotions: {
      joy_happy: false,
      joy_love: false,
      joy_pleasure: false,
      joy_satisfaction: false,
      joy_gratitude: false,
      joy_confidence: false,
      joy_admiration: false,
      joy_calm: false,
      joy_fun: false,
      sadness_sad: true,
      sadness_disappointment: false,
      sadness_sorrow: true,
      sadness_sadness: true,
      sadness_deep_sadness: false,
      anger_anger: false,
      anger_irritation: false,
      anger_spitefulness: false,
      fear_fear: true,
      fear_anxiety: true,
      fear_fright: false,
      fear_shock: false,
      shame_embarrassment: false,
      shame_shyness: false,
      disgust_disgust: false,
      surprise_surprise: false,
      surprise_thought: false,
      other_boredom: false,
      other_tiredness: false,
      other_confusion: false,
      other_relief: false,
    },
    physicalSensations: 'Тяжесть в груди',
    behavior: 'Записалась к врачу',
    discomfortLevel: 8,
    cognitiveDistortions: {
      everythingOrNothing: false,
      overgeneralization: true,
      negativeFilter: true,
      discountingThePositive: false,
      mindreading: true,
      fortuneTelling: true,
      catastrophizing: false,
      magnificationAndMinimization: false,
      emotionalReasoning: true,
      shouldStatements: false,
      labeling: false,
      personalization: false,
      retrospectiveDistortion: false,
    },
    postComment:
      'Теперь понимаю, что важно своевременно обращаться за медицинской помощью и не паниковать заранее',
    newDiscomfortLevel: 3,
  },
  {
    id: '10',
    date: '2024-07-05T19:00:00Z',
    title: 'Получила отказ',
    situation: 'Получила отказ на работу мечты.',
    automaticThoughts: [
      {
        thought: 'Я недостаточно хороша',
        response: 'Это неудача, но я могу попробовать еще раз',
      },
    ],
    emotions: {
      joy_happy: false,
      joy_love: false,
      joy_pleasure: false,
      joy_satisfaction: false,
      joy_gratitude: false,
      joy_confidence: false,
      joy_admiration: false,
      joy_calm: false,
      joy_fun: false,
      sadness_sad: true,
      sadness_disappointment: true,
      sadness_sorrow: true,
      sadness_sadness: true,
      sadness_deep_sadness: false,
      anger_anger: false,
      anger_irritation: false,
      anger_spitefulness: false,
      fear_fear: true,
      fear_anxiety: true,
      fear_fright: false,
      fear_shock: false,
      shame_embarrassment: false,
      shame_shyness: false,
      disgust_disgust: false,
      surprise_surprise: false,
      surprise_thought: false,
      other_boredom: false,
      other_tiredness: false,
      other_confusion: false,
      other_relief: false,
    },
    physicalSensations: 'Тяжесть в груди',
    behavior: 'Обратилась к другу за поддержкой',
    discomfortLevel: 7,
    cognitiveDistortions: {
      everythingOrNothing: false,
      overgeneralization: true,
      negativeFilter: true,
      discountingThePositive: false,
      mindreading: true,
      fortuneTelling: true,
      catastrophizing: false,
      magnificationAndMinimization: false,
      emotionalReasoning: true,
      shouldStatements: false,
      labeling: true,
      personalization: false,
      retrospectiveDistortion: false,
    },
    postComment: 'Теперь понимаю, что могу продолжать искать и не сдаваться',
    newDiscomfortLevel: 4,
  },
  {
    id: '11',
    date: '2024-07-13T16:00:00Z',
    title: 'Выходной день',
    situation: 'Провела день на природе.',
    automaticThoughts: [
      {
        thought: 'Надо было заняться работой',
        response: 'Важно отдыхать и наслаждаться моментами',
      },
    ],
    emotions: {
      joy_happy: true,
      joy_love: true,
      joy_pleasure: true,
      joy_satisfaction: true,
      joy_gratitude: true,
      joy_confidence: true,
      joy_admiration: false,
      joy_calm: true,
      joy_fun: true,
      sadness_sad: false,
      sadness_disappointment: false,
      sadness_sorrow: false,
      sadness_sadness: false,
      sadness_deep_sadness: false,
      anger_anger: false,
      anger_irritation: false,
      anger_spitefulness: false,
      fear_fear: false,
      fear_anxiety: false,
      fear_fright: false,
      fear_shock: false,
      shame_embarrassment: false,
      shame_shyness: false,
      disgust_disgust: false,
      surprise_surprise: false,
      surprise_thought: false,
      other_boredom: false,
      other_tiredness: false,
      other_confusion: false,
      other_relief: true,
    },
    physicalSensations: 'Расслабленность',
    behavior: 'Отдохнула и зарядиться энергией',
    discomfortLevel: 1,
    cognitiveDistortions: {
      everythingOrNothing: false,
      overgeneralization: false,
      negativeFilter: false,
      discountingThePositive: false,
      mindreading: false,
      fortuneTelling: false,
      catastrophizing: false,
      magnificationAndMinimization: false,
      emotionalReasoning: false,
      shouldStatements: false,
      labeling: false,
      personalization: false,
      retrospectiveDistortion: false,
    },
    postComment: 'Теперь понимаю, что отдых - это важно для здоровья',
    newDiscomfortLevel: 1,
  },
];
