import clsx from "clsx";

import {
  Accordion,
  AccordionContent,
  AccordionHeader,
} from "@/components/common/accordion";
import { SpoilerText } from "@/components/common/SpoilerText";

import s from "./CognitiveBiasCard.module.scss";

type CognitiveBiasCardProps = {
  bias: {
    title: string;
    description?: string;
    examples?: string[];
  };
  onChange?: () => void;
  checked?: boolean;
};

export const CognitiveBiasCard: React.FC<CognitiveBiasCardProps> = ({
  bias,
  onChange,
  checked,
}) => {
  return (
    <div className={clsx(s.root, checked && s.rootChecked)}>
      <Accordion style="flow">
        <AccordionHeader>
          <div className={s.header}>
            <h5 className={s.title}>{bias.title}</h5>
            {onChange && (
              <label className={s.checkbox}>
                <input
                  className={s.input}
                  type="checkbox"
                  checked={checked}
                  onChange={onChange}
                />
                {checked && <span className={s.iconChecked} />}
              </label>
            )}
          </div>
        </AccordionHeader>
        <AccordionContent>
          {bias.description && (
            <p className={s.description}>{bias.description}</p>
          )}
          {bias.examples && (
            <SpoilerText titleClosed="Пример">
              <ul>
                {bias.examples.map((example, index) => (
                  <li key={index}>
                    <i>{example}</i>
                  </li>
                ))}
              </ul>
            </SpoilerText>
          )}
        </AccordionContent>
      </Accordion>
    </div>
  );
};

// export const CognitiveBiasCard: React.FC<CognitiveBiasCardProps> = ({
//   bias,
//   onChange,
//   checked,
// }) => {
//   return (
//     <div className={clsx(s.root, checked && s.rootChecked)}>
//       <AccordionLegacy
//         title={
//           <div className={s.header}>
//             <h5 className={s.title}>{bias.title}</h5>
//             {onChange && (
//               <label className={s.checkbox}>
//                 <input
//                   className={s.input}
//                   type="checkbox"
//                   checked={checked}
//                   onChange={onChange}
//                 />
//                 {checked && <span className={s.iconChecked} />}
//               </label>
//             )}
//           </div>
//         }
//       >
//         {bias.description && (
//           <p className={s.description}>{bias.description}</p>
//         )}
//         {bias.examples && (
//           <SpoilerText titleClosed="Пример">
//             <ul>
//               {bias.examples.map((example, index) => (
//                 <li key={index}>
//                   <i>{example}</i>
//                 </li>
//               ))}
//             </ul>
//           </SpoilerText>
//         )}
//       </AccordionLegacy>
//     </div>
//   );
// };
