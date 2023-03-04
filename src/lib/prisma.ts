import { Mission, Prisma, PrismaClient } from "@prisma/client"

declare global {
    var prisma: PrismaClient | undefined

    namespace PrismaJson {
        type NftType = {
            logo: string
            tagline: string
            background: string
        }

        type ContactsType = {
            key: string
            active: boolean
        }
    }
}

const prisma = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma

// const MissionWithContent = Prisma.validator<Prisma.MissionArgs>()({
//     include: { contacts: true, nft: true }
// })

// export type MissionWithContent = Prisma.MissionGetPayload<typeof MissionWithContent>

export default prisma
