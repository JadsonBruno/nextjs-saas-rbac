import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER', id: 'user' })

const userCanInviteSomeoneElse = ability.can('get', 'Billing')
const userCanDeleteOthersUsers = ability.can('create', 'Invite')

console.log(userCanInviteSomeoneElse)
console.log(userCanDeleteOthersUsers)
