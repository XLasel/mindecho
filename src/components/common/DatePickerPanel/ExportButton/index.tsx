import React, { useEffect, useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import FeatherIcon from 'feather-icons-react';
import { saveAs } from 'file-saver';
import { motion } from 'framer-motion';

import { Button, type ButtonProps } from '@/components/common/Button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/common/Tooltip';
import { useAppSelector } from '@/redux/hook';
import { selectAllNotes } from '@/redux/selectors';
import { filterNotesByDateRange } from '@/utils/helpers';

import { PDFTemplateNotes } from '../PDFTemplateNotes';

const spinTransition = {
  loop: Infinity,
  ease: 'linear',
  duration: 1,
};

interface ExportButtonProps extends ButtonProps {
  startDate: Date | undefined;
  endDate: Date | undefined;
}

export const ExportButton: React.FC<ExportButtonProps> = ({
  startDate,
  endDate,
  ...props
}) => {
  const notes = useAppSelector(selectAllNotes);
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);
  const [isReadyToRender, setIsReadyToRender] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (startDate && endDate) {
      const filtered = filterNotesByDateRange(notes, startDate, endDate);
      setFilteredNotes(filtered);
      if (filtered.length > 0) {
        setIsReadyToRender(true);
        setMessage(null);
      } else {
        setIsReadyToRender(false);
        setMessage('В указанном диапазоне записей не найдено');
      }
    } else {
      setIsReadyToRender(false);
      setMessage('Сначала задайте диапазон');
    }
  }, [notes, startDate, endDate]);

  const handleDownload = async () => {
    if (!startDate || !endDate) return;
    setLoading(true);
    const doc = (
      <PDFTemplateNotes
        notes={filteredNotes}
        startDate={startDate}
        endDate={endDate}
      />
    );
    const asPdf = pdf();
    asPdf.updateContainer(doc);
    const blob = await asPdf.toBlob();
    saveAs(blob, 'notes.pdf');
    setLoading(false);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            type="button"
            aria-label="Экпортировать записи за указанный период в PDF"
            disabled={!isReadyToRender || loading}
            onClick={handleDownload}
            {...props}
          >
            {loading ? (
              <motion.span
                animate={{ rotate: 360 }}
                transition={spinTransition}
              >
                <FeatherIcon icon="loader" />
              </motion.span>
            ) : (
              <FeatherIcon icon="download" />
            )}
          </Button>
        </TooltipTrigger>
        {!loading && message && (
          <TooltipContent>
            <p>{message}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};
