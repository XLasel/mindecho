import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { updateNote } from "@/redux/noteSlice";
import { useAppDispatch } from "@/redux/hook";
import { Note } from "@/redux/noteSlice";

import { Button } from "@/components/common/Button";
import { RangeInput } from "@/components/common/RangeInput";
import { ResizableTextarea } from "@/components/common/ResizableTextarea";

import s from "./PostCheckoutForm.module.scss";

const PostCheckoutSchema = z.object({
  postComment: z.string().optional(),
  newDiscomfortLevel: z.coerce.number().min(0).max(10).optional(),
});

type PostCheckoutFormData = z.infer<typeof PostCheckoutSchema>;

export const PostCheckoutForm = ({ note }: { note: Note }) => {
  const methods = useForm<PostCheckoutFormData>({
    defaultValues: {
      postComment: note?.postComment || "",
      newDiscomfortLevel: note?.newDiscomfortLevel || 1,
    },
    resolver: zodResolver(PostCheckoutSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { isDirty },
    reset,
  } = methods;
  const dispatch = useAppDispatch();

  const onSubmit = (data: PostCheckoutFormData) => {
    const currentData = { ...note, ...data };
    dispatch(updateNote(currentData));
    reset();
  };

  // const onSubmit = (data: PostCheckoutFormData) => {
  //   const currentData = { ...note, ...data };
  //   dispatch(updateNote(currentData));
  //   // reset();
  // };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.root}>
        <div>
          <label htmlFor="postComment">Комментарий</label>
          <ResizableTextarea id="postComment" name="postComment" />
          {/* <input id="postComment" {...register("postComment")} /> */}
          {/* {errors.comment && <p>{errors.comment.message}</p>} */}
        </div>
        <div>
          <label htmlFor="newDiscomfortLevel">Уровень дискомфорта сейчас</label>
          {/* <input
          id="newDiscomfortLevel"
          type="number"
          {...register("newDiscomfortLevel")}
        /> */}
          <RangeInput id="newDiscomfortLevel" name="newDiscomfortLevel" />
          {/* {errors.newDiscomfortLevel && <p>{errors.newDiscomfortLevel.message}</p>} */}
        </div>
        <div className={s.buttons}>
          <Button size="sm" type="submit" disabled={!isDirty}>
            Сохранить
          </Button>
          <Button size="sm" type="reset" variant="ghost" disabled={!isDirty}>
            Сбросить к начальным
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
