import { z } from 'zod'
import { organizationSchema } from '../models/organization'

export const organizationSubject = z.tuple([
    z.union([
        z.literal('manage'),
        z.literal('create'),
        z.literal('delete'),
        z.literal('update'),
        z.literal('transfer_ownership'),
    ]),
    z.union([z.literal('Organization'), organizationSchema]),
])

const value: z.infer<typeof organizationSubject> = ['manage', 'Organization']
export type OrganizationSubject = [(typeof value)[0], (typeof value)[1]]
