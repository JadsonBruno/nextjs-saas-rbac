import {
    createMongoAbility,
    CreateAbility,
    MongoAbility,
    AbilityBuilder,
} from '@casl/ability'
import { User } from './models/user'
import { permissions } from './permissions'
import { UserSubject } from './subjects/user'
import { ProjectSubject } from './subjects/project'
import { OrganizationSubject } from './subjects/organization'
import { InviteSubject } from './subjects/invite'
import { BillingSubject } from './subjects/billing'

type AppAbilities =
    | UserSubject
    | ProjectSubject
    | OrganizationSubject
    | InviteSubject
    | BillingSubject
    | ['manage', 'all']

export type AppAbility = MongoAbility<AppAbilities>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>

export function defineAbilityFor(user: User) {
    const builder = new AbilityBuilder(createAppAbility)

    if (typeof permissions[user.role] !== 'function') {
        throw new Error(`Permissions for role ${user.role} not found.`)
    }

    permissions[user.role](user, builder)

    const ability = builder.build({
        detectSubjectType(subject) {
            return subject.__typename
        },
    })
    return ability
}
