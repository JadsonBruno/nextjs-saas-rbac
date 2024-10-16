import { z } from 'zod'

export const userSubject = z.tuple([
    z.union([
        z.literal('manage'),
        z.literal('get'),
        z.literal('delete'),
        z.literal('update'),
        z.literal('invite'),
    ]),
    z.literal('User'),
])
const value: z.infer<typeof userSubject> = ['delete', 'User']
export type UserSubject = [(typeof value)[0], (typeof value)[1]]
