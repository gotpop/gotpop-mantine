import { usersData } from './../../data/users';
import type { NextApiRequest, NextApiResponse } from 'next'

export type usersData = {
    avatar: string;
    name: string;
    job: string;
    email: string;
    id: string;
    rate: number;
}

type Data = {
    userData: usersData[]
}

export default function usersDataExport(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json({ userData: usersData })
}