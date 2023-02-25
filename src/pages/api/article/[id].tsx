import { articlesdata } from "@/data/articles"
import type { NextApiRequest, NextApiResponse } from "next"
import { ArticlesDataType } from "../articles"

export default function handleArticle(
  req: NextApiRequest,
  res: NextApiResponse<ArticlesDataType | undefined>
) {
  const { id } = req.query
  const article = articlesdata.find((a: ArticlesDataType) => a.id === id)

  res.status(200).json(article)
}
