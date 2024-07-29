import { z } from 'zod';

import { biases, emotionGroups } from '@/constants';

export const searchParamsSchema = z.object({
  q: z.string().optional(),
  start_date: z.string().date().optional(),
  end_date: z.string().date().optional(),
});

export type SearchParamsType = z.infer<typeof searchParamsSchema>;

const cognitiveDistortionSchema = z.object(
  /* eslint-disable no-param-reassign */
  biases.reduce(
    (schema, bias) => {
      schema[bias.id] = z.boolean();
      return schema;
    },
    {} as Record<string, z.ZodBoolean>
  )
  /* eslint-enable no-param-reassign */
);

export type CognitiveDistortionType = z.infer<typeof cognitiveDistortionSchema>;

const emotionKeys = Object.values(emotionGroups).flatMap((group) =>
  group.emojis.map((emotion) => emotion.name)
);

const emotionsSchema = z.object(
  Object.fromEntries(emotionKeys.map((key) => [key, z.boolean()]))
);

export const automaticThoughtsSchema = z.array(
  z.object({
    thought: z.string().min(1),
    response: z.string(),
  })
);

export const schemaNote = z.object({
  title: z.string(),
  situation: z.string().min(1, 'Кратко опишите ситуацию'),
  automaticThoughts: automaticThoughtsSchema,
  emotions: emotionsSchema,
  physicalSensations: z.string(),
  behavior: z.string(),
  discomfortLevel: z.number().min(0).max(10),
  cognitiveDistortions: cognitiveDistortionSchema,
});

export type FormFieldsType = z.infer<typeof schemaNote>;

export const PostCheckoutSchema = z.object({
  postComment: z.string().optional(),
  newDiscomfortLevel: z.number().min(0).max(10).optional(),
});

export type PostCheckoutFormDataType = z.infer<typeof PostCheckoutSchema>;

export const combinedSchema = schemaNote.merge(PostCheckoutSchema);

export const NoteSchema = combinedSchema.extend({
  id: z.string(),
  date: z.string().datetime({ offset: true }),
});

export type Note = z.infer<typeof NoteSchema>;
