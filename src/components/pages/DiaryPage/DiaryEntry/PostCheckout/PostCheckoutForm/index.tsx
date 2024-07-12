import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { type Note } from "@/redux/noteSlice";
import { updateNote } from "@/redux/noteSlice";
import { useAppDispatch } from "@/redux/hook";

import { Button } from "@/components/common/Button";
import { RangeInput } from "@/components/common/RangeInput";
import { ResizableTextarea } from "@/components/common/ResizableTextarea";

import { normalizeRangeValue } from "@/lib/utils";

import s from "./PostCheckoutForm.module.scss";

const PostCheckoutSchema = z.object({
  postComment: z.string().optional(),
  newDiscomfortLevel: z.coerce.number().min(0).max(10).optional(),
});

type PostCheckoutFormData = z.infer<typeof PostCheckoutSchema>;

export const PostCheckoutForm = ({
  note,
  editModeHandler,
}: {
  note: Note;
  editModeHandler: (mode: boolean) => void;
}) => {
  const methods = useForm<PostCheckoutFormData>({
    defaultValues: {
      postComment: note?.postComment || "",
      newDiscomfortLevel: normalizeRangeValue(note.newDiscomfortLevel),
    },
    resolver: zodResolver(PostCheckoutSchema),
  });

  const {
    handleSubmit,
    formState: { isDirty },
    reset,
  } = methods;

  const dispatch = useAppDispatch();

  const onSubmit = (data: PostCheckoutFormData) => {
    const currentData = { ...note, ...data };
    dispatch(updateNote(currentData));
    reset();
    editModeHandler(false);
  };

  const onReset = () => {
    reset();
    editModeHandler(false);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.root}>
        <div className={s.section}>
          <label htmlFor="postComment">Комментарий</label>
          <ResizableTextarea id="postComment" name="postComment" />
        </div>
        <div className={s.section}>
          <label htmlFor="newDiscomfortLevel">Уровень дискомфорта</label>
          <RangeInput
            className={s.range}
            id="newDiscomfortLevel"
            name="newDiscomfortLevel"
          />
        </div>
        <div className={s.buttons}>
          <Button size="sm" type="submit">
            Сохранить
          </Button>
          <Button
            size="sm"
            type="button"
            onClick={onReset}
            variant="ghost"
            disabled={!isDirty}
          >
            Сбросить
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
