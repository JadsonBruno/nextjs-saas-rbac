import { z } from 'zod'

export const billingSubject = z.tuple([
    z.union([z.literal('manage'), z.literal('get'), z.literal('export')]),
    z.literal('Billing'),
])

const value: z.infer<typeof billingSubject> = ['manage', 'Billing']
export type BillingSubject = [(typeof value)[0], (typeof value)[1]]
