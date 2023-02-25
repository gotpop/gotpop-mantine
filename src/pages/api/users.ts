import { usersData } from './../../data/users';
import type { NextApiRequest, NextApiResponse } from 'next'

export type UsersData = {
    avatar: string;
    name: string;
    job: string;
    email: string;
    id: string;
    rate: number;
}

export default function usersDataExport(req: NextApiRequest, res: NextApiResponse<UsersData[]>) {
    res.status(200).json(usersData)
}