import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import type { CognitiveBias } from '@/constants/types';

import { CognitiveBiasBadge } from '../CognitiveBiasBadge';

import s from './CognitiveBiasBadgeList.module.scss';

interface CognitiveBiasBadgeListProps {
  biasesData: CognitiveBias[];
}

export const CognitiveBiasBadgeList: React.FC<CognitiveBiasBadgeListProps> = ({
  biasesData,
}) => {
  const constraintsRef = useRef(null);
  const [isDraggable, setIsDraggable] = useState(false);

  useEffect(() => {
    const checkIfDraggable = () => {
      if (constraintsRef.current) {
        const { clientWidth, scrollWidth } = constraintsRef.current;
        setIsDraggable(scrollWidth > clientWidth);
      }
    };

    checkIfDraggable();
    window.addEventListener('resize', checkIfDraggable);
    return () => {
      window.removeEventListener('resize', checkIfDraggable);
    };
  }, []);

  return (
    <div className={s.root}>
      <div className={s.container} ref={constraintsRef}>
        <motion.div
          drag={isDraggable ? 'x' : false}
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          style={{
            cursor: isDraggable ? 'grab' : 'auto',
          }}
          whileDrag={{ cursor: 'grabbing' }}
          className={s.list}
        >
          {biasesData.map((bias) => (
            <CognitiveBiasBadge key={bias.id} {...bias} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
