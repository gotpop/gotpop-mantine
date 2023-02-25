import { NextApiRequest, NextApiResponse } from "next"
import { usersData } from "@/data/users"
import type { usersData as usersDataType } from "../users"

export default function handlePerson(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req
  const { id } = query
  const user = usersData.find((p: usersDataType) => p.id === id)

  return res.status(200).json(user)
}
