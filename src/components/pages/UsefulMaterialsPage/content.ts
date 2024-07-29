import { IMAGE } from '@/constants';

import { CognitiveBiasPage } from './materialJSXContent/CognitiveBiasPage';
import { MeditationMindfulnessPage } from './materialJSXContent/MeditationMindfulnessPage';

interface UsefulMaterial {
  id: string;
  title: string;
  description: string;
  image: string;
  content: () => JSX.Element;
}

type Materials = UsefulMaterial[];

export const materials: Materials = [
  {
    id: 'cognitive-distortions',
    title: 'Когнитивные искажения',
    description:
      'Мы смотрим на мир сквозь фильтры неосознанных предубеждений, страхов и ожиданий, и это приводит к ошибкам мышления — когнитивным искажениям, которые становятся причиной нерациональных решений и конфликтов. ',
    image: IMAGE.cognitiveBias,
    content: CognitiveBiasPage,
  },
  {
    id: 'meditation-mindfulness',
    title: 'Медитация и Осознанность',
    description:
      'Медитация и осознанность помогают улучшить ментальное здоровье, снизить уровень стресса и повысить качество жизни. Узнайте, как начать практику медитации и осознанности, и какие преимущества она может принести.',
    image: IMAGE.meditationMindfulness,
    content: MeditationMindfulnessPage,
  },
];
