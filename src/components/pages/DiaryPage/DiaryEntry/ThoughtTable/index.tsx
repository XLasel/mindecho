import { CognitiveBiasBadgeList } from '@/components/common/CognitiveBiasBadgeList';
import { EmotionChipList } from '@/components/common/EmotionChipList';
import { biases, emotionGroups } from '@/constants';
import { filteredBiases, filteredEmotionsGroup, isEmptyObject } from '@/utils';

import s from './ThoughtTable.module.scss';

export const ThoughtTable = ({ data }: { data: Note }) => {
  const currentEmotionData = filteredEmotionsGroup(
    data?.emotions,
    emotionGroups
  );
  const currentBiasData = filteredBiases(data?.cognitiveDistortions, biases);

  return (
    <div className={s.root}>
      <table>
        <tbody>
          {!isEmptyObject(currentEmotionData) && (
            <tr>
              <th>Эмоции</th>
              <td>
                <EmotionChipList emotionData={currentEmotionData} />
              </td>
            </tr>
          )}
          {data.physicalSensations && (
            <tr>
              <th>Физические ощущения</th>
              <td>
                <p>{data.physicalSensations}</p>
              </td>
            </tr>
          )}
          {data.behavior && (
            <tr>
              <th>Поведения</th>
              <td>
                <p>{data.behavior}</p>
              </td>
            </tr>
          )}
          {data.discomfortLevel > -1 && (
            <tr>
              <th>Уровень дискомфорта</th>
              <td>
                <p>{data.discomfortLevel} / 10</p>
              </td>
            </tr>
          )}
          {!isEmptyObject(currentBiasData) && (
            <tr>
              <th>Когнитивные искажения</th>
              <td>
                <CognitiveBiasBadgeList biasesData={currentBiasData} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
