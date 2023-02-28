import { authOptions } from './auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { Mission } from '@prisma/client'

export default async function handleMisson(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions)

    if (req.method !== 'POST' && req.method !== 'GET') {
        return res.status(401).send(`Method ${req.method} not allowed`)
    }

    if (!session) {
        res.status(401).json({ message: "You must be logged in." });
        return;
    }

    const { user } = session

    if (req.method === 'POST') {
        const { body } = req
        const { username, password, name, email, website, github, missionType }: Mission = body

        const makeMissionItem = await prisma.mission.upsert({
            where: { userId: user?.email ? user?.email : undefined },
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
                username: username,
                password,
                name,
                email,
                website,
                github,
                missionType,
                user: {
                    connect: { email: user?.email as string },
                },
            },
        })

        return res.status(200).json(makeMissionItem)
    }
}
