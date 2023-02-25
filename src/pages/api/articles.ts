import { articlesdata } from './../../data/articles';
import type { NextApiRequest, NextApiResponse } from 'next'

export type ArticlesDataType = {
    title: string;
    image: string;
    date: string;
    id: string;
}

export default function handleArticles(req: NextApiRequest, res: NextApiResponse<ArticlesDataType[]>) {
    res.status(200).json(articlesdata)
}