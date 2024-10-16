import { z } from 'zod'
import { projectSchema } from '../models/project'

export const projectSubject = z.tuple([
    z.union([
        z.literal('manage'),
        z.literal('create'),
        z.literal('get'),
        z.literal('delete'),
        z.literal('update'),
    ]),
    z.union([z.literal('Project'), projectSchema]),
])

const value: z.infer<typeof projectSubject> = ['create', 'Project']
export type ProjectSubject = [(typeof value)[0], (typeof value)[1]]
