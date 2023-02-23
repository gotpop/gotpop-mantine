import { articlesdata } from './../../data/articles';
import type { NextApiRequest, NextApiResponse } from 'next'

export type ArticlesDataType = {
    title: string;
    image: string;
    date: string;
    id: string;
}

export type Data = {
    articlesdata: ArticlesDataType[]
}

export default function handleArticles(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json({ articlesdata: articlesdata })
}