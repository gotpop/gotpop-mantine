import { articlesdata } from "@/data/articles"
import type { NextApiRequest, NextApiResponse } from "next"
import { ArticlesDataType } from "../articles"

type Data = {
  articleData: ArticlesDataType | undefined
}

export default function handleArticle(req: NextApiRequest, res: NextApiResponse<Data>) {
  const article = articlesdata.find((a: ArticlesDataType) => a.id === req.query.id)

  res.status(200).json({ articleData: article })
}
