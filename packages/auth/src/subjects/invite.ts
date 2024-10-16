import { z } from 'zod'

export const inviteSubject = z.tuple([
    z.union([
        z.literal('manage'),
        z.literal('create'),
        z.literal('delete'),
        z.literal('get'),
    ]),
    z.literal('Invite'),
])

const value: z.infer<typeof inviteSubject> = ['manage', 'Invite']
export type InviteSubject = [(typeof value)[0], (typeof value)[1]]
