import { authOptions } from './auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { Mission } from '@prisma/client'

export default async function missionHandler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions)

    if (req.method !== 'POST' && req.method !== 'GET') {
        return res.status(401).send(`Method ${req.method} not allowed`)
    }

    if (!session) {
        return res.status(401).json({ message: "You must be logged in." })
    }

    const { user } = session
    const sessionEmail = user?.email ? user?.email : undefined

    if (req.method === 'GET') {
        const missionItem = await prisma.mission.findUnique({
            where: { userId: sessionEmail }
        })

        return res.status(200).json(missionItem)
    }

    if (req.method === 'POST') {
        const { body } = req
        const { username, password, name, email, website, github, missionType }: Mission = body

        const makeMissionItem = await prisma.mission.upsert({
            where: { userId: sessionEmail },
            update: {
                username,
                password,
                name,
                email,
                website,
                github,
                missionType,
            },
            create: {
                username,
                password,
                name,
                email,
                website,
                github,
                missionType,
                user: {
                    connect: { email: sessionEmail },
                },
            },
        })

        return res.status(200).json(makeMissionItem)
    }
}
